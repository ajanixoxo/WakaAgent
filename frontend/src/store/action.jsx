export const setTitle = (title) => ({
    type: 'SET_TITLE',
    payload: title,
  });
  // reduxActions.js
export const updateInputValue = (newTitle) => ({
  type: 'UPDATE_INPUT_VALUE',
  payload: newTitle,
});
