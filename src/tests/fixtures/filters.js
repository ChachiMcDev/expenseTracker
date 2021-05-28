import moment from 'moment';

//test data
const filters =  {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined

}


const altFilters =  {
    text: 'go fflock yourself',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')

}

export { filters, altFilters }