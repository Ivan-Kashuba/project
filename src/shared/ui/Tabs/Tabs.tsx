import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string
    content: ReactNode
}

interface TabsProps {
    className?: string
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
}

export const Tabs = memo(({
    className, tabs, onTabClick, value,
}: TabsProps) => {
    const clickHandle = useCallback((tab:TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {
                tabs.map((tab) => (
                    <Button theme={ThemeButton.CLEAR}>
                        <Card
                            theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                            className={cls.card}
                            key={tab.value}
                            onClick={clickHandle(tab)}
                        >
                            {tab.content}
                        </Card>
                    </Button>
                ))
            }
        </div>
    );
});