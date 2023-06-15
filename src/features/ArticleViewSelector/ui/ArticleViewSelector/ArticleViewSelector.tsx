import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from 'entities/Article';
import ListIcon from 'shared/assets/icons/listIcon.svg';
import GridIcon from 'shared/assets/icons/gridIcon.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (newView:ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: GridIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const onClick = (newView:ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                    className={cls.button}
                    key={viewType.view}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames(cls.icon, { [cls.selected]: viewType.view === view }, [className])}
                    />
                </Button>
            ))}
        </div>
    );
});
