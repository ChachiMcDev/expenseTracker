
import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, setSortByDateFilter, setSortByAmountFilter, setStartDate, setEndDate } from '../actions/filters';




export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onTextChange = (event) => {
        this.props.setTextFilter(event.target.value);
    }

    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.setSortByDateFilter();

        } else if (e.target.value === 'amount') {
            this.props.setSortByAmountFilter();

        }
    };

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Search Expenses"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            name="sortby"
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}

                        />
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({

    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setSortByDateFilter: () => dispatch(setSortByDateFilter()),
    setSortByAmountFilter: () => dispatch(setSortByAmountFilter()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))

});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);




//import React from 'react';
//import { connect } from 'react-redux';
//import { DateRangePicker } from 'react-dates';
//import { setTextFilter, setSortByDateFilter, setSortByAmountFilter, setStartDate, setEndDate } from '../actions/filters';
//
//
//const ExpenseListFilters = (props) => (
//    <div>
//        <input 
//            type="text" 
//            value={props.filters.text} 
//            onChange={(event) => {
//            props.dispatch(setTextFilter(event.target.value));
//        }}/>
//        
//        <select 
//            name="sortby"
//            value={props.filters.sortBy}
//            onChange={(event)=>{
//                let targ = event.target.value;
//                if(targ === "amount"){
//                    props.dispatch(setSortByAmountFilter())
//                }
//                if(targ === "date"){
//                    props.dispatch(setSortByDateFilter())
//                }
//        }}>
//            <option value="date">Date</option>
//            <option value="amount">Amount</option>
//            <option value="start-to-end-date">
//            <DateRangePicker 
//                startDate={props.filters.startDate}
//                endDate={props.filters.endDate}
//                onDatesChange={}
//                focusedInput={}
//                onFocusChange={}
//            />
//                Date: start to end</option>
//        </select>
//    </div>
//);
//
//
//
//
//export default connect(mapStateToProps)(ExpenseListFilters);