import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { useDetectDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (startCount: number) => void
    onAccept?: (startCount: number, feedback?: string) => void
    rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className, onCancel, onAccept, title, feedbackTitle, hasFeedback, rate = 0,
    } = props;

    const isMobile = useDetectDevice();

    const { t } = useTranslation();
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpened(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpened(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const declineHandle = useCallback(() => {
        setIsModalOpened(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const onCloseModal = useCallback(() => {
        setIsModalOpened(false);
    }, []);

    const modalContent = (
        <div className={cls.modalContainer}>
            <Text title={feedbackTitle} />
            <Input data-testid="RatingCard.Input" value={feedback} onChange={setFeedback} placeholder={t('Type your feedback')} />
            <div className={cls.buttons}>
                <Button data-testid="RatingCard.Close" onClick={declineHandle} theme={ThemeButton.OUTLINE_RED}>
                    {t('Cancel')}
                </Button>
                <Button data-testid="RatingCard.Send" onClick={acceptHandle} theme={ThemeButton.OUTLINE}>
                    {t('Send')}
                </Button>
            </div>
        </div>
    );

    return (
        <Card data-testid="RatingCard" className={classNames('', {}, [className])}>
            <div className={cls.container}>
                <Text title={starsCount ? t('Thanks for feedback') : title} />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </div>
            {hasFeedback && !isMobile && (
                <Modal isOpen={isModalOpened} onClose={onCloseModal} lazy>
                    {modalContent}
                </Modal>
            )}
            {hasFeedback && isMobile && (
                <Drawer isOpen={isModalOpened} onClose={onCloseModal} lazy>
                    {modalContent}
                </Drawer>
            )}
        </Card>
    );
});
