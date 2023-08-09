import { rtkApi } from '@/shared/api/rtkApi';

const createArticleApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        createArticle: build.mutation<void, any>({
            query: (body) => ({
                url: '/articles',
                body,
                method: 'POST',
            }),
        }),
    }),
});

export const { useCreateArticleMutation } = createArticleApi;
