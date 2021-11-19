import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./Item.module.css";
import CartContext from '../../store/cart-context';

const Item = (props) => {
  const [amount, setAmount] = useState(0);

  const cartCtx = useContext(CartContext);

  const changeAmount = ({ target }) => {
    setAmount(target.value);
  };

  const addItemsToCart = () => {
    cartCtx.addItem({
      'id': props.item.id,
      'name' : props.item.name,
      'prize': props.item.prize,
      'amount': +amount,
    });
  }

  return (
    <li className={`${classes.container} ${props.className}`}>
      <div className={classes.content}>
        <span className={classes.nameProduct}>{props.item.name}</span>
        <p>{props.item.description}</p>
        <span className={classes.prize}>{`${props.item.prize}`}</span>
      </div>
      <div>
        <Input
          type="number"
          label="Amount"
          className={classes.input}
          value={amount}
          onChange={changeAmount}
        />
        <Button className={classes.addButton} onClick={addItemsToCart}>Add</Button>
      </div>
    </li>
  );
};

export default Item;
