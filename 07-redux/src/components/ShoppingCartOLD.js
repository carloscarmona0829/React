import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../slices/shoppingSlice";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

export function ShoppingCart () {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const{products, cart} = state.ShoppingCart;

  //Estos métodos representan las actions
  const addToCart = (id) => {
    //console.log(id);
    dispatch(ADD_TO_CART(id));
  };

  const delFromCart = (id, all = false) => {
    //console.log(id, all);
    if (all) {
      dispatch(REMOVE_ALL_FROM_CART(id));
    } else {
      dispatch(REMOVE_ONE_FROM_CART(id));
    }
  };

  const clearCart = () => {
    dispatch(CLEAR_CART);
  };

  return (
    <div>
      <h2>Carito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={()=>dispatch(addToCart(product.id))} />
        ))}
      </article>
      <h3>Carito</h3>
      <article className="box ">
        <button onClick={()=>dispatch(clearCart)}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} 
          delOneFromCart={()=>dispatch(delFromCart(item.id))}
          delAllFromCart={()=>dispatch(delFromCart(item.id, true))}
           />
        ))}
      </article>
    </div>
  );
}

export default ShoppingCart;
