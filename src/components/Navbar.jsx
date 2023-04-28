/* eslint-disable capitalized-comments */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
/* eslint-disable indent */
import {React} from 'react';
// import {useLocation, useNavigate} from 'react-router-dom';
import '../css/Navbar.scss';
import {BiUser} from 'react-icons/bi';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai';
import {RxHamburgerMenu} from 'react-icons/rx';
import {CiSearch} from 'react-icons/ci';
import logo from '../img/quyntra-logo-blue.png'

function Navbar() {

    return (
        <div className='navbar-c-main'>
            <div className='navbar-container'>
                <div>
                    <img src={logo} alt='website-logo' className='navbar-logo'/>
                </div>
                <div>
                    <form className='inline'>
                        <input type='search' placeholder='Rechercher un produit, une marque...' className='searchbar' />
                        <button className='searchbar-btn'><CiSearch size={25} color='white' /></button>
                    </form>
                </div>
                <div className='inline-sep icon-container'>
                    <BiUser size={32} stroke-width='0.1' className='navbar-icons icon-user' />
                    <AiOutlineHeart size={32} stroke-width='0.1' className='navbar-icons icon-fav' />
                    <AiOutlineShoppingCart size={32} stroke-width='0.1' className='navbar-icons icon-cart' />
                </div>
            </div>
        </div>
  );
}

export default Navbar;