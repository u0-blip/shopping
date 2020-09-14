import React, { Component } from 'react'
import { ProductListContext } from '../centralized_context';

class CartItem extends Component {
    render() {
        return (
            <div>
                {this.props.item.Name}
            </div>
        )
    }
}

export class CartList extends Component {
    static contextType = ProductListContext;

    render() {
        const { cart, products } = this.context;
        let product_wait = Object.keys(products).length === 0;


        return (
            !product_wait ? <div className='container-fluid'>
                {
                    cart.map(itemid => {
                        return <CartItem key={itemid} item={products[itemid]} />
                    })
                }
            </div> : <div />
        )
    }
}

export default CartList
