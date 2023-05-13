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
import logo_pink from '../img/quyntra-logo-pink.png'
import { Link, useLocation } from 'react-router-dom';
import imgCard1 from '../img/chateau_rouge/Jordan1_MCR_cart.png'
import imgCard2 from '../img/nike/dunk_jarritos.jpg'

function Navbar() {
    const location = useLocation();
    const styles = {itemscolor:{color: location.pathname === '/register' || location.pathname === '/login' || location.pathname === '/connexion' ? '#c14259' : '#29a5e2'}};
    const product_name = 'Jordan 1 x Maison Château Rouge';
    const product_size = 'US12';
    const product_price = 553;
    const product_name2 = 'Nike SB dunk low Jarritos';
    const product_price2 = 432;
    let [showCart, setShowCart] = useState(false);

    function ShowCart() {
        showCart ? setShowCart(false) : setShowCart(true);
        console.log(showCart);
    }

    return (
        <div className='navbar-c-main'>
            <div className='navbar-container'>
                { location.pathname !== '/register' && location.pathname !== '/login' && location.pathname !== '/connexion' ? (
                    <div>
                        <Link to={'/'}>
                            <img src={logo} alt='website-logo' className='navbar-logo'/>
                        </Link>
                    </div>
                ):
                <Link to={'/'}>
                    <img src={logo_pink} alt='website-logo' className='navbar-logo'/>
                </Link> 
                }

                { location.pathname !== '/register' && location.pathname !== '/login' && location.pathname !== '/connexion' ? (
                    <div>
                        <form className='inline searchbar-container'>
                            <input type='search' placeholder='Rechercher un produit, une marque...' className='searchbar' />
                            <button className='searchbar-btn'><CiSearch size={25} color='white' /></button>
                        </form>                   
                    </div>
                    
                ):null }
                { location.pathname !== '/register' && location.pathname !== '/login' && location.pathname !== '/connexion' ? (
                    <div className='inline-sep icon-container'>
                        <Link to={'/connexion'}><BiUser size={32} stroke-width='0.1' className='navbar-icons icon-user' style={styles.itemscolor} /></Link>
                        <AiOutlineHeart size={32} stroke-width='0.1' className='navbar-icons icon-fav' style={styles.itemscolor} />
                        <AiOutlineShoppingCart onClick={ShowCart} size={32} stroke-width='0.1' className='navbar-icons icon-cart' style={styles.itemscolor} />
                    </div>
                ):null }
            </div>
            { showCart === true ? (
                <div className='cart-popup'>
                    <div className='inline cart-product'>
                        <img src={imgCard1} alt='card product image' className='cart-popup-img' />
                            <div>
                                <p className='cart-product-name'>{product_name}</p>
                                <div className='inline-sep cart-product'>
                                    <p className='x1'>x1</p>
                                    <p className='cart-product-details'>{product_size}</p>
                                    <p className='cart-product-details item-price'>{product_price}€</p>
                                </div>                        
                            </div>
                    </div>
                    <div className='inline cart-product'>
                        <img src={imgCard2} alt='card product image' className='cart-popup-img' />
                        <div>
                            <p className='cart-product-name'>{product_name2}</p>
                            <div className='inline-sep cart-product'>
                                <p className='x1'>x2</p>
                                <p className='cart-product-details'>{product_size}</p>
                                <p className='cart-product-details item-price'>{product_price2}€</p>
                            </div>                        
                        </div>
                    </div>
                    <button className='pay'>Paiement</button>
                </div>
            ): null}
        </div>
  );
}

export default Navbar;