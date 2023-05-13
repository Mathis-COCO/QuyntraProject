/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import {React} from 'react';
import '../css/ProductPage.scss';
import Navbar from '../components/Navbar';
import fakedb from '../db/FakeDb.json'
import img_slider from '../img/Jordan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ProductPage() {
    const json = fakedb;
    console.log(json.categories[0]);
    const product_name = 'Jordan 1 Mid x Maison Chateau Rouge';
    const product_brand = 'Jordan brand';
    const product_cat = 'Sneakers';
    const sizes = 'US 12'

    return (
        <div>
            <Navbar />
            <div className='main-div'>
                <h1 className='product-page-title'>{product_name}</h1>
                <h3 className='product-page-cat'>{product_brand} - {product_cat}</h3>
                <div className='inline-sep'>
                    <div>
                        <img src={img_slider} alt='product image slider' className='product-img-slider' />
                    </div>
                    <div className='product-purchase-details'>
                        <div className='inline'>
                            <div className='stars-container'>
                                <FontAwesomeIcon icon={faStar} color='orange' />
                                <FontAwesomeIcon icon={faStar} color='orange' />
                                <FontAwesomeIcon icon={faStar} color='orange' />
                                <FontAwesomeIcon icon={faStar} color='orange' />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className='stars-txt'> sur 256 avis</p>
                        </div>
                        <div className='inline sizes-box'>
                            <p>Taille : </p>
                            <p>{sizes}</p>
                        </div>
                        <div className='inline-sep prices-box'>
                            <div>
                                <p className='prices-desc'>Dernière vente</p>
                                <p className='item-price'>561€</p>
                            </div>
                            <div>
                                <p className='prices-desc'>Côte actuelle</p>
                                <div className='inline'>
                                    <p className='item-price'>553€</p>
                                    <p className='item-price-diff'>(-8€)</p>
                                </div>
                            </div>
                        </div>
                        <button className='add-to-cart'>ajouter au panier</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="inline"></div>
            </div>
        </div>
    );
}

export default ProductPage;
