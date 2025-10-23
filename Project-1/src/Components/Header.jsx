export default function Header({ cartItems }) {
    const cartImage = cartItems.length > 0
    ? "src/assets/cart-full.png"  
    : "src/assets/cart-empty.png"; 
    return (
        <div className="NavBar">
            <div className="NavUser">Welcome, username</div>
            <div className="NavTitle"><h1>Groceries App</h1></div>
            <div className="navDiv">
                <div className="navCart">
                <img src={cartImage} alt="Cart" height="20px" />
                </div>
            </div>
        </div> 
    )
}