import React, { useContext } from "react";
import Button from "../UI/Button";
import Line from "../UI/Line";
import CartItem from "./CartItem";
import classes from "./FormCart.module.css";
import CartContext from "../../store/cart-context";

const FormCart = () => {
  const cartCtx = useContext(CartContext);

  const totalOrder = `$${cartCtx.totalOrder.toFixed(2)}`;
  const hasItems = cartCtx.items.length;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  return (
    <div>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onAddItem={cartItemAddHandler.bind(null, item)}
            onRemoveItem={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <Line />
      <span className={classes.spanTotal}>Total Amount</span>
      <span>{totalOrder}</span>
      <div className={classes.orderSection}>
        <Button className={classes.closeButton}>Close</Button>
        {hasItems && <Button>Order</Button>}
      </div>
    </div>
  );
};

export default FormCart;
