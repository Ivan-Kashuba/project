import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FieldArray, FormikProps, FormikProvider, useFormik } from 'formik';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCreateForm.module.scss';
import { useCreateArticleMutation } from '../../api/createArticleApi';
import { getUserAuthData } from '@/entities/User';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { changeDateToYyyyMmDdFormat } from '@/shared/helpers/changeDateToYyyyMmDdFormat/changeDateToYyyyMmDdFormat';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { ArticleBlock, ArticleBlockType, ArticleType } from '@/entities/Article';
import { ListBox } from '@/shared/ui/Popups';
import { createFieldsByArticleType } from '../../helpers/createFieldsByArticleType/createFieldsByArticleType';
import { ArticleInputsByType } from '../ArticleInputsByType/ArticleInputsByType';

export interface CreateArticleFormProps {
    className?: string;
    onClose?: () => void;
}

export interface InitialBlock {
    type: string;
    code?: string;
    src?: string;
    title?: string;
    paragraphs?: string[];
}

export interface InitialFormikValues {
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    userId?: string;
    type: ArticleType[];
    blocks: ArticleBlock[] | InitialBlock[];
}

const ArticleCreateForm = memo(({ className, onClose }: CreateArticleFormProps) => {
    const { t } = useTranslation('article');
    const authData = useSelector(getUserAuthData);

    const [createArticle, { isError }] = useCreateArticleMutation();

    const blockTypeOptions = useMemo<SelectOption<ArticleBlockType>[]>(
        () =>
            Object.values(ArticleBlockType).map((type) => ({
                value: type,
                content: type,
            })),
        [],
    );

    const formik: FormikProps<InitialFormikValues> = useFormik<InitialFormikValues>({
        initialValues: {
            title: '',
            subtitle: '',
            img: '',
            views: 0,
            createdAt: changeDateToYyyyMmDdFormat(new Date()),
            userId: authData?.id,
            type: [],
            blocks: [{ type: '' }],
        },
        onSubmit: async (values, { setSubmitting }) => {
            createArticle(values)
                .unwrap()
                .then(() => {
                    onClose?.();
                })
                .finally(() => {
                    setSubmitting(false);
                });
        },
    });

    return (
        <div className={classNames(cls.CreateArticleForm, {}, [className])}>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    {isError && <h3 className={cls.error}>{t('Something went wrong')}</h3>}
                    <Input
                        id="title"
                        name="title"
                        type="text"
                        label={t('Title')}
                        isFormik
                        formikHandleChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />

                    <Input
                        id="subtitle"
                        name="subtitle"
                        type="text"
                        label={t('Subtitle')}
                        isFormik
                        formikHandleChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subtitle}
                    />

                    <Input
                        id="img"
                        name="img"
                        type="text"
                        label={t('Image URL')}
                        isFormik
                        formikHandleChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.img}
                    />

                    <FieldArray
                        name="blocks"
                        render={(arrayHelpers) => (
                            <div>
                                {formik.values.blocks.map((block, index) => (
                                    <div key={index} className={cls.blockItem}>
                                        <ListBox
                                            className={classNames('', {}, [className])}
                                            onChange={(value) => {
                                                createFieldsByArticleType(
                                                    formik,
                                                    index,
                                                    value as ArticleBlockType,
                                                );
                                            }}
                                            value={formik.values.blocks[index].type}
                                            items={blockTypeOptions}
                                            defaultValue={t('Select')}
                                            direction="top right"
                                            label={t('Article type')}
                                        />

                                        <ArticleInputsByType block={block} index={index} />
                                    </div>
                                ))}
                                <Button onClick={() => arrayHelpers.push({ type: '' })}>
                                    {t('Add')}
                                </Button>
                            </div>
                        )}
                    />
                    <Button disabled={formik.isSubmitting} className={cls.submitBtn} type="submit">
                        {t('Create')}
                    </Button>
                </form>
            </FormikProvider>
        </div>
    );
});

export default ArticleCreateForm;
