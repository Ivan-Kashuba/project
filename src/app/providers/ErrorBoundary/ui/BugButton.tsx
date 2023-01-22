import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Component for creating error to test Error Boundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrowError = () => setError(true);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <div>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={onThrowError}
            >
                {t('Throw Error')}
            </Button>
        </div>

    );
};
