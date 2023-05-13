/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import {React} from 'react';
import '../css/Homepage.scss';
import Navbar from '../components/Navbar';
import CategoryCard from '../components/cards/CategoryCard';
import fakedb from '../db/FakeDb.json'
import teeShirtImage from '../img/clothes/supreme-tee.jpg';
import dunk from '../img/nike/dunk.jpg';
import jeans from '../img/clothes/pants1.jpg'
import pants from '../img/clothes/pants2.png'
import sports from '../img/clothes/sports.jpg'
import SeeAllCard from '../components/cards/SeeAllCard';
import Jordan from '../img/Jordan/Jordan.jpg'
import Stussy from '../img/stussy/stussy4.jpg'
import Nike from '../img/nike/air-max.jpg'

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
                            <CategoryCard cat_image={dunk} cat_name='sneakers'/>
                            <SeeAllCard cat_image={jeans} cat_name='voir toutes les catégories' />
                            <CategoryCard cat_image={pants} cat_name='pantalons'/>               
                            <CategoryCard cat_image={sports} cat_name='sport'/>               
                        </div>
                    </div>
                </div>
                <h1 className='text1'>Marques Tendance</h1>
                <h2 className='text2'>Les marques les plus prisées en ce moment</h2>
                <div className='card-grid-container'>
                    <div className='inline flex-center'>
                        <div className='card-grid-2x2'>
                            <CategoryCard cat_image={Jordan} cat_name='Jordan'/>
                            <CategoryCard cat_image={Stussy} cat_name='Stüssy'/>
                            <CategoryCard cat_image={Nike} cat_name='Nike'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
