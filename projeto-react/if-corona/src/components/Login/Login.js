import React from 'react';
import { useNavigate } from "react-router";
import '../Login/Login.css'

const Login = (props) =>{
    const navigate = useNavigate();

    return(
        <>
            <div className="login-container">
                <h1 className='las la-hand-holding-heart'><span>IFCorona<span className='span-color'>==</span>true</span></h1>
                <br />
                <h3 className='las la-lock'><span>Login</span></h3>
                <hr />
                <h4>E-mail: </h4>
                <input type="text" placeholder='E-mail...'/>
                <h4>Senha: </h4>
                <input type="password" placeholder='Senha...'/>
                <br />
                <button>Log in</button>
                <br />
            </div>

            <div className="create-container">
                <span>Não tem uma conta? <a href="#/" onClick={() => navigate("/conta")}>Sign Up</a></span>

            </div>
        </>
    )
}


export default Login;