import moment from 'moment';

//test data
export default [{
    id: '0',
    description: 'yup',
    note: 'there are some notes here',
    amount: 195,
    createdAt: 0
},{
    id: '1',
    description: 'rent',
    note: 'this is a note on ID 1',
    amount: 295,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '2',
    description: 'credit card',
    note: 'this is a note on ID 2',
    amount: 395,
    createdAt: moment(0).add(4, 'days').valueOf()
}];


export const noExpense = []

export const oneExpense = [{
    id: '0',
    description: 'yup',
    note: 'there are some notes here',
    amount: 195,
    createdAt: 0
}]

