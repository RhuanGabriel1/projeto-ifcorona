import React, { useState } from 'react';
import { useNavigate } from "react-router";
import '../SingUp/SingUp.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const SingUp = (props) => {
    const navigate = useNavigate();

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
            toast.success("Conta criada com sucesso");
        } catch (error) {
            console.log(error.message);
            toast.error("A conta já existe");
        }
    }

    return (
        <>
            <div className="login-container">
                <h1 className='las la-hand-holding-heart'><span>IFCorona<span className='span-color'>==</span>true</span></h1>
                <br />
                <h3 className='las la-lock'><span>Sign Up</span></h3>
                <hr />
                <h4>E-mail: </h4>
                <input type="text" placeholder='E-mail...'
                    onChange={(event) => setRegisterEmail(event.target.value)}
                />
                <h4>Senha: </h4>
                <input type="password" placeholder='Senha...'
                    onChange={(event) => setRegisterPassword(event.target.value)}
                />
                <br />
                <button onClick={register}>Sign up</button>
                <br />
            </div>

            <div className="create-container">
                <span>Já tem uma conta? <a href="#/" onClick={() => navigate("/login")}>Log In</a></span>

            </div>
            <ToastContainer />
        </>

    )
}

export default SingUp;