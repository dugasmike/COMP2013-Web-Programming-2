export default function Resorts(props){
    return <div className="Card-Component">
        <img src={props.image} alt="" width = "100px" />
        <h3>{props.location}</h3>
        <h4>{props.brand}</h4>
        <div className={props.rating > 3.9 ? "Good-Rating" : "Bad-Rating"}>
            {props.rating} ★
        </div>
        <p>{props.price}/Night</p>
    </div>
}