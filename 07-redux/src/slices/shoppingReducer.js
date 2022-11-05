import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
    { id: 6, name: "Producto 6", price: 600 },
  ],
  cart: [],
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState: {
    products: initialState.products,
    cart: [],
  },
  reducers: {
    add_to_cart: (state, action) => {
      //console.log(state)
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //console.log(newItem);
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    },
    remove_one_from_cart: (state, action) => {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    },
    remove_all_from_cart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    },
    clear_cart: () => {
      return initialState;
    },
  },
});

export default shoppingSlice.reducer;

export const { add_to_cart, remove_one_from_cart, remove_all_from_cart, clear_cart } =
  shoppingSlice.actions;

// export function shoppingReducer(state, action) {
//   switch (action.type) {
//     case TYPES.ADD_TO_CART: {
//       let newItem = state.products.find(
//         (product) => product.id === action.payload
//       );
//       //console.log(newItem);

//       let itemInCart = state.cart.find((item) => item.id === newItem.id);

//       return itemInCart
//         ? {
//             ...state,
//             cart: state.cart.map((item) =>
//               item.id === newItem.id
//                 ? { ...item, quantity: item.quantity + 1 }
//                 : item
//             ),
//           }
//         : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
//     }
//     case TYPES.REMOVE_ONE_FROM_CART: {
//       let itemToDelete = state.cart.find((item) => item.id === action.payload);

//       return itemToDelete.quantity > 1
//         ? {
//             ...state,
//             cart: state.cart.map((item) =>
//               item.id === action.payload
//                 ? { ...item, quantity: item.quantity - 1 }
//                 : item
//             ),
//           }
//         : {
//             ...state,
//             cart: state.cart.filter((item) => item.id !== action.payload),
//           };
//     }
//     case TYPES.REMOVE_ALL_FROM_CART: {
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item.id !== action.payload),
//       };
//     }
//     case TYPES.CLEAR_CART:
//       return shoppingInitialState;

//     default:
//       return state;
//   }
// }
