import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';
import { Post, CreatePostValues } from '@/types/schema';

export const usePosts = () => {
  const queryClient = useQueryClient();

  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await apiClient.get<{ success: boolean; data: (Post & { author: { name: string | null; email: string } })[] }>('/api/posts');
      return data.data;
    },
  });

  const createPostMutation = useMutation({
    mutationFn: async (newPost: CreatePostValues & { token: string }) => {
      const { token, ...postData } = newPost;
      const { data } = await apiClient.post<{ success: boolean; data: Post }>('/api/posts', postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  return {
    posts: postsQuery.data || [],
    isLoading: postsQuery.isLoading,
    error: postsQuery.error,
    createPost: createPostMutation.mutateAsync,
    isCreating: createPostMutation.isPending,
  };
};
