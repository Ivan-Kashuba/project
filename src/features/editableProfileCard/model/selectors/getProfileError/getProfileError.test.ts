import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('Should return data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'Error Text',
            },
        };
        expect(getProfileError(state as StateSchema)).toBe('Error Text');
    });
    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
