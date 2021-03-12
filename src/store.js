import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const ADD_INCOME = 'ADD_INCOME';
const EDIT_INCOME = 'EDIT_INCOME';
const REMOVE_INCOME = 'REMOVE_INCOME';


export const addIncome = (incomeType, amount) => {
    return {
        type: ADD_INCOME,
        incomeType,
        amount
    }
}

export const removeIncome = (index) => {
    return {
        type: REMOVE_INCOME,
        index
    }
}


export const editIncome = (index, incomeType, amount) => {
    return {
        type: EDIT_INCOME,
        index,
        incomeType,
        amount
    }
}

const initialState = {
  incomes: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME:
        return {
            ...state, incomes: [
                ...state.incomes,
                ...[[action.incomeType, action.amount]],
              ]
        }
    case EDIT_INCOME:
        // console.log("I am here in editing!", action.incomType, action.amount)
        // console.log(action)
        const newIncome = [...state.incomes].filter((el, i) => {
            if (action.index === i) el = [action.incomeType, action.amount]
            return el
        })
        return {
            ...state, incomes: newIncome
        }

    case REMOVE_INCOME:
        const newIncomes = [...state.incomes].filter((el, i) => i!== action.index)
        return {
            
            ...state, incomes: newIncomes
        }

    default:
      return state;
  }
};


const store = createStore(reducer, applyMiddleware(thunk))

export default store