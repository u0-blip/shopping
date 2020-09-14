import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProductListContext } from '../centralized_context';

export class CartTotals extends Component {
    static contextType = ProductListContext;

    render() {
        const { cartSubTotal, cartTax, cartTotal } = this.context.cartPrice;
        const { clearCart } = this.context;

        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">

                        <button
                            className="btn btn-outline-danger text-uppercase mb-3 px-5"
                            type="button"
                            onClick={() => clearCart()}>
                            clear cart
                        </button>
                        <h5>
                            <span className="text-title">
                                subtotal:
                        </span>
                            <strong>${cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax:
                        </span>
                            <strong>${cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total:
                        </span>
                            <strong>${cartTotal}</strong>
                        </h5>
                        <button>
                            pay
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartTotals
