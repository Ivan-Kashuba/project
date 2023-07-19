import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <div>{t('Admin panel')}</div>
        </Page>
    );
};

export default AdminPanelPage;
