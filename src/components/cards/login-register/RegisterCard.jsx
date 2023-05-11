import React, { useState } from "react";
import '../../../css/Card.scss';
import { Link } from "react-router-dom";

const RegisterCard = (props) => {
    const styles = props.styles;
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
      setIsChecked(!isChecked);
    }
  
    const className = isChecked ? 'cgu-green' : 'cgu-red';
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
                <div className='inline'>
                    <input type='checkbox' onChange={handleChange} className='log-reg-checkbox' />
                    <p className={className}>Vous confirmez avoir lu et accepté nos CGU</p>
                </div>
                <div>
                    <button type='submit' className='log-reg-btn log-reg-card-btn'>s'inscrire</button>
                    <Link to={'/login'} className='switch-card-btn'>déjà un compte ? se connecter</Link>
                </div>
            </ form>
        </div>
    )
}

export default RegisterCard;