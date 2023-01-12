import { SET_ACCOUNT, SET_CLIENT, SET_CONTRACT } from "../actions/type";

const initialState = {
  account: "",
  client: {},
  contract: {},
};

const web3 = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ACCOUNT:
      return {
        ...state,
        account: payload,
      };
    case SET_CLIENT:
      return {
        ...state,
        client: payload,
      };
    case SET_CONTRACT:
      return {
        ...state,
        contract: payload,
      };
    default:
      return state;
  }
};
export default web3;
