import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from '../getLoginPassword/getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: 'password',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
