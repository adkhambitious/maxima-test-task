import React from "react";
import { Card } from "./Card";

import CardDeck  from "react-bootstrap/CardDeck";

function HomePage(props) {
    console.log(props)
    return (
        <CardDeck style={{marginTop: "25px"}}>
            {props.products.map((product) => {
                return (
                    <Card
                        imagePath = {product.image}
                        name = {product.name}
                        cost = {product.cost}
                        id = {product.id}
                        buy = {props.buy}
                    />
                )
            })}
        </CardDeck>    
            
        
    );
}

export { HomePage };
