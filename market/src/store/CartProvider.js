import React, { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState = {
  numberItems: 0,
  totalOrder: 0,
  itemsCart: [],
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD_ITEM') {
    let updateItems = [];

   const updateTotalAmount = state.totalOrder + action.item.amount * action.item.prize;

   const existingItemIndex = state.itemsCart.findIndex(item => item.id === action.item.id);
   const existingItem = state.itemsCart[existingItemIndex];

   if(existingItem) {
     const updateItem =  { ...existingItem , amount: existingItem.amount + action.item.amount }
     updateItems = [...state.itemsCart];
     updateItems[existingItemIndex] = updateItem;
   } else {
     updateItems = state.itemsCart.concat(action.item);
   }
   return { itemsCart: updateItems, totalOrder: updateTotalAmount}
  }

  if(action.type === 'REMOVE_ITEM') {
    let updateItems = [];

    const existingItemIndex = state.itemsCart.findIndex(item => item.id === action.id);
    const existingItem = state.itemsCart[existingItemIndex];
    const updateTotalAmount = state.totalOrder - existingItem.prize;

    if(!existingItem) return;

    if(existingItem.amount === 1) {
      updateItems = [...state.itemsCart];
      updateItems.splice(existingItemIndex, 1);
      // optional way : updateItems = state.itemsCart.filter(item => item.id !== action.id);
    } else {
      const updateItem = { ...existingItem, amount: existingItem.amount - 1 }
      updateItems = [...state.itemsCart];
      updateItems[existingItemIndex] = updateItem;
    }

    return { itemsCart: updateItems, totalOrder: updateTotalAmount  }
  }

  return defaultCartState;
};


const CartContextProvider = (props) => {
  // const [numberItems, setNumberItems] = useState(0);
  // const [totalOrder, setTotalOrder] = useState(0);
  // const [itemsCart, setItemsCart] = useState([]);

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItem = (item) => {
    dispatchCartAction({type: 'ADD_ITEM', item : item});
  };

  const removeItem = (id) => {
    dispatchCartAction({type: 'REMOVE_ITEM', id: id});
  }

  // const updateItem = (item) => {
  //   const items = itemsCart.map((itemCart) =>
  //     itemCart.id === item.id ? { ...itemCart, amount: item.amount } : itemCart
  //   );
  //   setItemsCart(items);
  // };

  const cartContext = {
    numberItems: cartState.numberItems,
    totalOrder: cartState.totalOrder,
    items: cartState.itemsCart,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
