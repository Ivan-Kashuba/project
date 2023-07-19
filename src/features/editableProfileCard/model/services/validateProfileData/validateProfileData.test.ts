import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../const/consts';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test('without last and first name', async () => {
        const result = validateProfileData({ ...data, lastname: '', firstname: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('without last name', async () => {
        const result = validateProfileData({ ...data, lastname: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('empty country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('empty full state', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY]);
    });
});
