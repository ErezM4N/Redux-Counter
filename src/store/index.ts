import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

export const INCREMENT = 'increment';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) { // allow to mutate the state cuz. its automacally do it for us
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action: any) {
            state.counter = state.counter + action.payload; //<--action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});



const store = configureStore({
    reducer: counterSlice.reducer //{counter: counterSlice.reducer}
});

export const counterActions = counterSlice.actions;

export default store;



// const counterReducer = (state = initialState, action: any) => {


//     switch (action.type) {
//         //NEVER MUTATE THE STATE JUST OVVERRIDE IT AND RETURN NEW OBJECT
//         case INCREMENT:
//             //state.counter++
//             return {
//                 //ref val its easy accidentally override and change existing state
//                 //obj and array are reference value
//                 counter: state.counter + 1,
//                 showCounter: state.showCounter
//             };

//         case 'increase':
//             return {
//                 counter: state.counter + action.amount,
//                 showCounter: state.showCounter
//             };

//         case 'decrement':
//             return {
//                 counter: state.counter - 1,
//                 showCounter: state.showCounter
//             };

//         case 'toggle':
//             return {
//                 counter: state.counter,
//                 showCounter: !state.showCounter
//             };

//         default:
//             return state;
//     }


// };

//createStore --> configureStore
