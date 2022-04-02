import { types } from "./Contents";
// JSON.parse(localStorage.getItem("key"))
// localStorage.setItem('key', JSON.stringify(value))

export const data = {
  dataBook: [
    { name: "", price: 0, type: "", img: "", tinhtrang: "", date: "", id: 0 },
  ],
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const reduce = (state = data, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const cartArr = {
        book: action.payload.book,
        count: action.payload.counts,
      };

      const currentBook = action.payload.book;

      const isHasBook = state.cart.find((b) => b.book.id === currentBook.id);

      let newState;
      let carts = [...state.cart];
      if (isHasBook) {
        const indexOfBook = state.cart.findIndex(
          (b) => b.book.id === currentBook.id
        );
        carts[indexOfBook].count += 1;

        newState = {
          ...state,
          cart: carts,
        };
      } else {
        newState = {
          ...state,
          cart: [...state.cart, cartArr],
        };
      }

      localStorage.setItem("cart", JSON.stringify(newState.cart));
      return newState;
    case types.DELETE_LIST:
      const cloneList = [...state.cart];
      console.log(cloneList, "dasdasdas");
      cloneList.filter((x, i) => x.list.id !== action.payload.id);
      return {
        ...state,
        cart: [...state.cart, cloneList],
      };
    case types.loadBook:
      return {
        ...state,
        dataBook: action.payload,
      };
    case types.UPDATE_CART_ADD:
      const bookS = action.payload.book
      const indexS = state.cart.findIndex(b => b.book.id === bookS.id)

      let _cartS = state.cart
      _cart[indexS].count -= 1
      localStorage.setItem("cart", JSON.stringify(_cartS));
      return {
        ...state,
        cart: _cartS
      }; 
      case types.UPDATE_CART:
      const book = action.payload.book
      const index = state.cart.findIndex(b => b.book.id === book.id)

      let _cart = state.cart
      _cart[index].count += 1
      localStorage.setItem("cart", JSON.stringify(_cart));
      return {
        ...state,
        cart: _cart
      };
    default:
      return state;
  }
};

export default reduce;
