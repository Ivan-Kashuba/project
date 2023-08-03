import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    firstname: 'Name',
    lastname: 'LastName',
    age: 22,
    currency: Currency.USD,
    country: Country.Ukraine,
    city: 'Kyiv',
    username: 'user',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'user' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    beforeEach(() => {
        ComponentRender(<EditableProfileCard id="1" />, options);
    });

    test('readonly mode should be changed', async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument();
    });

    test('on cancel value should be returned', async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'New name',
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.lastname'),
            'New lastname',
        );

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            'New name',
        );
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        );
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Name');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue(
            'LastName',
        );
    });

    test('Should show error', async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph'),
        ).toBeInTheDocument();
    });

    test('Success save send request', async () => {
        const mockPutReq = jest.spyOn($api, 'put');

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'New name',
        );
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(mockPutReq).toHaveBeenCalled();
    });
});
