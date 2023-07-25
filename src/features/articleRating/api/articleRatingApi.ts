import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface ArticleRatingResponse extends Rating {
    id: string
    userId: string
    articleId: string
}

interface ArticleRatingInputParams {
    userId: string
    articleId: string
}

type RateArticleArg = Rating & ArticleRatingInputParams

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<ArticleRatingResponse[], ArticleRatingInputParams >({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    userId, articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, RateArticleArg>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const { useGetArticleRatingQuery } = articleRatingApi;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
