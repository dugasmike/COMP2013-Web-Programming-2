export default function Cart({ cartItems = [], onRemoveItem, onQuantityChange, onEmptyCart }) {
  const total = cartItems.reduce((sum, item) => {
    const p = Number(item.price ?? 0);
    const q = Number(item.quantity ?? 0);
    return sum + (Number.isFinite(p) ? p : 0) * (Number.isFinite(q) ? q : 0);
  }, 0);

  return (
    <div className="CartContainer">
      <div className="CartCard">
        <h3>Cart Items: {cartItems.length}</h3>

        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, index) => {
              const itemPrice = Number(item.price ?? 0);
              const itemQty = Number(item.quantity ?? 0);
              return (
                <div key={index} className="CartItemCard">
                  <img src={item.image} alt={item.productName} />
                  <p>{item.productName}</p>
                  <p>${Number.isFinite(itemPrice) ? itemPrice.toFixed(2) : "0.00"}</p>

                  <div className="QuantityControls">
                    <button
                      className="QuantityBtn"
                      onClick={() => onQuantityChange(item, Math.max(itemQty - 1, 0))}
                    >
                      -
                    </button>
                    <span>{itemQty}</span>
                    <button
                      className="QuantityBtn"
                      onClick={() => onQuantityChange(item, itemQty + 1)}
                    >
                      +
                    </button>
                  </div>

                  <p className="ItemTotal">
                    Total: ${(itemPrice * itemQty).toFixed(2)}
                  </p>

                  <button
                    className="RemoveButton"
                    onClick={() => onRemoveItem(item)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}

            <div className="CartBottomBtns">
              <button className="EmptyCartButton" onClick={onEmptyCart}>
                Empty Cart
              </button>
              <button className="CheckoutButton">
                Checkout: ${total.toFixed(2)}
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
