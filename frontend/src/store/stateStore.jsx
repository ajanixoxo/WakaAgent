import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Initial State
const initialState = {
  selectedTitle: '',
  titlle:'',  // Will hold the title passed from the card
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TITLE':  // Sets the title when a card is clicked
      return {
        ...state,
        selectedTitle: action.payload,
      };
    case 'UPDATE_INPUT_VALUE':  // Updates the title from input field changes
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

export { store, Provider };
