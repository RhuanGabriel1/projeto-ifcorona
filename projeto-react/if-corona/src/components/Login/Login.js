import React, { useState } from 'react';
import { useNavigate } from "react-router";
import '../Login/Login.css'
import {signInWithEmailAndPassword, onAuthStateChanged, signOut, singu} from "firebase/auth";
import { auth } from '../../firebase-config';

import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) =>{
    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
    })

    const login = async () =>{
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            toast.success("Login efetuado com sucesso");
        }catch(error){
            console.log(error.message);
            toast.error("Login incorreto");
        }
    }

    return(
        <>
            <div className="login-container">
                <h1 className='las la-hand-holding-heart'><span>IFCorona<span className='span-color'>==</span>true</span></h1>
                <br />
                <h3 className='las la-lock'><span>Login</span></h3>
                <hr />
                <h4>E-mail: </h4>
                <input type="text" placeholder='E-mail...'
                onChange={(event) => setLoginEmail(event.target.value)}
                />
                <h4>Senha: </h4>
                <input type="password" placeholder='Senha...'
                onChange={(event) => setLoginPassword(event.target.value)}
                />
                <br />
                <button onClick={login}>Log in</button>
                <br />
            </div>

            <div className="create-container">
                <span>Não tem uma conta? <a href="#/" onClick={() => navigate("/conta")}>Sign Up</a></span>

            </div>
            <ToastContainer/>

        </>
    )
}


export default Login;