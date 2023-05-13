/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import {React} from 'react';
import '../css/Homepage.scss';
import Navbar from '../components/Navbar';
import ProductCard from '../components/cards/ProductCard';
import dunk from '../img/nike/dunk.jpg';
import Nike from '../img/nike/air-max.jpg'
import dunkJarritos from '../img/nike/dunk_jarritos.jpg'

function Category() {
    return (
        <div>
            <Navbar />
            <div className='main-div'>
                <h1 className='text1'>Sneakers</h1>
                <h2 className='text2'>Top catégorie</h2>
                <div className='card-grid-container'>
                    <div className='inline flex-center'>
                        <div className='card-grid-2x2'>
                        <ProductCard item_name='Nike SB Dunk Low Jarritos' item_price='de 275€ à 432€' item_image={dunkJarritos} item_sizes='US6 - US13' />          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
