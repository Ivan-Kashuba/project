import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../..';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice.test', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'User',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('User name'))).toEqual({
            username: 'User name',
        });
    });
    test('set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({
            password: '123',
        });
    });
    test('set isLoading true during pending', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: false,
        };
        expect(loginReducer(state as LoginSchema, loginByUsername.pending)).toEqual({
            isLoading: true,
        });
    });
});
