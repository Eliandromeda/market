import React from "react";

const CartContext = React.createContext({
  numberItems: 0,
  totalOrder: 0,
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
