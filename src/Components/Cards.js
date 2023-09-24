import { Link } from "react-router-dom"

const Cards = (props) => {
    

    return (
       <Link to={`/${props.id}`}>
       <div className="card">
            <img src={props.thumbnail} alt="thumbnail" />
            <h3 className="card-title">{props.name}</h3>

       </div>
       </Link>

    );
}

export default Cards;