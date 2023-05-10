/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import {React} from 'react';
import '../css/Homepage.scss';
import Navbar from '../components/Navbar';
import ProductCard from '../components/cards/ProductCard';
import CategoryCard from '../components/cards/CategoryCard';
import fakedb from '../db/FakeDb.json'
import teeShirtImage from '../img/supreme-tee.jpg';
import dunkImage from '../img/dunk.jpg';
import jeans from '../img/jeans.jpg'
import sports from '../img/sports.jpg'
import SeeAllCard from '../components/cards/SeeAllCard';

function Homepage() {
    const json = fakedb;
    console.log(json.categories[0]);

    return (
        <div>
            <Navbar />
            <div className='main-div'>
                <h1 className='text1'>Top Catégories</h1>
                <h2 className='text2'>Les catégories les plus consultées</h2>
                <div className='card-grid-container'>
                    <div className='inline flex-center'>
                        <div className='card-grid-2x2'>
                            <CategoryCard cat_image={teeShirtImage} cat_name='tee-shirts'/>
                            <CategoryCard cat_image={dunkImage} cat_name='sneakers'/>
                            <SeeAllCard cat_image={jeans} cat_name='Voir toutes les catégories' />
                            <CategoryCard cat_image={jeans} cat_name='pantalons'/>               
                            <CategoryCard cat_image={sports} cat_name='sport'/>               
                        </div>
                        <div className='see-all-grid'>
                            
                        </div>                        
                    </div>

                </div>

                <h1 className='text1'>Marques Tendance</h1>
                <h2 className='text2'>Les marques les plus prisées en ce moment</h2>
            </div>
        </div>

    );
}

export default Homepage;
