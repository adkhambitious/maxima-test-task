import React from 'react';
import { ReactComponent as BuyIcon } from './icon/buyIcon.svg';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import BootstrapCard from 'react-bootstrap/Card';

class Card extends React.Component {
    render() {
        return (
            <Link to={`/product/${this.props.id}`}>
                <BootstrapCard style={{ width: '18rem', marginBottom: "25px" }}>
                    <BootstrapCard.Img alt="Nike" variant="top" src={this.props.imagePath} />
                    <BootstrapCard.Body>
                    <BootstrapCard.Title>{this.props.name}</BootstrapCard.Title>
                    <BootstrapCard.Title>{this.props.cost} ₽</BootstrapCard.Title>
                    <BootstrapCard.Text>
                        Some quick example text to build on the BootstrapCard title and make up the bulk of
                        the BootstrapCard's content.
                    </BootstrapCard.Text>
                    <Button onClick={(event) => {
                            event.preventDefault(); 
                            this.props.buy(this.props.id)}}
                            variant="success">
                            <BuyIcon fill="#ffffff" />
                    </Button>
                    </BootstrapCard.Body>
                </BootstrapCard>
            </Link>    
        )
    }
}

export { Card };
