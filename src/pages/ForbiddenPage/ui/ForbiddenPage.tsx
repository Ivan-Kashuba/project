import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="ForbiddenPage">
            <div>{t('You have no access to this page')}</div>
        </Page>
    );
};

export default ForbiddenPage;
