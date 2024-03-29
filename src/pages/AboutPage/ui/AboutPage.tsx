import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="About">
            <div>{t('about')}</div>
        </Page>
    );
};

export default AboutPage;
