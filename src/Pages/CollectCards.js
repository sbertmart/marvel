import Grid from "../Components/Grid"
import Search from "../Components/Search"
import Cards from "../Components/Cards"
import { useState } from "react"

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


    return (

        <div className="mt-4 row d-flex justify-content-center">
        <h1 className="text-center mb-4">Access the database</h1>
        <Search setter={setHeroes}/>
        <div className="justify-content-center col-8">
        <Grid className="grid-container">
           {cards ? cards : ""}
        </Grid>
        {heroes.length<=0 && <h2 className="text-center">No results found</h2>}
        </div>
        </div>
    );

}

export default CollectCards;