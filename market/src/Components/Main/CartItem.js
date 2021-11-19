import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./CartItem.module.css";

const CartItem = (props) => {

  return (
    <li className={classes.itemContainer}>
      <div>
        <span className={classes.nameItem}>{props.item.name}</span>
        <Input
          className={classes.amount}
          label={props.item.prize}
          value={`x${props.item.amount}`}
          readOnly="readonly"
        />
      </div>
      <div>
        <Button className={classes.addButton} onClick={props.onRemoveItem}>
          -
        </Button>
        <Button className={classes.deleteButton} onClick={props.onAddItem}>
          +
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
