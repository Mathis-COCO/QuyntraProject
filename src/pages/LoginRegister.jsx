/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import {React, useState} from 'react';
import '../css/LoginRegister.scss';
import Navbar from '../components/Navbar';
import LoginCard from '../components/cards/login-register/LoginCard';
import RegisterCard from '../components/cards/login-register/RegisterCard';

function LoginRegister() {

    const [logRegBtnOpacity, setLogRegBtnOpacity] = useState(1);
    const [logoMargin, setLogoMargin] = useState('0px');
    const [duneMargin, setDuneMargin] = useState('0px');
    const [loginOpacity, setLoginOpacity] = useState([0, 0]);
    const [registerOpacity, setRegisterOpacity] = useState([0, 0]);
    const styles = {
        sun: {
            marginTop: logoMargin,
            transition: 'all 2.5s cubic-bezier(0.61, 0.13, 0.98, 0.98) 0s',
        },
        dunebg: {
            marginTop: duneMargin,
            transition: 'all 2.5s cubic-bezier(0.61, 0.13, 0.98, 0.98) 0.5s',
        },
        log_reg_btn: {
            opacity: logRegBtnOpacity,
            transition: 'opacity 1s ease 0s',
        },
        login: {
            zIndex: loginOpacity[1],
            opacity: loginOpacity[0],
            transition: 'opacity 1.5s linear 2.5s',
        },
        register: {
            zIndex: registerOpacity[1],
            opacity: registerOpacity[0],
            transition: 'opacity 1.5s linear 2.5s',
        },
    }

    function login() {
        setLogoMargin('100vh');
        setDuneMargin('50vh');
        setLogRegBtnOpacity(0);
        setLoginOpacity([1, 100]);
        setRegisterOpacity([0, 0]);
    }

    function register() {
        setLogoMargin('100vh');
        setDuneMargin('50vh');
        setLogRegBtnOpacity(0);
        setRegisterOpacity([1, 100]);
        setLoginOpacity([0, 0]);
    }

    return (
        <div className='log-reg-container'>
            <Navbar />
            <div className='log-reg-main'>
                <div className='container'>
                    <LoginCard styles={styles.login} />
                    <RegisterCard styles={styles.register} />
                </div>
                <div>
                    <img src={require('../img/styling/dune3.jpg')} className='log-reg-bg' style={styles.dunebg} />
                    <img src={require('../img/styling/overlay-1.png')} className='dune' style={styles.dunebg} />
                    <img src={require('../img/styling/overlay-2.png')} className='sun' style={styles.sun} />
                </div>
                <div className='index-10'>
                    <div className='btn-container'>
                        <button className='login-btn log-reg-btn' onClick={login} style={styles.log_reg_btn}>connexion</button>
                        <button className='register-btn log-reg-btn' onClick={register} style={styles.log_reg_btn}>inscription</button>                        
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
