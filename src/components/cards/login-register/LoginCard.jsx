import React from "react";
import '../../../css/Card.scss';

const LoginCard = (props) => {
    const styles = props.styles;
    return (
        <div className='log-reg-card login-card' style={styles}>
            <p className='log-reg-card-txt'>connexion</p>
            <form action='login' method='post'>
                <div>
                    <input type='email' name='' placeholder='email' className='log-reg-fullinput' />
                </div>
                <div>
                    <input type='password' name='' placeholder='mot de passe' className='log-reg-fullinput' />
                </div>
                <div>
                    <button className='log-reg-btn log-reg-card-btn' type='submit'>connexion</button>
                </div>                
            </form>

        </div>
    )
}

export default LoginCard;