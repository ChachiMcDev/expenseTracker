import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';


test('expect expense list to be rendered with 1 expense', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/> );
    expect(wrapper).toMatchSnapshot();
});

test('expect expense list to be rendered with multiple expense', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={4} expensesTotal={45236589}/> );
    expect(wrapper).toMatchSnapshot();
});