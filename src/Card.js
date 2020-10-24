import React from 'react';
import './Card.css';
import { ReactComponent as BuyIcon } from './icon/buyIcon.svg';
import {Link} from "react-router-dom";

class Card extends React.Component {
    render() {
        return (
            <Link to={`/product/${this.props.id}`}>
                <div className="card">
                    <div className="Image">
                        <img alt="Product's picture" className="Image__Img" src={this.props.imagePath}/>
                    </div> 
                    <div className="BootsInfo">
                        <p className="BootsName">
                            {this.props.name}
                        </p>
                        <p className="BootsCost">
                            {this.props.cost} Р
                        </p>
                        <button className="BuyBoots" onClick={(event) => {
                            event.preventDefault();
                            this.props.buy(this.props.id)
                        }}>
                            <BuyIcon />
                        </button>
                    </div>
                    
                </div>
            </Link>    
        )
    }
}

export { Card };
