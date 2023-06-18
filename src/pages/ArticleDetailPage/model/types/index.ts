import { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema } from 'pages/ArticleDetailPage';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommendations: ArticleDetailsRecommendationsSchema
}
