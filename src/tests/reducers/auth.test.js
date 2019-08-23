import authReducer from '../../reducers/auth';

const uid = 'Re3545';

test('shoudl set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({},action);
    expect(state).toEqual({uid});
});

test('shoudl remove uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer(uid,action);
    expect(state).toEqual({});
});