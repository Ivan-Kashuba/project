import { FormikProps } from 'formik';
import { ArticleBlockType } from '@/entities/Article';
import { InitialFormikValues } from '../../ui/ArticleCreateForm/ArticleCreateForm';

export function createFieldsByArticleType(
    formik: FormikProps<InitialFormikValues>,
    index: number,
    value: ArticleBlockType,
) {
    formik.setFieldValue(`blocks.${index}.type`, value);
    if (value === ArticleBlockType.CODE) {
        formik.setFieldValue(`blocks.${index}.code`, '');
    }

    if (value === ArticleBlockType.IMAGE) {
        formik.setFieldValue(`blocks.${index}.src`, '');
        formik.setFieldValue(`blocks.${index}.title`, '');
    }

    if (value === ArticleBlockType.TEXT) {
        formik.setFieldValue(`blocks.${index}.title`, '');
        formik.setFieldValue(`blocks.${index}.paragraphs`, ['']);
    }
}
