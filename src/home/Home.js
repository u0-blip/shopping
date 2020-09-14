import React, { Component } from 'react'
import { ProductListContext } from '../centralized_context'
import Product from './Product'


export class Home extends Component {
    static contextType = ProductListContext;
    render() {
        var productRows = [];
        for (const [_, product] of Object.entries(this.context.products)) {
            productRows.push(<Product key={product.id} product={product} />)
        }
        return (
            <>
                {productRows}
            </>
        )
    }
}

export default Home
