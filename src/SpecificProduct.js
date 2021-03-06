import React from 'react';
import { ReactComponent as BuyIcon } from './icon/buyIcon.svg';
import "./SpecificProduct.css";
import {useParams} from "react-router-dom";
import Card  from "react-bootstrap/Card";
import Button  from "react-bootstrap/Button";

function SpecificProduct(props) {
    let { id } = useParams();
    const products = props.products;
    const product = products.find((item) => item.id === Number(id));
    
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
    );
}

export { SpecificProduct };
