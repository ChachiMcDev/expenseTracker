import selectExpensesTotal from '../../selectors/expenses-total';
import expenses, { noExpense, oneExpense } from '../fixtures/expensesData';


test('should return 0 if no expenses', ()=>{
    const result = selectExpensesTotal(noExpense);
    expect(result).toEqual(0);
});

test('should correctly add up a single expense', ()=>{ 
    const amount = oneExpense[0].amount
    const result = selectExpensesTotal(oneExpense);
    expect(result).toEqual(amount)

});

test('should correctly add up multiple expenses', ()=>{
    const amount = expenses[0].amount + expenses[1].amount + expenses[2].amount
    const result = selectExpensesTotal(expenses);
    expect(result).toEqual(amount)
});