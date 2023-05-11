/* eslint-disable capitalized-comments */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
/* eslint-disable indent */
import {React, useEffect, useState} from 'react';
// import {useLocation, useNavigate} from 'react-router-dom';
import '../css/Navbar.scss';
import {BiUser} from 'react-icons/bi';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai';
import {CiSearch} from 'react-icons/ci';
import logo from '../img/quyntra-logo-blue.png'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const styles = {itemscolor:{color: location.pathname === '/register' || location.pathname === '/login' || location.pathname === '/connexion' ? '#c14259' : '#29a5e2'}};

    return (
        <div className='navbar-c-main'>
            <div className='navbar-container'>
                <Link to={'/'}>
                    <img src={logo} alt='website-logo' className='navbar-logo'/>
                </Link>
                { location.pathname !== '/register' || '/login' ? (
                    <div>
                        <form className='inline searchbar-container'>
                            <input type='search' placeholder='Rechercher un produit, une marque...' className='searchbar' />
                            <button className='searchbar-btn'><CiSearch size={25} color='white' /></button>
                        </form>
                    </div>
                ): null }
                <div className='inline-sep icon-container'>
                    <Link to={'/connexion'}><BiUser size={32} stroke-width='0.1' className='navbar-icons icon-user' style={styles.itemscolor} /></Link>
                    <AiOutlineHeart size={32} stroke-width='0.1' className='navbar-icons icon-fav' />
                    <AiOutlineShoppingCart size={32} stroke-width='0.1' className='navbar-icons icon-cart' />
                </div>
            </div>
        </div>
  );
}

export default Navbar;