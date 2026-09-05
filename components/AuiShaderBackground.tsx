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

// Perlin noise function
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

  // Interpolate between gradient results
  float bl = grad(pi, pf);
  float br = grad(pi + vec2(1.0, 0.0), pf - vec2(1.0, 0.0));
  float tl = grad(pi + vec2(0.0, 1.0), pf - vec2(0.0, 1.0));
  float tr = grad(pi + vec2(1.0, 1.0), pf - vec2(1.0, 1.0));

  vec2 fadePos = fade(pf);

  return mix(mix(bl, br, fadePos.x), mix(tl, tr, fadePos.x), fadePos.y);
}

// Radial twist/smudge function
vec2 twistUV(vec2 uv, float strength) {
  vec2 center = vec2(0.5, 0.5);
  vec2 offset = uv - center;
  float angle = length(offset) * strength;
  float s = sin(angle);
  float c = cos(angle);

  // Apply the twist by rotating the UVs
  mat2 rotation = mat2(c, -s, s, c);
  return center + rotation * offset;
}

void main() {
  vec2 uv = v_texCoord;

  // Oscillation for streaky flow
  float oscX = sin(u_time * 0.9) * 0.06;
  float oscY = cos(u_time * 1.0) * 0.06;
  uv.x += oscX - 0.05;
  uv.y += oscY;

  // Apply rotation for distortion effect
  float angle = -0.5;
  mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  uv = rotation * (uv - 0.5) + 0.5;

  // Distortion parameters
  float strength = 0.22;
  float speed = u_time * 0.6;
  float scaleX = 3.0;
  float scaleY = 7.0;

  // Zig-zag modulation for streaks
  float zigZagFrequency = 6.0;
  float zigZagAmplitude = 0.15;
  uv.x += sin(uv.y * zigZagFrequency + u_time) * zigZagAmplitude;
  uv.y += sin(uv.x * zigZagFrequency + u_time * 0.95) * zigZagAmplitude * 0.5;

  // Add chaotic movement with Perlin noise
  float noiseX = perlinNoise(vec2(uv.x * scaleX, uv.y * scaleY) + vec2(speed, 5.0)) * strength;
  float noiseY = perlinNoise(vec2(uv.x * scaleX, uv.y * scaleY) + vec2(0.0, speed)) * strength * 0.8;

  // Apply the noise to distort UVs
  uv.x += noiseX * 2.5;
  uv.y += noiseY;

  // Overlap effect
  float overlapStrength = 0.0;
  float overlapRegion = sin(uv.x * 10.0 + u_time * 3.0) * overlapStrength;
  uv.x += overlapRegion * noiseX * 1.5;
  uv.y += overlapRegion * noiseY * 1.2;

  // Apply a final smudge/twist effect
  float twistStrength = 0.5 + sin(u_time * 0.3) * 0.4;
  uv = twistUV(uv, twistStrength);

  // Sample the texture using distorted UVs
  vec4 color = texture2D(u_image, uv);

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
    // Deep black base
    ctx.fillStyle = '#070200';
    ctx.fillRect(0, 0, 1024, 640);

    // Deep crimson/scarlet wash
    const g1 = ctx.createRadialGradient(280, 300, 30, 280, 300, 480);
    g1.addColorStop(0, '#ff4400');
    g1.addColorStop(0.35, '#d61f00');
    g1.addColorStop(0.7, '#6b0a00');
    g1.addColorStop(1, 'transparent');
    ctx.fillStyle = g1;
    ctx.fillRect(0, 0, 1024, 640);

    // Vivid brand orange #ff6600 & hot amber core
    const g2 = ctx.createRadialGradient(650, 380, 30, 650, 380, 440);
    g2.addColorStop(0, '#ff9900');
    g2.addColorStop(0.28, '#ff6600');
    g2.addColorStop(0.65, '#b32400');
    g2.addColorStop(1, 'transparent');
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, 1024, 640);

    // Diagonal gold/white highlight streak
    const g3 = ctx.createLinearGradient(120, 500, 900, 120);
    g3.addColorStop(0, 'transparent');
    g3.addColorStop(0.35, 'rgba(255, 120, 20, 0.85)');
    g3.addColorStop(0.52, 'rgba(255, 185, 60, 0.95)');
    g3.addColorStop(0.7, 'rgba(210, 35, 0, 0.7)');
    g3.addColorStop(1, 'transparent');
    ctx.fillStyle = g3;
    ctx.fillRect(0, 0, 1024, 640);

    // Subtle dark slate blue accent
    const g4 = ctx.createRadialGradient(900, 120, 20, 900, 120, 360);
    g4.addColorStop(0, '#2d4b68');
    g4.addColorStop(0.6, '#0d1926');
    g4.addColorStop(1, 'transparent');
    ctx.fillStyle = g4;
    ctx.fillRect(0, 0, 1024, 640);
  }
  return c;
}

export function AuiShaderBackground({
  imageSrc = '/images/home-gradient.jpeg',
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
