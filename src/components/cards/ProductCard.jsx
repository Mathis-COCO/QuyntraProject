import React from "react";
import '../../css/Card.scss';

const ProductCard = (props) => {
    const { item_name, item_price, item_image, item_sizes } = props;
    console.log(item_sizes);

    return (
        <div className='product-card'>
            <div className='card-img'>
                {item_image && <img src={item_image} alt='product-image' />}
            </div>
            <div>
                <p>{item_name}</p>
                <p>tailles : {item_sizes}</p>
                <p>{item_price}€</p>
            </div>         
        </div>
    )
}

export default ProductCard;