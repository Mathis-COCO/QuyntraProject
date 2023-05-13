import React from "react";
import '../../css/Card.scss';
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const { item_name, item_price, item_image, item_sizes } = props;
    console.log(item_sizes);

    return (
        <div className='card product-card'>
            <Link to={'/product'} className='card-link'>
                <div className='product-card-img'>
                    {item_image && <img src={item_image} alt='product-image' className='product-card-image' />}
                </div>
                <div className='product-card-txt'>
                    <p className='product-card-name'>{item_name}</p>
                    <p className='product-card-sizes'>tailles : {item_sizes}</p>
                    <p className='item-price'>{item_price}</p>
                </div>                  
            </Link>
        </div>
    )
}

export default ProductCard;