import React, {useState} from 'react';
import '../ContactMainContent/ContactMainContent.css'
import { db } from '../../firebase-config';
import {addDoc, collection} from "firebase/firestore"
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const ContactMainContent = (props) =>{

    const [newEmail, setNewEmail] = useState("");
    const [newName, setNewName] = useState("");
    const [newSubject, setNewSubject] = useState("");
    const [newText, setNewText] = useState("");

    const userCollectionRef = collection(db, "contact");

    const createMessage = async () =>{
        
        try{
            await addDoc(userCollectionRef, 
                {email: newEmail, name: newName, subject: newSubject, text: newText });
                toast.success("Mensagem enviada com sucesso");
            }catch(error){
                console.log(error.message);
                toast.error("Mensagem não conseguiu ser enviada");
            }
        }

    return(
        <div class="contact-content">
        <h2>Entre em contato conosco!</h2>
        <p>Por favor, preencha o formulário abaixo para entrar em contato conosco!</p>
        <h2>Nome</h2>
        <input class="inputContact" type="text" placeholder="Digite seu nome..."
        onChange={(event) => setNewName(event.target.value)}
        />
        <h2>E-mail</h2>
        <input class="inputContact" type="text" placeholder="Digite seu e-mail..."
        onChange={(event) => setNewEmail(event.target.value)}
        />
        <h2>Assunto</h2>
        <input class="inputContact" type="text" placeholder="Digite um assunto..."
        onChange={(event) => setNewSubject(event.target.value)}
        />
        <h2>Mensagem</h2>
        <textarea cols="30" rows="10" 
        onChange={(event) => setNewText(event.target.value)}
        ></textarea>
        <button className="btnEnviarMensagem" onClick={createMessage}>Enviar Mensagem</button>
        <ToastContainer/>
    </div>
    )
}


export default ContactMainContent;