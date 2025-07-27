import { incr,decr } from "./actions";
const initialState = {
    count : 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // alert(state.count)
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        case 'POWER' : 
            return {...state, count : Math.pow(state.count,2)}
        default:
            return state;
    }
}


export default CounterReducer;