import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout } from '../../actions/auth';
import expensesTotal from '../../selectors/expenses-total';


const createMockStore = configureMockStore([thunk]);

test('should login', () => {
    const uid = 'juhui123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should logout', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});