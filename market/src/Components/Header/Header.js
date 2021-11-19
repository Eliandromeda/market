import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";
import CartContext  from "../../store/cart-context";
import Modal from "../Modal/Modal";
import FormCart from "../Main/FormCart";

const Header = () => {
  const [ cartIsShow, setCartIsShow ] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.reduce((curNumber, nextValue) => {
      return curNumber + nextValue.amount
  },0);

  const onShowCart = () => {
    setCartIsShow(true);
  };

  const hideCart = () => {
    setCartIsShow(false);
  }

  return (
    <div className={classes.headerContainer}>
      <label className={classes.logoName}>ReactMeals</label>
      <Button className={classes.buttonCart} onClick={onShowCart}>
        Your Cart
        <span className={classes.cart}>{totalItems}</span>
      </Button>
      { cartIsShow &&
        <Modal id="modalBackDrop" onClose={hideCart}>
          <FormCart/>
        </Modal>
      }
    </div>
  );
};

export default Header;
