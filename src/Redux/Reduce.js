import { types } from "./Contents";

export const data = {
  dataBook: [{ name: "", price: 0, type: "", img: "", tinhtrang: "", id: 0 }],
  login: []
};

const reduce = (state = data, action) => {
  switch (action.type) {
    case types.ADD_BOOK:
      return state;
    case types.loadBook:
      return {
        ...state,
        dataBook: action.payload
      }
    default:
      return state;
  }
};

export default reduce