import { memo, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string | number;
    content: ReactNode;
    disabled?: boolean
}

type DropDownDirection = 'top' | 'bottom'

interface ListBoxProps {
    className?: string
    items?: ListBoxItem[]
    value?: string
    defaultValue?: string
    onChange: (value: string) => void
    readOnly?: boolean
    direction?: DropDownDirection
    label?:string
}

export const ListBox = memo(({
    className, items, value, defaultValue, onChange, readOnly, direction = 'bottom', label,
}: ListBoxProps) => {
    const optionsClasses = [cls.options, cls[direction]];

    return (
        <div className={classNames(cls.container, {}, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}

            <HListBox
                disabled={readOnly}
                as="div"
                className={cls.ListBox}
                value={value}
                onChange={onChange}
            >
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, {
                                    [cls.active]: active,
                                    [cls.disabled]: item.disabled,
                                    [cls.selected]: selected,
                                }, [])}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readOnly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
            </HListBox>
        </div>
    );
});
