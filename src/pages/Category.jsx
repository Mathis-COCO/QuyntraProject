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
import MCR from '../img/chateau_rouge/Jordan1_MCR5.png'
import AJ3Cement from '../img/Jordan/jordan3.png'
import dunkMummy from '../img/nike/dunkMummy.png'
import AM1Patta from '../img/nike/AM1Patta.png'
import dunkPanda from '../img/nike/dunkPanda.png'

function Category() {
    return (
        <div>
            <Navbar />
            <div className='main-div'>
                <h1 className='text1'>Sneakers</h1>
                <h2 className='text2'>Top catégorie</h2>
                <div className='card-grid-container'>
                    <div className='inline flex-center'>
                        <div className='card-grid'>
                        <ProductCard item_name='Nike SB Dunk Low Jarritos' item_price='de 275€ à 432€' item_image={dunkJarritos} item_sizes='US6 - US13' />          
                        <ProductCard item_name='Jordan 1 x Maison Château Rouge' item_price='de 420€ à 783€' item_image={MCR} item_sizes='US6 - US13' />          
                        <ProductCard item_name='Nike SB Dunk Low Mummy' item_price='de 275€ à 432€' item_image={dunkMummy} item_sizes='US6 - US13' />          
                        <ProductCard item_name='Nike Air Max 1 Patta Waves White' item_price='de 239€ à 421' item_image={AM1Patta} item_sizes='US8 - US13' />          
                        <ProductCard item_name='Jordan 3 White Cement' item_price='de 215€ à 296€' item_image={AJ3Cement} item_sizes='US5 - US16' />          
                        <ProductCard item_name='Nike dunk low Panda' item_price='de 275€ à 432€' item_image={dunkPanda} item_sizes='US6 - US13' />          
                        <ProductCard item_name='Nike Air Max 95 Sean Wotherspoon' item_price='de 780€ à 1432€' item_image={Nike} item_sizes='US6 - US11' />          
                        <ProductCard item_name='Nike SB dunk low Supreme Black Cement ' item_price='de 1320 à 2150€' item_image={dunk} item_sizes='US6 - US11.5' />          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
