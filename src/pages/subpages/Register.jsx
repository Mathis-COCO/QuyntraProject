/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import {React, useEffect, useState} from 'react';
import '../../css/LoginRegister.scss';
import Navbar from '../../components/Navbar';
import RegisterCard from '../../components/cards/login-register/RegisterCard';

function Register() {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [logoMargin, setLogoMargin] = useState('0px');
    const [duneMargin, setDuneMargin] = useState('0px');
    const [registerOpacity, setRegisterOpacity] = useState([0, 0]);
    const styles = {
        sun: {
            marginTop: logoMargin,
            transition: 'all 2.5s cubic-bezier(0.61, 0.13, 0.98, 0.98) 1.2s',
        },
        dunebg: {
            marginTop: duneMargin,
            transition: 'all 2.5s cubic-bezier(0.61, 0.13, 0.98, 0.98) 1.7s',
        },
        register: {
            zIndex: registerOpacity[1],
            opacity: registerOpacity[0],
            transition: 'opacity 1.5s linear 3.2s',
        },
    }

    function register() {
        const img = new Image();
        img.src = '../../img/styling/dune3.jpg';
        img.onload = () => {
            setImageLoaded(true);
        }
        setLogoMargin('100vh');
        setDuneMargin('50vh');
        setRegisterOpacity([1, 100]);
    }

    useEffect (() => {
        register();
    }, []);
    
    return !imageLoaded ? (
        <div className='log-reg-container'>
            <Navbar />
            <div className='log-reg-main'>
                <div className='container'>
                    <RegisterCard styles={styles.register} />
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

export default Register;
