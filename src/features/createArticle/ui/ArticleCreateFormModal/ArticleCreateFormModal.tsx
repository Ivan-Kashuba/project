import { memo, Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Modal } from '@/shared/ui/Modal/Modal';
import { ArticleCreateFormLazy } from '../ArticleCreateForm/ArticleCreateForm.async';

interface ArticleCreateFormModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const ArticleCreateFormModal = memo((props: ArticleCreateFormModalProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])} lazy>
            <Suspense fallback={<Loader />}>
                <ArticleCreateFormLazy onClose={onClose} />
            </Suspense>
        </Modal>
    );
});
