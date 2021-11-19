import './App.css';
import Header from './Components/Header/Header';
import ListItems from './Components/Main/ListItems';
import CartContextProvider from './store/CartProvider';

function App() {
  return (
    <CartContextProvider>
      <Header/>
      <ListItems/>
    </CartContextProvider>
  );
}

export default App;
