import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Initial State
const initialState = {
  selectedTitle: '',  // Will hold the title passed from the card
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        selectedTitle: action.payload,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

export { store, Provider };
