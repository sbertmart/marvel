const AreYouLoggedIn = () => {
    return (
        <div className="botoneslogin d-flex mt-4">
            <div>
            <button>Already a member? Log In</button>
            <p className="success"> You are already logged in</p>
            </div>
            <div>
            <button>Not a memeber yet? Sign In</button>
            <p className="success"> You are already logged in</p>
            </div>
    </div>
    )
}

export default AreYouLoggedIn;