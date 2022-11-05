import { useDispatch, useSelector } from "react-redux";
import { add_to_cart, remove_one_from_cart, remove_all_from_cart, clear_cart } from "../slices/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

export const ShoppingCart = () => {
  const { products, cart } = useSelector((state) => state.shoppingReducer);
  //console.log(products);

  const dispatch = useDispatch();

  const addToCart = (id) => {
    //console.log(id);
    dispatch(add_to_cart(id));
  };
  const delFromCart = (id, all = false) => {
    //console.log(id, all);
    if (all) {
      dispatch(remove_all_from_cart(id));
    } else {
      dispatch(remove_one_from_cart(id));
    }
  };
  const clearCart = () => {
    dispatch(clear_cart());
  };  

  return (
    <div>
      <h2>Carito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carito</h3>
      <article className="box ">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

// const ShoppingCart = () => {
//   const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

//   const { products, cart } = state;

//   const addToCart = (id) => {
//     //console.log(id);
//     dispatch({ type: TYPES.ADD_TO_CART, payload: id });
//   };

//   const delFromCart = (id, all = false) => {
//     //console.log(id, all);
//     if (all) {
//       dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
//     } else {
//       dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
//     }
//   };

//   const clearCart = () => {
//     dispatch({ type: TYPES.CLEAR_CART });
//   };

//   return (
//     <div>
//       <h2>Carito de Compras</h2>
//       <h3>Productos</h3>
//       <article className="box grid-responsive">
//         {products.map((product) => (
//           <ProductItem key={product.id} data={product} addToCart={addToCart} />
//         ))}
//       </article>
//       <h3>Carito</h3>
//       <article className="box ">
//         <button onClick={clearCart}>Limpiar Carrito</button>
//         {cart.map((item, index) => (
//           <CartItem key={index} data={item} delFromCart={delFromCart} />
//         ))}
//       </article>
//     </div>
//   );
// };

// export default ShoppingCart;
