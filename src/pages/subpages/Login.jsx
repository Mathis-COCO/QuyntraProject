/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import {React, useEffect, useState} from 'react';
import '../../css/LoginRegister.scss';
import Navbar from '../../components/Navbar';
import LoginCard from '../../components/cards/login-register/LoginCard';

function Login() {
    let imageLoaded = false;
    const [logoMargin, setLogoMargin] = useState('0px');
    const [duneMargin, setDuneMargin] = useState('0px');
    const [loginOpacity, setLoginOpacity] = useState([0, 0]);
    const styles = {
        sun: {
            marginTop: logoMargin,
            transition: 'all 2.5s cubic-bezier(0.61, 0.13, 0.98, 0.98) 0s',
        },
        dunebg: {
            marginTop: duneMargin,
            transition: 'all 2.5s cubic-bezier(0.61, 0.13, 0.98, 0.98) 0.5s',
        },
        login: {
            zIndex: loginOpacity[1],
            opacity: loginOpacity[0],
            transition: 'opacity 1.5s linear 2.5s',
        },
    }

    async function login() {
        const img = new Image();
        img.src = '../../img/styling/dune3.jpg';
        img.onload = () => {
            imageLoaded = true;
        }
        setLogoMargin('100vh');
        setDuneMargin('50vh');
        setLoginOpacity([1, 100]);
    }

    useEffect (() => {
        login();
    });
    
    return !imageLoaded ? (
        <div className='log-reg-container'>
            <Navbar />
            <div className='log-reg-main'>
                <div className='container'>
                    <LoginCard styles={styles.login} />
                </div>
                <div>
                    <img src={require('../../img/styling/dune3.jpg')} className='log-reg-bg' style={styles.dunebg} />
                    <img src={require('../../img/styling/overlay-1.png')} className='dune' style={styles.dunebg} />
                    <img src={require('../../img/styling/overlay-2.png')} className='sun' style={styles.sun} />
                </div>
            </div>
        </div>
    ): <p>page en cours de chargement...</p>
}

export default Login;
