import React, { Component } from 'react'
import { ProductListContext } from '../centralized_context'
import Title from '../Details/Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';


export class Cart extends Component {
    static contextType = ProductListContext;

    render() {
        const { cart } = this.context;
        return (
            <div className='container'>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList />
                <CartTotals history={this.props.history} />
            </div>
        );
    }
}

export default Cart
