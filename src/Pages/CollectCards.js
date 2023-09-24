import Grid from "../Components/Grid"
import Search from "../Components/Search"
import Cards from "../Components/Cards"
import { useState } from "react"
import { useSelector } from "react-redux"
import {Link} from "react-router-dom"

const CollectCards = () => {

    const [heroes, setHeroes] = useState([]);

    let cards;

    if (heroes) {
        cards = heroes.map((hero) => (
            <Cards 
            name={hero.name} 
            id={hero.id} 
            key={hero.id} 
            thumbnail={`${hero.thumbnail.path}/portrait_fantastic.${hero.thumbnail.extension}`}>

            </Cards>
        ))

    }
    
    const login = useSelector((state) => state.login)
    
    return (

        <div className="row mt-4 d-flex justify-content-center">
        <h1 className="text-center mb-4">Access the database</h1>
        {login.login ? <div>
        <Search setter={setHeroes}/>
        <div className="grid-container">
        <Grid>
           {cards ? cards : ""}
        </Grid>
        {heroes.length<=0 && <h2 className="text-center">No results found</h2>}
        </div>
        </div> : <div className="mx-4">
            <h2 className="signfirst">Please <Link to="/">Log In</Link> or <Link to="/">Sign Up</Link> to access our database</h2>
            </div>}
        </div>
    );

}

export default CollectCards;