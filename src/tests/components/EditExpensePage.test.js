import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expensesData';


let editExpenseSpy, startRemoveExpense, historySpy, wrapper;

beforeEach(() =>{
    editExpenseSpy = jest.fn();
    startRemoveExpense = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
                         editExpense={editExpenseSpy} 
                         startRemoveExpense={startRemoveExpense} 
                         history={historySpy} 
                         expense={expenses[1]} 
                    />);
});


test('should render add expense page without errors', ()=>{
    expect(wrapper).toMatchSnapshot();
});


test('should handle editExpense', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    
});

test('should handle startRemoveExpense', ()=>{
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[1].id});
})


 