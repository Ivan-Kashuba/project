import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../..';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('Should return true readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_AGE],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_AGE]);
    });
    test('Should return empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
