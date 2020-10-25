import React from "react";
import { Card } from "./Card";
import CardDeck  from "react-bootstrap/CardDeck";

const HomePage = (props) => (
    <CardDeck style={{marginTop: "25px"}}>
        {props.products.map((product) => (
            <Card 
                key={product.id}
                imagePath={product.image}
                name={product.name}
                cost={product.cost}
                id={product.id}
                buy={props.buy}
            />
        ))}
    </CardDeck>  
);

export { HomePage };
