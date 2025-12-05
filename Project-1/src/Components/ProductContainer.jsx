import Product from "./Product";

export default function ProductContainer({ products = [], onAdd, onRemove, cartItems = [] }) {
  return (
    <div className="ProductsContainer">
      {products.map((product) => {
        const inCart = cartItems.find((c) => c.productName === product.productName);
        const quantityCount = inCart ? inCart.quantity : 0;

        return (
          <Product
            key={product.id ?? product.productName}
            {...product}
            quantityCount={quantityCount}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
}
