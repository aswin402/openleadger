'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface AuiShaderBackgroundProps {
  imageSrc?: string;
  active?: boolean;
  className?: string;
}

const VERTEX_SHADER_SOURCE = `
attribute vec2 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}
`;

const FRAGMENT_SHADER_SOURCE = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif

uniform sampler2D u_image;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_bendStrength;
varying vec2 v_texCoord;

// Perlin noise functions
vec2 fade(vec2 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float grad(vec2 p, vec2 pos) {
  vec2 grad = fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
  return (dot(grad * 2.0 - 1.0, pos));
}

float perlinNoise(vec2 p) {
  vec2 pi = floor(p);
  vec2 pf = fract(p);

  float bl = grad(pi, pf);
  float br = grad(pi + vec2(1.0, 0.0), pf - vec2(1.0, 0.0));
  float tl = grad(pi + vec2(0.0, 1.0), pf - vec2(0.0, 1.0));
  float tr = grad(pi + vec2(1.0, 1.0), pf - vec2(1.0, 1.0));

  vec2 fadePos = fade(pf);

  return mix(mix(bl, br, fadePos.x), mix(tl, tr, fadePos.x), fadePos.y);
}

void main() {
  vec2 uv = v_texCoord;

  // Gentle, organic orbital drift
  float t = u_time * 0.35;
  float flowX = sin(t * 0.7 + uv.y * 1.5) * 0.04;
  float flowY = cos(t * 0.6 + uv.x * 1.5) * 0.04;

  // Multi-frequency smooth organic noise
  float n1 = perlinNoise(uv * 2.2 + vec2(t * 0.25, -t * 0.2)) * 0.07;
  float n2 = perlinNoise(uv * 4.5 - vec2(t * 0.15, t * 0.3)) * 0.035;

  vec2 distortedUV = uv + vec2(flowX + n1, flowY + n2);

  // Ping-pong mirror clamp to prevent any edge seam or smear
  vec2 wrappedUV = abs(fract(distortedUV * 0.5 + 0.5) * 2.0 - 1.0);

  vec4 color = texture2D(u_image, wrappedUV);

  // Subtle warm luminous breath
  float breath = sin(u_time * 0.5) * 0.012;
  color.rgb += vec3(breath * 0.8, breath * 0.5, breath * 0.2);

  gl_FragColor = color;
}
`;

// Helper: Procedural high-resolution gradient canvas
function createProceduralGradient(): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = 640;
  const ctx = c.getContext('2d');
  if (ctx) {
    // Warm luminous cream/ivory base matching uploaded image (#FAF6F2)
    ctx.fillStyle = '#FAF6F2';
    ctx.fillRect(0, 0, 1024, 640);

    // Radiant top-right orange glow (#FF7A29 / #FFA45E)
    const g1 = ctx.createRadialGradient(920, 80, 40, 870, 130, 620);
    g1.addColorStop(0, '#FF7A29');
    g1.addColorStop(0.3, '#FFA45E');
    g1.addColorStop(0.65, '#FFD5B8');
    g1.addColorStop(1, 'transparent');
    ctx.fillStyle = g1;
    ctx.fillRect(0, 0, 1024, 640);

    // Soft bottom-left warm peach glow (#FFA86A / #FDCBA4)
    const g2 = ctx.createRadialGradient(180, 520, 30, 220, 500, 520);
    g2.addColorStop(0, '#FFA86A');
    g2.addColorStop(0.4, '#FDCBA4');
    g2.addColorStop(0.75, '#FAF0E6');
    g2.addColorStop(1, 'transparent');
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, 1024, 640);

    // Subtle bottom-right warm golden peach accent (#FCD8B8)
    const g3 = ctx.createRadialGradient(920, 580, 20, 920, 580, 400);
    g3.addColorStop(0, '#FCD8B8');
    g3.addColorStop(0.5, '#FCE8D5');
    g3.addColorStop(1, 'transparent');
    ctx.fillStyle = g3;
    ctx.fillRect(0, 0, 1024, 640);
  }
  return c;
}

export function AuiShaderBackground({
  imageSrc = '/images/hero-ambient-gradient.png',
  active = true,
  className = ''
}: AuiShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const posBufferRef = useRef<WebGLBuffer | null>(null);
  const texCoordBufferRef = useRef<WebGLBuffer | null>(null);
  const textureRef = useRef<WebGLTexture | null>(null);
  const animFrameRef = useRef<number>(0);
  const isRunningRef = useRef<boolean>(false);
  const isUnmountedRef = useRef<boolean>(false);
  const [restartKey, setRestartKey] = useState<number>(0);

  // Compile shaders & create program
  const createProgram = useCallback((gl: WebGLRenderingContext) => {
    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn('Shader compile failed:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vert = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const frag = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
    if (!vert || !frag) return null;

    const program = gl.createProgram();
    if (!program) return null;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('Program link failed:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }
    return program;
  }, []);

  // Setup quad geometry buffers
  const setupBuffers = (gl: WebGLRenderingContext) => {
    if (posBufferRef.current) gl.deleteBuffer(posBufferRef.current);
    if (texCoordBufferRef.current) gl.deleteBuffer(texCoordBufferRef.current);

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );
    posBufferRef.current = posBuffer;

    const texBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0]),
      gl.STATIC_DRAW
    );
    texCoordBufferRef.current = texBuffer;
  };

  // Upload texture to GPU (supports Canvas or Image)
  const uploadTexture = useCallback((gl: WebGLRenderingContext, source: TexImageSource) => {
    try {
      let tex = textureRef.current;
      if (!tex) {
        tex = gl.createTexture();
        textureRef.current = tex;
      }
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    } catch (e) {
      console.warn('Failed to upload texture:', e);
    }
  }, []);

  // Teardown WebGL resources
  const cleanupGL = (gl: WebGLRenderingContext | null) => {
    isRunningRef.current = false;
    cancelAnimationFrame(animFrameRef.current);
    if (gl) {
      if (programRef.current) gl.deleteProgram(programRef.current);
      if (posBufferRef.current) gl.deleteBuffer(posBufferRef.current);
      if (texCoordBufferRef.current) gl.deleteBuffer(texCoordBufferRef.current);
      if (textureRef.current) gl.deleteTexture(textureRef.current);
      programRef.current = null;
      posBufferRef.current = null;
      texCoordBufferRef.current = null;
      textureRef.current = null;
    }
  };

  // Handle WebGL context loss
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onContextLost = (e: Event) => {
      e.preventDefault();
      setRestartKey((k) => k + 1);
    };

    canvas.addEventListener('webglcontextlost', onContextLost, false);
    return () => {
      canvas.removeEventListener('webglcontextlost', onContextLost);
    };
  }, []);

  // Main lifecycle: init WebGL, load image texture, start loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    isUnmountedRef.current = false;
    let gl = glRef.current;

    if (!gl && active) {
      gl = (canvas.getContext('webgl', {
        antialias: false,
        alpha: false,
        powerPreference: 'high-performance',
      }) || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
      glRef.current = gl;
    }

    if (gl && active && !isRunningRef.current) {
      isRunningRef.current = true;
      const prog = createProgram(gl);
      programRef.current = prog;
      setupBuffers(gl);

      // 1. Instantly upload procedural fallback gradient so canvas is NEVER blank
      const procCanvas = createProceduralGradient();
      uploadTexture(gl, procCanvas);

      // 2. Load the high-res texture image from aui.io
      const img = new Image();
      img.src = imageSrc;

      const activeGL = gl;
      const handleImageReady = () => {
        if (!isUnmountedRef.current && activeGL) {
          uploadTexture(activeGL, img);
        }
      };

      if (img.complete && img.naturalWidth > 0) {
        handleImageReady();
      } else if (img.decode) {
        img.decode().then(handleImageReady).catch(() => {
          img.onload = handleImageReady;
        });
      } else {
        img.onload = handleImageReady;
      }

      // 3. Render loop with auto-resizing & DPR awareness
      const renderLoop = () => {
        if (!activeGL || !programRef.current || isUnmountedRef.current || !isRunningRef.current) {
          return;
        }

        const cvs = activeGL.canvas as HTMLCanvasElement;
        const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);
        const displayW = Math.round((cvs.clientWidth || cvs.parentElement?.clientWidth || window.innerWidth) * dpr);
        const displayH = Math.round((cvs.clientHeight || cvs.parentElement?.clientHeight || window.innerHeight) * dpr);

        if (displayW > 0 && displayH > 0 && (cvs.width !== displayW || cvs.height !== displayH)) {
          cvs.width = displayW;
          cvs.height = displayH;
        }

        const width = cvs.width || 800;
        const height = cvs.height || 600;

        activeGL.viewport(0, 0, width, height);
        activeGL.clear(activeGL.COLOR_BUFFER_BIT);
        activeGL.useProgram(programRef.current);

        const program = programRef.current;
        const uRes = activeGL.getUniformLocation(program, 'u_resolution');
        const uTime = activeGL.getUniformLocation(program, 'u_time');
        const uImage = activeGL.getUniformLocation(program, 'u_image');
        const uBend = activeGL.getUniformLocation(program, 'u_bendStrength');

        activeGL.uniform2f(uRes, width, height);
        activeGL.uniform1f(uTime, 0.001 * performance.now());
        activeGL.uniform1f(uBend, 0.2);

        if (textureRef.current) {
          activeGL.activeTexture(activeGL.TEXTURE0);
          activeGL.bindTexture(activeGL.TEXTURE_2D, textureRef.current);
          activeGL.uniform1i(uImage, 0);
        }

        if (posBufferRef.current) {
          activeGL.bindBuffer(activeGL.ARRAY_BUFFER, posBufferRef.current);
          const aPos = activeGL.getAttribLocation(program, 'a_position');
          if (aPos !== -1) {
            activeGL.enableVertexAttribArray(aPos);
            activeGL.vertexAttribPointer(aPos, 2, activeGL.FLOAT, false, 0, 0);
          }
        }

        if (texCoordBufferRef.current) {
          activeGL.bindBuffer(activeGL.ARRAY_BUFFER, texCoordBufferRef.current);
          const aTex = activeGL.getAttribLocation(program, 'a_texCoord');
          if (aTex !== -1) {
            activeGL.enableVertexAttribArray(aTex);
            activeGL.vertexAttribPointer(aTex, 2, activeGL.FLOAT, false, 0, 0);
          }
        }

        activeGL.drawArrays(activeGL.TRIANGLES, 0, 6);
        animFrameRef.current = requestAnimationFrame(renderLoop);
      };

      const handleWindowResize = () => {
        if (!activeGL || isUnmountedRef.current) return;
        const cvs = activeGL.canvas as HTMLCanvasElement;
        const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);
        const displayW = Math.round((cvs.clientWidth || cvs.parentElement?.clientWidth || window.innerWidth) * dpr);
        const displayH = Math.round((cvs.clientHeight || cvs.parentElement?.clientHeight || window.innerHeight) * dpr);
        if (displayW > 0 && displayH > 0) {
          cvs.width = displayW;
          cvs.height = displayH;
          activeGL.viewport(0, 0, displayW, displayH);
        }
      };
      window.addEventListener('resize', handleWindowResize, { passive: true });

      animFrameRef.current = requestAnimationFrame(renderLoop);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    } else if (!active && isRunningRef.current && gl) {
      cleanupGL(gl);
    }

    return () => {
      isUnmountedRef.current = true;
      if (glRef.current) {
        cleanupGL(glRef.current);
      }
    };
  }, [imageSrc, active, restartKey, createProgram, uploadTexture]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full block ${className}`}
    />
  );
}
