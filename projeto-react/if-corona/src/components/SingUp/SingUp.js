import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router";
import '../SingUp/SingUp.css'
import { db } from '../../firebase-config';
import {collection, getDocs, addDoc} from "firebase/firestore"
import { async } from '@firebase/util';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

const SingUp = (props) =>{
    const navigate = useNavigate();

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const userCollectionRef = collection(db, "users");

    const register = async () =>{
        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        }catch(error){
            console.log(error.message);
        }
    }

    return(
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
        </>

    )
}


export default SingUp;