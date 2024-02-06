import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';


const CLogin = ({ ...others }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        console.log('Email: ', email);
        console.log('Password: ', password);
       
        try {
            const response = await axios.post('http://localhost:8080/api/login', {
              email: email,
              pwd: password
            });
      
            if (response.status === 200) {
              // Store user information in cookies
              Cookies.set('userId', response.data.idOwner);
              Cookies.set('username', response.data.name);
              Cookies.set('email', response.data.email);
              console.log('Login successful', response.data);
      
              navigate('/');
            }
            // Redirect or perform other actions after successful login
          } catch (error) {
            // Handle login error
            console.error('Login failed');
          }
    };

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
                                    <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" required onChange={handleEmailChange}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="col-form-label required">Password</label>
                                    <input name="password" type="password" className="form-control" id="password" placeholder="Password" required onChange={handlePasswordChange}></input>
                                </div>
                                <div className="d-flex justify-content-between align-items-baseline">
                                    <label>
                                        <input type="checkbox" name="remember" value="1"></input>
                                        Remember Me
                                    </label>
                                    <button type="button" className="btn btn-primary" onClick={handleLogin}>Sign In</button>
                                </div>
                            </form>
                            <hr></hr>
                            <p>
                                Troubles with signing? <a href="#" className="link">Click here.</a>
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
  