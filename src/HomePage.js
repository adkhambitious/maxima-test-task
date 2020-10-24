import React from "react";
import { Card } from "./Card";
import imagePath1 from './image/one.jpg';
import imagePath2 from './image/two.jpg';
import imagePath3 from './image/three.jpg';


function HomePage(props) {
    console.log(props)
    return (
        <div>
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
        </div>
    );
}

export { HomePage };
