import React from "react";
import '../../../css/Card.scss';

const RegisterCard = (props) => {
    const styles = props.styles;
    return (
        <div className='log-reg-card register-card' style={styles}>
            <p className='log-reg-card-txt'>inscription</p>
            <form action='Register'>
                <div>
                    <input type='text' placeholder='pseudo' className='log-reg-fullinput'/>
                </div>
                <div className='inline-sep'>
                    <input type='text' placeholder='prénom' className='log-reg-halfinput' />
                    <input type='text' placeholder='nom' className='log-reg-halfinput' />
                </div>
                <div>
                    <input type='email' name='' placeholder='email' className='log-reg-fullinput' />
                </div>
                <div className='inline-sep'>
                    <input type='password' name='' placeholder='mot de passe' className='log-reg-halfinput' />
                    <input type='password' name='' placeholder='confirmer le mot de passe' className='log-reg-halfinput' />
                </div>
                <div>
                    <p>Vous confirmez avoir lu et accepté nos CGU</p>
                    <input type='checkbox' />
                </div>
                <div>
                    <button type='submit' className='log-reg-btn log-reg-card-btn'>s'inscrire</button>
                </div>
            </ form>
        </div>
    )
}

export default RegisterCard;