import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import { fetchHero } from "../utils/fetchFunction"

const CharacterDetails = () => {
    let {id} = useParams();

    const [hero, setHero] = useState();

    useEffect(() => {
        fetchHero(id)
        .then(data => setHero(data[0]))
        .catch(err => console.error(err))
    }, []);
    
    if (!hero) return

    return (
        <div>
            <div className="character-details d-flex justify-content-center">
                <div className="character-details-img">
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="" />
                </div>
                <div className="text-details">
                    <h4>Name</h4>
                    <p>{hero.name}</p>
                    {hero.description ? (<>
                    <h4>Description</h4>
                    <p>{hero.description}</p>
                    </>) : null}
                    <div>
                        <h4>Series</h4>
                        <ul>
                            {hero.series.items.map(serie => <li key={Math.random() * 1000}>{serie.name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CharacterDetails;