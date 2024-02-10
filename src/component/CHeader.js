import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const CHeader = ({ ...others }) => {
const [cookiePresent, setCookiePresent] = useState(false);
const [authenticatedUser, setAuthenticatedUser] = useState(Cookies.get('userId'));

    useEffect(() => {
        const cookieExists = Cookies.get('userId');
        if(cookieExists)
            setCookiePresent(true);
    }, []);

    const handleLogOut = () => {
        console.log("Logging out");
        Cookies.remove('userId');
        Cookies.remove('username');
        Cookies.remove('email');
    }
    return(
        <>
            <header className="hero has-map">
                <div className="hero-wrapper">
                    <div className="main-navigation">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                                <Link className="navbar-brand" href="/">
                                    <img src="logo.png" alt="" width={164} height={66}></img>
                                </Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="single-listing-1.htmlnavbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbar">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        {cookiePresent ? (
                                            <>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to={`/profile/${authenticatedUser}`}>Profile</Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/message">Chatbox</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/" className="btn btn-primary text-caps btn-rounded btn-framed" onClick={handleLogOut}>Log Out</Link>
                                                </li>
                                            </>
                                        ) : (
                                        <li className="nav-item">
                                            <Link to="/login" className="btn btn-primary text-caps btn-rounded btn-framed">Log In</Link>
                                        </li>
                                    )}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default CHeader;
