import { useRef } from "react"
import { fetchHeroes } from "../utils/fetchFunction";

const Search = (props) => {

    let input = useRef("");

    const handleClick = async (e) => {
        e.preventDefault();
        let value = input.current.value;
        if (value === "") return
        try {
            let heroes = await fetchHeroes(value)
            props.setter(heroes)
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <form className="col-5 d-block justify-content-center form2">
            <input type="text" placeholder="Search by character name" ref={input} />
            <button className="submit2" onClick={handleClick}>Search</button>

        </form>

    );
}

export default Search;