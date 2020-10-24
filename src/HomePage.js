import React from "react";
import { Card } from "./Card";

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
