   import { GET_PARTNERS , GET_SINGLE_PARTNER } from "./type";

const fatahData = async (url) => {
  const res = await fetch(`${url}`);
  const data = await res.json();
  return data;
};

export const getPartners= () => async (dispatch) => {
  dispatch({
    type: GET_PARTNERS,
    payload: await fatahData("/static/partners.json"),
  });
}; 
export const getSinglePartner = (id) => async (dispatch) => {
  const data = await fatahData("/static/partners.json");

  dispatch({
    type: GET_SINGLE_PARTNER,
    payload: data.find((data) => data.id === Number(id)),
  });
};
