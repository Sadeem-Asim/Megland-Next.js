import { SET_ACCOUNT, SET_CLIENT, SET_CONTRACT } from "./type";

export const setAccount = (value) => (dispatch) => {
  dispatch({ type: SET_ACCOUNT, payload: value });
};

export const setClient = (value) => (dispatch) => {
  dispatch({ type: SET_CLIENT, payload: value });
};

export const setContract = (value) => (dispatch) => {
  dispatch({ type: SET_CONTRACT, payload: value });
};
