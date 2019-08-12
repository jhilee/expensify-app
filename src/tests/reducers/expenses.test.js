import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('shoudl set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expenses by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        description: 'Internet',
        note: '',
        amount: 55,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => { 
    const updates = {
        id: expenses[1].id,
        note: 'rent for may'
    }
    const  action = {
        type: 'EDIT_EXPENSE',
        updates
    }
    const state = expensesReducer(expenses, action);
    const editedExpense = {
        ...expenses[1],
        ...action.expense
    }

    expect(state).toEqual([expenses[0],editedExpense, expenses[2]]);
});

test('should not edit expense if not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        amount: 100
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);

 });