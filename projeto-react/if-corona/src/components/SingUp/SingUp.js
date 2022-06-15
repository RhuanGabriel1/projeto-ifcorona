import React from 'react';
import { useNavigate } from "react-router";
import '../SingUp/SingUp.css'

const SingUp = (props) =>{
    const navigate = useNavigate();
    return(
        <>
            <div className="login-container">
                <h1 className='las la-hand-holding-heart'><span>IFCorona<span className='span-color'>==</span>true</span></h1>
                <br />
                <h3 className='las la-lock'><span>Sign Up</span></h3>
                <hr />
                <h4>E-mail: </h4>
                <input type="text" placeholder='E-mail...'/>
                <h4>Nome: </h4>
                <input type="text" placeholder='Nome...'/>
                <h4>Senha: </h4>
                <input type="password" placeholder='Senha...'/>
                <br />
                <button>Sign up</button>
                <br />
            </div>

            <div className="create-container">
                <span>Já tem uma conta? <a href="#/" onClick={() => navigate("/login")}>Log In</a></span>

            </div>       
        </>

    )
}


export default SingUp;