import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router";
import '../SingUp/SingUp.css'
import { db } from '../../firebase-config';
import {collection, getDocs, addDoc} from "firebase/firestore"
import { async } from '@firebase/util';

const SingUp = (props) =>{
    const navigate = useNavigate();

    const [newEmail, setNewEmail] = useState("");
    const [newName, setNewName] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const userCollectionRef = collection(db, "users");

    const createUser = async () =>{
        await addDoc(userCollectionRef, 
            {email: newEmail, password: newPassword, name: newName });
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
                onChange={(event) => setNewEmail(event.target.value)}
                />
                <h4>Nome: </h4>
                <input type="text" placeholder='Nome...' 
                onChange={(event) => setNewName(event.target.value)}
                />
                <h4>Senha: </h4>
                <input type="password" placeholder='Senha...'
                onChange={(event) => setNewPassword(event.target.value)}
                />
                <br />
                <button onClick={()=>createUser}>Sign up</button>
                <br />
            </div>

            <div className="create-container">
                <span>Já tem uma conta? <a href="#/" onClick={() => navigate("/login")}>Log In</a></span>

            </div>       
        </>

    )
}


export default SingUp;