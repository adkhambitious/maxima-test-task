import React from 'react';
import './Basket.css';
import { Card } from './Card';
import { ReactComponent as DeleteIcon } from './icon/deleteIcon.svg'

class Basket extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="BasketBlock">
                {this.props.purchases.map((purchase) => {
                    return (
                        <div>
                            {purchase.name + "-" + purchase.cost} Р
                            <button className="deleteBoots" onClick={() => {
                                this.props.removeBoots(purchase.id)
                            }}>
                                <DeleteIcon />
                            </button>
                        </div>
                    )
                })}
                SUM = {this.props.sum} Р
            </div>
        )
    }
}

export { Basket };
