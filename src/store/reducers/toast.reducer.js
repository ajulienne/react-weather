import { addToastAction, removeToastAction } from "../actions/toast.actions";

const initialState = {
  toast: null,
};

export const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case addToastAction:
      return {
        ...state,
        toast: action.payload,
      };
    case removeToastAction:
      return {
        ...state,
        toast: null,
      };
    default:
      return state;
  }
};
