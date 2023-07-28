import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import { Button, ThemeButton } from '../Button/Button';
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
                tabs.map((tab, index) => (
                    <Button theme={ThemeButton.CLEAR} key={index}>
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
