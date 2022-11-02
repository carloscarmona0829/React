const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <div style={{ border: "thin solid gray", padding: "1rem" }}>
      <h4>{quantity}</h4>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={() => delOneFromCart(id)}>Eliminar Uno</button>
      <br />
      <button onClick={() => delAllFromCart(id, true)}>Eliminar Todos</button>
      <br />
      <br />
    </div>
  );
};

export default CartItem;
