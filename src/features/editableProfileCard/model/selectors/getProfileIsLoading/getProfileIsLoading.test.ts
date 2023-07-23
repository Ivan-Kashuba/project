import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('Should return true loading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('Should return empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
    });
});
