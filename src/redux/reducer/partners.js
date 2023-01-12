// import partners from "../../../pages/partners";
import { GET_SINGLE_PARTNER, GET_PARTNERS } from "../actions/type";

const partners = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PARTNERS:
      return {
        ...state,
        data: payload,
      };
    case GET_SINGLE_PARTNER:
      return {
        ...state,
        partner: payload,
      };

    default:
      return state;
  }
};
export default partners;
