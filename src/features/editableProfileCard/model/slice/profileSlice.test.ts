import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileError } from '../..';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'User',
    age: 22,
    country: Country.Ukraine,
    lastname: 'Surname',
    firstname: 'FirstName',
    currency: Currency.UAH,
    city: 'Lviv',
    avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
};

describe('profileSlice.test', () => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
            readonly: true,
        });
    });
    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
        });
    });
    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                username: 'Old name',
            },
        };

        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: 'New Name' }))).toEqual({
            form: {
                username: 'New Name',
            },
        });
    });
    test('test update profile services pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test('test update profile services fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });
});
