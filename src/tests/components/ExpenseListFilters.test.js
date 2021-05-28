import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

//spys
let setTextFilterSpy, sortByDate, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;

beforeEach(() =>{
    setTextFilterSpy = jest.fn();
    sortByDate = jest.fn();
    sortByAmountSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
                        filters={filters}
                        setTextFilter={setTextFilterSpy} 
                        setSortByDateFilter={sortByDate} 
                        setSortByAmountFilter={sortByAmountSpy} 
                        setStartDate={setStartDateSpy}
                        setEndDate={setEndDateSpy}
                       
                    />);
});


//
//test('should handle editExpense', ()=>{
//    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
//    expect(historySpy.push).toHaveBeenLastCalledWith('/');
//    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
//    
//});
//
test('should render the expense list filters correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render the expense list ALT filters correctly', ()=>{
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();

});

test('should handle a text change', ()=>{
    const targetValue = 'changing of the text'
    wrapper.find('input').simulate('change', {
            target: {
                    value: targetValue
            }
    });
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(targetValue);
});

test('should sort by date', ()=>{
    const targetValue = 'date';
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', {
        target: {
            value: targetValue
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', ()=>{
    const targetValue = 'amount'
    wrapper.find('select').simulate('change', {
        target: {
            value: targetValue
        }
    });
    expect(sortByAmountSpy).toHaveBeenCalled();
});
//test('should sort by amount', ()=>{});
//test('should sort date changes', ()=>{});
//test('should sort date focus changes', ()=>{});
