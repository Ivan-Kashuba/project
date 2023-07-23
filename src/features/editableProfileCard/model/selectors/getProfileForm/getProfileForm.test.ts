import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('Should return data', () => {
        const form = {
            username: 'User',
            age: 22,
            country: Country.Ukraine,
            lastname: 'Surname',
            firstname: 'FirstName',
            currency: Currency.UAH,
            city: 'Lviv',
            avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('Should return empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
