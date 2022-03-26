import axios from "axios";
import { types } from "../Redux/Contents";
export const loadBooks = (products) => {
  return {
    type: types.loadBook,
    payload: products,
  };
};
export const getBooks = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://623c87337efb5abea682a7f7.mockapi.io/bookProduct/databook"
    );
    return dispatch(loadBooks(res.data));
  } catch (error) {
    console.error(error);
  }
};
