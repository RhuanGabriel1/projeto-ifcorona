import React from 'react';
import '../Login/Login.css'

const Login = (props) =>{
    return(
        <>
            <div className="login-container">
                <h1 className='las la-hand-holding-heart'><span>IFCorona==true</span></h1>
                <br />
                <h3 className='las la-lock'><span>Login</span></h3>
                <hr />
                <h4>Usuário: </h4>
                <input type="text" placeholder='E-mail...'/>
                <h4>Senha: </h4>
                <input type="password" placeholder='Senha...'/>
                <br />
                <button>Log in</button>
                <br />
                <span>Criar um conta</span>
            </div>
        </>
    )
}


export default Login;