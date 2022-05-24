import React from 'react';
import './UserWreapper.css'

const UserWreapper = (props) =>{
    return(
        <div className="user-wrapper">
            <img src="icon-redimensionado.jpg" alt="Foto do usuário"/>
            <div>
                <h4>Rhuan</h4>
                <small>User</small>
            </div>
        </div>
    )
}


export default UserWreapper;