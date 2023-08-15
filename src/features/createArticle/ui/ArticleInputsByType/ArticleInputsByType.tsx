import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { FieldArray, useFormikContext } from 'formik';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleInputsByType.module.scss';
import { ArticleBlock, ArticleBlockType } from '@/entities/Article';
import { Input } from '@/shared/ui/Input/Input';
import { InitialBlock } from '../ArticleCreateForm/ArticleCreateForm';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';

interface ArticleInputsByTypeProps {
    className?: string;
    index: number;
    block: ArticleBlock | InitialBlock;
}

export const ArticleInputsByType = memo((props: ArticleInputsByTypeProps) => {
    const { t } = useTranslation();

    const { className, index, block } = props;

    const formik = useFormikContext();

    return (
        <div className={classNames('', {}, [className])}>
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
                                        formikHandleChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={p}
                                    />
                                ))}
                                <Button
                                    theme={ThemeButton.CLEAR}
                                    className={cls.addParBtn}
                                    onClick={() => ArrayHelpers.push('')}
                                >
                                    {t('Add paragraph')}
                                </Button>
                            </>
                        )}
                    />
                </>
            )}
        </div>
    );
});
