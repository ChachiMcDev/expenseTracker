import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expensesData';



test('expect expense list item to be rendered', ()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/> );
    expect(wrapper).toMatchSnapshot();
});