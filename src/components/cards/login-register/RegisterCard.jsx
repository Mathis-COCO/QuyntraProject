import React from "react";
import '../../../css/Card.scss';

const RegisterCard = () => {

    return (
        <div className='card'>
            <form action='Login'>
                <div>
                    <input type='text' placeholder='pseudo' />
                </div>
                <div>
                    <input type='text' placeholder='prénom' />
                    <input type='text' placeholder='nom' />
                </div>
                <div>
                    <input type='email' name='' placeholder='email' />
                </div>
                <div>
                    <input type='password' name='' placeholder='mot de passe' />
                    <input type='password' name='' placeholder='confirmer le mot de passe' />
                </div>
                <div>
                    <p>Vous confirmez avoir lu et accepté nos CGU</p>
                    <input type='checkbox' />
                </div>
                <div>
                    <button type='submit'></button>
                </div>
            </ form>
        </div>
    )
}

export default RegisterCard;