import React, { Component } from 'react'
import { ProductListContext } from '../centralized_context'
import Modal from '../Details/Modal';
import Product from './Product'


export class Home extends Component {
    static contextType = ProductListContext;
    render() {
        var productRows = [];
        for (const [id, product] of Object.entries(this.context.products)) {
            productRows.push(<Product key={id} product={product} />)
            console.log('all products ', this.context.products)
            console.log('products', product)
        }
        return (
            <div className='container' style={{ justifyContent: "left" }}>
                <div className='row'>
                    {productRows}
                </div>
                <Modal />
            </div>
        )
    }
}

export default Home
