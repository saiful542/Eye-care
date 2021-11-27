import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { NavLink } from 'react-router-dom';


const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirectLocation = location.state?.from || '/Login'
    const auth = getAuth();

    const handlePass = (e) => {
        setPassword(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const onSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                history.push(redirectLocation)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)

            });
    }
    return (
        <div className="d-flex  justify-content-center">
            <div className="w-50 bg-secondary bg-opacity-25 p-2 my-5  rounded-3 animate__animated animate__fadeInRight" >
                <h1>Please Register</h1>
                <form onSubmit={onSubmit} className="text-center">
                    <p className="text-danger">{error}</p>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePass} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary mb-2">Register</button>
                    <br />
                    <NavLink className="mx-3" to="/Login">Already registered?</NavLink>
                </form>
            </div>
        </div>
    );
};

export default Registration;