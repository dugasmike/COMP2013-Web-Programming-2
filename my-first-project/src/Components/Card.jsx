export default function Card(props){
    return <div className={props.sale ? "Card-Component Card-Sale-Glow" : "Card-Component"}>
        <img src={props.image} alt="" width = "100px" />
        <h2>{props.title}</h2>
        {props.sale ? <h3 className="Card-Sale">SALE!</h3> : <h3>&nbsp;</h3>}
        <p>{props.price}</p>
        <button>BUY NOW</button>
    </div>
}
//prop.sale && "Message" => if prop.sale === true then msg will appear
//prop.sale || "Message" => if prop.sale === false the message will appear
