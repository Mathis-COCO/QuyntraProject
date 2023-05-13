import React from "react";
import '../../css/Card.scss';
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
    const { cat_name, cat_image } = props;

    return (
        <Link to={'/category'} className='card category-card'>
            <div className='card-cat-img'>
                <img src={cat_image} alt='category image' className='card-cat-img' />
            </div>
            <div>
                <p className='card-cat-name'>{cat_name}</p>
            </div>         
        </Link>
    )
}

export default CategoryCard;