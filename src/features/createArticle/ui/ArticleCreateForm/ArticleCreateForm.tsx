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

export interface CreateArticleFormProps {
    className?: string;
}

interface InitialBlock {
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

const ArticleCreateForm = memo(({ className }: CreateArticleFormProps) => {
    const { t } = useTranslation('article');
    const authData = useSelector(getUserAuthData);

    const [createArticle] = useCreateArticleMutation();

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
            title: 'New post',
            subtitle: 'New subtitle',
            // eslint-disable-next-line max-len
            img: 'data:image/jpeg;base64,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',
            views: 0,
            createdAt: changeDateToYyyyMmDdFormat(new Date()),
            userId: authData?.id,
            type: [],
            blocks: [{ type: '' }],
        },
        onSubmit: async (values, { setSubmitting }) => {
            const response = await createArticle(values).unwrap();
            setSubmitting(false);
            console.log('values:', values);
        },
        enableReinitialize: true,
    });

    return (
        <div className={classNames(cls.CreateArticleForm, {}, [className])}>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
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

                                        {block.type === ArticleBlockType.CODE && (
                                            <Input
                                                id={`blocks.${index}.code`}
                                                name={`blocks.${index}.code`}
                                                type="text"
                                                label={t('Code')}
                                                isFormik
                                                formikHandleChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={block.code}
                                            />
                                        )}

                                        {block.type === ArticleBlockType.IMAGE && (
                                            <>
                                                <Input
                                                    id={`blocks.${index}.src`}
                                                    name={`blocks.${index}.src`}
                                                    type="text"
                                                    label={t('Image')}
                                                    isFormik
                                                    formikHandleChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={block.src}
                                                />
                                                <Input
                                                    id={`blocks.${index}.title`}
                                                    name={`blocks.${index}.title`}
                                                    type="text"
                                                    label={t('Image title')}
                                                    isFormik
                                                    formikHandleChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={block.title}
                                                />
                                            </>
                                        )}

                                        {block.type === ArticleBlockType.TEXT && (
                                            <>
                                                <Input
                                                    id={`blocks.${index}.title`}
                                                    name={`blocks.${index}.title`}
                                                    type="text"
                                                    label={t('Text title')}
                                                    isFormik
                                                    formikHandleChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={block.title}
                                                />
                                                <FieldArray
                                                    name={`blocks.${index}.paragraphs`}
                                                    render={(ArrayHelpers) => (
                                                        <>
                                                            {block?.paragraphs?.map((p, ind) => (
                                                                <Input
                                                                    key={ind}
                                                                    id={`blocks.${index}.paragraphs.${ind}`}
                                                                    name={`blocks.${index}.paragraphs.${ind}`}
                                                                    type="text"
                                                                    label={t('Paragraph')}
                                                                    isFormik
                                                                    formikHandleChange={
                                                                        formik.handleChange
                                                                    }
                                                                    onBlur={formik.handleBlur}
                                                                    value={p}
                                                                />
                                                            ))}
                                                            <div
                                                                style={{
                                                                    fontSize: '14px',
                                                                    cursor: 'pointer',
                                                                    marginTop: '5px',
                                                                }}
                                                                onClick={() =>
                                                                    ArrayHelpers.push('')
                                                                }
                                                            >
                                                                {t('Add paragraph')}
                                                            </div>
                                                        </>
                                                    )}
                                                />
                                            </>
                                        )}
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
