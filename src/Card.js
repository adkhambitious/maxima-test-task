import React from 'react';
// import './Card.css';
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
                {/* <div className="card">
                    <div className="Image">
                        <img alt="Nike" className="Image__Img" src={this.props.imagePath}/>
                    </div> 
                    <div className="BootsInfo">
                        <p className="BootsName">
                            {this.props.name}
                        </p>
                        <p className="BootsCost">
                            {this.props.cost} Р
                        </p>
                        
                        <Button onClick={(event) => {
                            event.preventDefault(); 
                            this.props.buy(this.props.id)}}
                            variant="success">
                            <BuyIcon fill="#ffffff" />
                            
                        </Button>
                        
                        // <button className="BuyBoots" onClick={(event) => {
                        //     event.preventDefault();
                        //     this.props.buy(this.props.id)
                        // }}>
                        //     <BuyIcon />
                        // </button> */}
                    {/* </div> */}
                    
                {/* </div> */}
            </Link>    
        )
    }
}

export { Card };
