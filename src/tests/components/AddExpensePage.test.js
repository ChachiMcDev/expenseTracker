import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expensesData';


let addExpenseSpy, historySpy, wrapper;

beforeEach(() =>{
    addExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={addExpenseSpy} history={historySpy}/>);
});


test('should render add expense page without errors', ()=>{
    expect(wrapper).toMatchSnapshot();
});


test('should handle onSubmit', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
});