export default function CartItem({ item }) {
  return (
    <div className="cartItem">
      <img src={item.image} alt={item.productName} width="60" />
      <p>{item.productName}</p>
      <p>Qty: {item.quantity}</p>
      <p>${(item.quantity * Number(item.price)).toFixed(2)}</p>
    </div>
  );
}