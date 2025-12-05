
export default function Product({
  productName,
  brand,
  quantity, 
  image,
  price,
  onAdd,
  onRemove,
  quantityCount = 0
}) {
  const cleanPrice = Number(String(price ?? 0).replace(/[^0-9.]/g, ""));
  const displayPrice = Number.isFinite(cleanPrice) ? cleanPrice.toFixed(2) : "0.00";

  const productForCart = {
    productName,
    brand,
    quantity,
    image,
    price: cleanPrice
  };

  return (
    <div className="ProductCard">
      <h3>{productName}</h3>
      <img src={image} alt={productName} height="100px" />
      <h4>{brand}</h4>
      <p>Volume: {quantity}</p>
      <p>Price: ${displayPrice}</p>

      <div className="ProductQuantityDiv">
        <button
          className="QuantityBtn"
          onClick={() => onAdd(productForCart)}
        >
          +
        </button>

        <p>{quantityCount}</p>

        <button
          className="QuantityBtn"
          onClick={() => onRemove({ productName })}
          disabled={quantityCount <= 0}
        >
          -
        </button>
      </div>

      <p style={{ color: "green" }}>
        <b>
          Total Price: ${(quantityCount * cleanPrice).toFixed(2)}
        </b>
      </p>
    </div>
  );
}
