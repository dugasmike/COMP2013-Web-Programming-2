import "./App.css";
import { useState } from "react";
// Components
import ProductContainer from "./Components/ProductContainer";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
// Data
import products from "./data/products";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
      const existing = prevCart.find(
        (item) => item.productName === product.productName
      );
      if (existing) {
        return prevCart.map((item) =>
          item.productName === product.productName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.productName === product.productName
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <Header cartItems={cartItems} />
      <div className="GroceriesApp-Container">
        <ProductContainer
          products={products}
          cartItems={cartItems}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
        />

        <Cart
          cartItems={cartItems}
          onRemoveItem={(itemToRemove) =>
            setCartItems((prev) =>
              prev.filter(
                (item) => item.productName !== itemToRemove.productName
              )
            )
          }
          onQuantityChange={(itemToChange, newQuantity) =>
            setCartItems((prev) =>
              prev
                .map((item) =>
                  item.productName === itemToChange.productName
                    ? { ...item, quantity: newQuantity }
                    : item
                )
                .filter((item) => item.quantity > 0)
            )
          }
          onEmptyCart={() => setCartItems([])}
        />
      </div>
    </>
  );
}

export default App;
