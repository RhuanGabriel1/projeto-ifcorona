import React from 'react';
import '../ContactMainContent/ContactMainContent.css'

const ContactMainContent = (props) =>{
    return(
        <div class="contact-content">
        <h2>Entre em contato conosco!</h2>
        <p>Por favor, preencha o formulário abaixo para entrar em contato conosco!</p>
        <h2>Nome</h2>
        <input class="inputContact" type="text" placeholder="Digite seu nome..."/>
        <h2>E-mail</h2>
        <input class="inputContact" type="text" placeholder="Digite seu e-mail..."/>
        <h2>Assunto</h2>
        <input class="inputContact" type="text" placeholder="Digite um assunto..."/>
        <h2>Mensagem</h2>
        <textarea cols="30" rows="10"></textarea>
        <button id="btnEnviarMensagem" type="submit">Enviar Mensagem</button>
    </div>
    )
}


export default ContactMainContent;