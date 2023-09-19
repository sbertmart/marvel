import logo from '../img/Marvel_Logo.svg';
import AreYouLoggedIn from "../Components/AreYouLoggedIn"
import { useSelector } from "react-redux"

const Home = () => {

    const login = useSelector((state) => state.login)

    return (

        <div className="divhome">
            <div className="home col-6 d-flex justify-content-center">
                <div className="d-block welcome">
                <h2 className="textohome">
                    Welcome to the
                </h2>
                <img src={logo}></img>
                <div className="brand">
                    data cards
                </div>
                <AreYouLoggedIn/>
                {login.login &&
                <div className="botoneslogin">
                <button>Start collecting cards</button>
                </div>}
                </div>
            </div>

        </div>
    );

}

export default Home;