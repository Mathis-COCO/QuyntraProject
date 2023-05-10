import React from "react";
import '../../css/Card.scss';

const CategoryCard = (props) => {
    const { cat_name, cat_image } = props;

    return (
        <div className='card category-card'>
            <div className='card-img'>
                <img src={cat_image} alt='category image' className='card-cat-img' />
            </div>
            <div>
                <p className='card-cat-name'>{cat_name}</p>
            </div>         
        </div>
    )
}

export default CategoryCard;