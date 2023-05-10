import React from "react";
import '../../../css/Card.scss';

const LoginCard = () => {

    return (
        <div className='card'>
            <div>
                <input type='email' name='' placeholder='email' />
            </div>
            <div>
                <input type='password' name='' placeholder='mot de passe' />
            </div>
            <div>
                <button type='submit'></button>
            </div>
        </div>
    )
}

export default LoginCard;