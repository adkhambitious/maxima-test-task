import React from 'react';
import './Basket.css';
import { ReactComponent as DeleteIcon } from './icon/deleteIcon.svg'
import Card from "react-bootstrap/Card"; 
import Button from "react-bootstrap/Button"; 

class Basket extends React.Component {

    render() {
        return (
            <div className="BasketBlock">
                <Card><Card.Title>Total price:  {this.props.sum} ₽</Card.Title></Card>

                {this.props.purchases.map((purchase) => {
                    return (
                        <Card>
                            <Card.Body>
                            <Card.Title>{purchase.name}</Card.Title>
                            <Card.Text>
                                {purchase.cost} ₽
                            </Card.Text>
                            <Button onClick={() => {
                                this.props.removeBoots(purchase.id)}}
                                variant="danger">
                                    <DeleteIcon />
                            </Button>
                            </Card.Body>
                        </Card>
                    )                    
                })}                
            </div>
        )
    }
}

export { Basket };
