
const CHeader = ({ ...others }) => {
    return(
        <>
            <header className="hero has-map">
                <div className="hero-wrapper">
                    <div className="main-navigation">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                                <a className="navbar-brand" href="/">
                                    <img src="logo.png" alt="" width={164} height={66}></img>
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="single-listing-1.htmlnavbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbar">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/profile">Profile</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/message">Chatbox</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="submit.html" className="btn btn-primary text-caps btn-rounded btn-framed">Log In</a>
                                        </li>
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
