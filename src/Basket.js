import React from 'react';
import './Basket.css';
import { ReactComponent as DeleteIcon } from './icon/deleteIcon.svg'
import Card from "react-bootstrap/Card"; 
import Button from "react-bootstrap/Button"; 

const Basket = (props) => (
    <div className="BasketBlock">
        <Card><Card.Title>Total price:  {props.sum} ₽</Card.Title></Card>
        {props.purchases.map((purchase) => {
            return (
                <Card key={purchase.id}>
                    <Card.Body>
                    <Card.Title>{purchase.name}</Card.Title>
                    <Card.Text>
                        {purchase.cost} ₽
                    </Card.Text>
                    <Button onClick={() => {
                        props.removeBoots(purchase.id)}}
                        variant="danger">
                            <DeleteIcon />
                    </Button>
                    </Card.Body>
                </Card>
            )                    
        })}                
    </div>
);

export { Basket };
