import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expensesData';

//test default
test('should set up default expenses', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});



//ADD_EXPENSE test
test('should add an expense', () => {
    const expense = {
        id: '3',
        description: 'added expense',
        note: 'heres a note',
        amount: 19282783,
        createdAt: 0
    }

    const action = {
        type: 'ADD_EXPENSE', 
        expense
    }
    const state = expenseReducer(expenses, action);

  //  expect(state).toEqual([expenses[0], expenses[1], expenses[2], expenses[3]]);
    expect(state).toEqual([...expenses, expense]);
});




//REMOVE_EXPENSE test
test('should remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

//SHOULD NOT REMOVE_EXPENSE if ID doesn't exist
test('should not remove expense if wrong ID', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '57'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

//EDIT_EXPENSE test
test('should edit an expense by id', () => {

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'new descrip'
        }
    }

    const state = expenseReducer(expenses, action);
    expect(state[0].description).toBe('new descrip');
});


//DO NOT EDIT EXPENSE by ID
test('should NOT edit expense if wrong ID', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '52',
        updates : {
            amount: 27
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses)
});



