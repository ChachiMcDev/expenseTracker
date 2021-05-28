import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expensesData';


//test data
//const expenses = [{
//    id: '1',
//    description: 'yup',
//    note: '',
//    amount: 195,
//    createdAt: 0
//},{
//    id: '2',
//    description: 'rent',
//    note: '',
//    amount: 295,
//    createdAt: moment(0).subtract(4, 'days').valueOf()
//},{
//    id: '3',
//    description: 'credit card',
//    note: '',
//    amount: 395,
//    createdAt: moment(0).add(4, 'days').valueOf()
//}
//]
//
//filter by text test
test('should filter by text value', ()=>{
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters );
    expect(result).toEqual([ expenses[2], expenses[1] ])
});

//filter by amount test
test('should filter by amount value', () =>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1], expenses[0] ])
});

//filter by date test
test('should filter by date value', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

//filter by startDate test
test('should filter objects by startDate', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]])
});

//filter by endDate test
test('should filter objects by endDate', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1] ])
});



