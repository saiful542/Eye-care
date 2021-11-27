import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import InitializeFirebase from "../../Firebase/Firebase.init";

InitializeFirebase();


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const { GoogleSignIn } = useAuth() || {};
    const location = useLocation();
    const history = useHistory();
    const redirectLocation = location.state?.from || '/Home'
    const SignIn = () => {
        GoogleSignIn()
            .then(result => {
                result.user.option = 1;
                setUser(result.user)
                history.push(redirectLocation)
            })
    }
    const handlePass = (e) => {
        setPassword(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const onSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
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
            <div className="w-50 bg-primary bg-opacity-25 p-2 my-5  rounded-3 animate__animated animate__fadeInLeft" >
                <h1>Please Login</h1>
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

                    <button type="submit" className="btn btn-primary">Login</button>
                    <br />
                    <NavLink className="mx-3" to="/Registration">Don,t have an account?</NavLink>

                </form>
                <br />
                <p>----------or---------</p>
                <h3>By</h3><button className="btn btn-success" onClick={SignIn}>Google</button>
            </div>
        </div>
    );
};

export default Login;
