import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    text: ' const renderBlock = useCallback((block: ArticleBlock) => {\n'
        + '        switch (block.type) {\n'
        + '        case ArticleBlockType.CODE:\n'
        + '            return <ArticleCodeBlockComponent className={cls.block} />;\n'
        + '        case ArticleBlockType.TEXT:\n'
        + '            return <ArticleTextBlockComponent block={block} className={cls.block} />;\n'
        + '        case ArticleBlockType.IMAGE:\n'
        + '            return <ArticleImageBlockComponent className={cls.block} />;\n'
        + '\n'
        + '        default:\n'
        + '            return null;\n'
        + '        }\n'
        + '    }, []);',
};

Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    text: ' const renderBlock = useCallback((block: ArticleBlock) => {\n'
        + '        switch (block.type) {\n'
        + '        case ArticleBlockType.CODE:\n'
        + '            return <ArticleCodeBlockComponent className={cls.block} />;\n'
        + '        case ArticleBlockType.TEXT:\n'
        + '            return <ArticleTextBlockComponent block={block} className={cls.block} />;\n'
        + '        case ArticleBlockType.IMAGE:\n'
        + '            return <ArticleImageBlockComponent className={cls.block} />;\n'
        + '\n'
        + '        default:\n'
        + '            return null;\n'
        + '        }\n'
        + '    }, []);',
};
