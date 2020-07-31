export const addToastAction = "[TOAST] Add toast";
export const removeToastAction = "[TOAST] Remove toast";

export const addToast = (title, message, type) => (dispatch, getState) => {
  dispatch({
    type: addToastAction,
    payload: {
      title,
      message,
      type,
    },
  });
  setTimeout(() => {
    dispatch(removeToast());
  }, 3000);
};

export const removeToast = () => ({
  type: removeToastAction,
});
