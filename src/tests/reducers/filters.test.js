import moment from 'moment';
import filtersReducer from '../../reducers/filters';

//testing default values of store state
test('should set up default filter values', ()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

//SET_TEXT_FILTER test
test('should set text filter', ()=>{
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text:'abcdefg'});
    expect(state.text).toBe('abcdefg');
});

//SORT_BY_AMOUNT test
test('should set sortBy to amount', ()=>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT', sortBy: 'amount'});
    expect(state.sortBy).toBe('amount');
});

//SORT_BY_DATE test
test('should set sortyBy to date', ()=>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_DATE', sortBy: 'date'});
    expect(state.sortBy).toBe('date');
});

//SET_START_DATE test
test('should set startdate', ()=>{
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

//SET_END_DATE test
test('should set enddate', ()=>{
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});
