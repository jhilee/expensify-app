import { createStore } from 'redux';

//action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
 });

 const decrementCount = ( {decrementBy = 1} = {} ) => ({
     type: 'DECREMENT',
     decrementBy
 });

 const setCount = ({setValue} = {}) => ({
     type: 'SET',
     setValue

 });

 const resetCount = () => ({
     type: 'RESET'
 });

//reducers
// 1. Reducers are pure functions
// - output is determined by input only 
// 2. Never change state or action

const countReducers = (state = { count : 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.setValue
            }
        case 'RESET':
            return {
                count: 0  
            };
        default:
            return state;
    }
};

const store = createStore(countReducers);

//alerts when state changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//convention for action type
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5}))

store.dispatch(incrementCount({ }))

store.dispatch(decrementCount());

store.dispatch(decrementCount( {decrementBy: 10} ));

store.dispatch(setCount({setValue: -10101010}));

store.dispatch(resetCount());


