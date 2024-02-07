const CLogin = ({ ...others }) => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between center">
            <a className="navbar-brand" href="/">
                <img src="logo.png" alt="" width={164} height={66}></img>
            </a>
        </nav>
        <section className="content">
            <section className="block">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <form className="form clearfix">
                                <div className="form-group">
                                    <label htmlFor="email" className="col-form-label required">Email</label>
                                    <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" required></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="col-form-label required">Password</label>
                                    <input name="password" type="password" className="form-control" id="password" placeholder="Password" required></input>
                                </div>
                                <div className="d-flex justify-content-between align-items-baseline">
                                    <label>
                                        <input type="checkbox" name="remember" value="1"></input>
                                        Remember Me
                                    </label>
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                </div>
                            </form>
                            <hr></hr>
                            <p>
                                Troubles with signing? <a href="/" className="link">Click here.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        </>
    );
};
  
  export default CLogin;
  