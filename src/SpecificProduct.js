import React from 'react';
import { ReactComponent as BuyIcon } from './icon/buyIcon.svg';
import "./SpecificProduct.css";
import {useParams} from "react-router-dom";

function SpecificProduct(props) {
    let { id } = useParams();
    const products = props.products;
    console.log(products)
    const product = products.find((item) => item.id === Number(id));
    console.log(product, id);
    return(
        <div>
            <div className="FullCard">
                <div className="FullImage">
                    <img alt="Nike" className="FullImage__Img" src={product.image}/>
                </div> 
                <div className="FullBootsInfo">
                    <p className="FullBootsName">
                        {product.name}
                    </p>
                    <p className="FullBootsCost">
                        {product.cost} Р
                    </p>
                    <p className="description">
                        {product.description}
                    </p>
                    <button className="FullBuyBoots" onClick={() => props.buy(product.id)}>
                        <BuyIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export { SpecificProduct };
