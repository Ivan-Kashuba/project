import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const MainPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('mainPage')}
        </Page>
    );
};

export default MainPage;
