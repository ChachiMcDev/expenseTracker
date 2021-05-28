import moment from 'moment';
import { setStartDate, 
            setEndDate, 
            setSortByDateFilter,  
            setSortByAmountFilter, 
            setTextFilter } from '../../actions/filters';


//SET_START_DATE test
test('should generate start date object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});


//SET_END_DATE
test('should generate end date object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

//SORT_BY_DATE
test('should return action object set to date', ()=>{
    const action = setSortByDateFilter();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

//SORT_BY_AMOUNT
test('should return action object set to amount', ()=>{
    const action = setSortByAmountFilter();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

//SET_TEXT_FILTER
test('should return action object with text set', ()=>{
    const action = setTextFilter('abcdefg');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: expect.any(String)
    });
});

//SET_TEXT_FILTER --defaults
test('should return action object with text equal to " " ', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});