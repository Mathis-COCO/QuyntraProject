/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import {React, useState} from 'react';
import '../css/LoginRegister.scss';
import Navbar from '../components/Navbar';
import LoginCard from '../components/cards/login-register/LoginCard';
import RegisterCard from '../components/cards/login-register/RegisterCard';

function LoginRegister() {

    const [loginOpacity, setLoginOpacity] = useState('1');
    const [logoMargin, setLogoMargin] = useState('0px');
    const [duneMargin, setDuneMargin] = useState('0px');
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
            opacity: loginOpacity,
            transition: 'opacity 1s ease 0s',
        }
    }

    function login() {
        setLogoMargin('100vh');
        setDuneMargin('50vh');
        setLoginOpacity(0);
    }

    return (
        <div className='log-reg-container'>
            <Navbar />
            <div className='log-reg-main'>
                <div>
                    <div className='login-container'>
                        <LoginCard />
                    </div>
                    <div className='register-container'>
                        <RegisterCard />
                    </div>
                </div>
                <div>
                    <img src={require('../img/styling/dune3.jpg')} className='log-reg-bg' style={styles.dunebg} />
                    <img src={require('../img/styling/overlay-1.png')} className='dune' style={styles.dunebg} />
                    <img src={require('../img/styling/overlay-2.png')} className='sun' style={styles.sun} />
                </div>
                <div className='index-100'>
                    <div className='btn-container'>
                        <button className='login-btn log-reg-btn' onClick={login} style={styles.log_reg_btn}>connexion</button>
                        <button className='register-btn log-reg-btn' style={styles.log_reg_btn}>inscription</button>                        
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
