import React from 'react';
import { ReactComponent as BuyIcon } from './icon/buyIcon.svg';
import "./SpecificProduct.css";
import {useParams} from "react-router-dom";
import Card  from "react-bootstrap/Card";
import Button  from "react-bootstrap/Button";





function SpecificProduct(props) {
    let { id } = useParams();
    const products = props.products;
    console.log(products)
    const product = products.find((item) => item.id === Number(id));
    console.log(product, id);
    return (
        
        <Card>
            <Card.Img style={{width: "500px", height: "auto", marginLeft: "20%"}} variant="top" alt="Nike" src={product.image} />
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Title>{product.cost} ₽</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <Button onClick={() => props.buy(product.id)}
                            variant="success">
                            <BuyIcon fill="#ffffff" />
                    </Button>
            </Card.Body>
        </Card>
        
        // <div>
        //     <div className="FullCard">
        //         <div className="FullImage">
        //             <img alt="Nike" className="FullImage__Img" src={product.image}/>
        //         </div> 
        //         <div className="FullBootsInfo">
        //             <p className="FullBootsName">
        //                 {product.name}
        //             </p>
        //             <p className="FullBootsCost">
        //                 {product.cost} ₽
        //             </p>
        //             <p className="description">
        //                 {product.description}
        //             </p>
        //             <button className="FullBuyBoots" onClick={() => props.buy(product.id)}>
        //                 <BuyIcon />
        //             </button>
        //         </div>
        //     </div>
        // </div>
    )
}

export { SpecificProduct };
