import React from "react";
import Line from "../UI/Line";
import Item from "./Item";
import classes from "./ListItems.module.css";
import { market } from "../../data/products";

const ListItems = () => {
  return (
    <ul className={classes.listContainer}>
      {market.products.map((e) => (
        <React.Fragment key={e.id}>
          <Item className={classes.item} item={e} />
          <Line className={classes.line}/>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default ListItems;
