import React from "react";
import '../../css/Card.scss';

const SeeAllCard = (props) => {
    const { cat_name, cat_image } = props;

    return (
        <div className='card see-all-card'>
            <div className='card-full-img'>
                <img src={cat_image} alt='category image' className='card-see-all-img' />
            </div>
            <div>
                <p className='card-cat-name'>{cat_name}</p>
            </div>         
        </div>
    )
}

export default SeeAllCard;