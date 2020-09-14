import React, { Component } from 'react'
import { ProductListContext } from '../centralized_context'
import Product from './Product'


export class Home extends Component {
    static contextType = ProductListContext;

    render() {
        return (
            <>
                {
                    this.context.products.map(
                        product => {
                            return <Product key={product.Name} product={product} />
                        }
                    )
                }
            </>
        )
    }
}

export default Home
