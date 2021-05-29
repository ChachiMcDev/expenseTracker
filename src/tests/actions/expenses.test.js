import { addExpense, removeExpense, editExpense, startAddExpense, setExpenses } from '../../actions/expenses';
import expenseData from '../fixtures/expensesData';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

 // add your middlewares like `redux-thunk`
const createMockStore = configureStore([thunk]);


beforeEach((done) => {
    const expensesData = {};
    expenseData.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt};
    })

    database.ref('expenses').set(expensesData).then(() => done());
});


//REMOVE_EXPENSE TEST
test('should return object with type: REMOVE_EXPENSE and id', () =>{
    const action = removeExpense({ id: '123456789'})
    expect(action).toEqual({type: 'REMOVE_EXPENSE', id: '123456789'})
});



//EDIT_EXPENSE TEST
const editExpObjMatch = {
    type: 'EDIT_EXPENSE',
    id: '1234jkl',
    updates: {
        description: 'blabh desc',
        note: 'suckit',
        amount: 100
    }  
}
test('should return object with type: EDIT_EXPENSE and id and updates', ()=>{
    const action = editExpense('1234jkl', {description: 'blabh desc', note:'suckit', amount:100});
    expect(action).toEqual(editExpObjMatch)
})



//ADD_EXPENSE TEST
const addExpObjMatch = {
    type: 'ADD_EXPENSE',
    expense: {
        description: expect.any(String),
        note: expect.any(String),
        amount: expect.any(Number),
        createdAt: expect.any(Number)
    }
}

test('should return object with type: ADD_EXPENSE', ()=>{
    const action = addExpense({
        description: 'mild description', 
        note: 'milder note', 
        amount: 200, 
        createdAt: 500});
        expect(action).toEqual(addExpObjMatch)
});


test('should setup add expense object with default values', ()=>{

    const action = addExpense(expenseData[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenseData[2]
    });
});


test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 2000,
        note: 'this one is ok i guess',
        createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
       
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
       
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});




test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    //empty object
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })


});

test('should setup set expenses action object with data', () => {
    const action = setExpenses(expenseData);

    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses: expenseData
    });
});