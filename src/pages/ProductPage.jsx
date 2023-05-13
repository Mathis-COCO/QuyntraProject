/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import {React} from 'react';
import '../css/ProductPage.scss';
import Navbar from '../components/Navbar';
import fakedb from '../db/FakeDb.json'
import img_slider from '../img/chateau_rouge/jordan1_MCR.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faStar } from '@fortawesome/free-solid-svg-icons';
import DeliveryReturns from '../components/DeliveryReturns';

function ProductPage() {
    const json = fakedb;
    console.log(json.categories[0]);
    const product_name = 'Jordan 1 Mid x Maison Chateau Rouge';
    const product_brand = 'Jordan brand';
    const product_cat = 'Sneakers';
    const sizes = 'US 12';
    const brandDetails = "Derrière la marque de lifestyle parisienne Maison Château Rouge se cache Youssouf Fofana, un jeune designer qui met en valeur le dynamisme et la richesse d'une diaspora africaine contemporaine à Paris. La participation de Youssouf à la série Air Jordan I Mid « Fearless » approfondit sa contribution à la mode afrocentrique du 18e arrondissement, au cœur de la street culture parisienne";

    return (
        <div>
            <Navbar />
            <div className='main-div product-page-1'>
                <h1 className='product-page-title'>{product_name}</h1>
                <h3 className='product-page-cat'>{product_brand} - {product_cat}</h3>
                <div className='inline-sep'>
                    <div className='slider-parent'>
                        <img src={img_slider} alt='product image slider' className='product-img-slider' />
                    </div>
                    <div className='product-purchase-details'>
                        <div className='inline reviews'>
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
                <div className='inline more-details-div'>
                    <FontAwesomeIcon icon={faArrowDown} />
                    <p className='more-details'> plus de détails </p>
                    <FontAwesomeIcon icon={faArrowDown} />                    
                </div>

            </div>
            <div>
                <div className='inline product-details-1'>
                    <div className='product-detailed-infos'>
                        <div className='product-detailed-card'>
                            <h1 className='details-product-brand'>{product_brand}</h1>
                            <p className='details-product-txt'>{brandDetails}</p>
                        </div>
                    </div>
                    <div className='product-detailed-img detailed-img-1'></div>
                </div>
            </div>
            <div>
                <div className='inline product-details-1'>
                    <div className='product-detailed-img detailed-img-2'></div>
                    <div>
                        <DeliveryReturns />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
