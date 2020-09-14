import Axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProductListContext } from '../centralized_context';

export class Product extends Component {
    static contextType = ProductListContext;

    render() {
        const { Name, Descriptioin, Page_count, Characters, Author, Price, Genres, image_url, inCart, value } = this.props.product;
        return (
            <>
                <div
                    className="img-container p-5"
                    onClick={() => value.handleDetail(Name)}
                >
                    <Link to="/details">
                        <img src={image_url} alt="product" className="card-img-top" style={{ width: '100px', height: '100px' }} />
                    </Link>

                    <button
                        className="cart-btn"
                        disabled={inCart ? true : false}
                        onClick={() => {
                            value.addToCart(Name);
                            value.openModal(Name);
                        }}
                    >
                        {inCart ? (
                            <p className="text-capitalize mb-0" disabled>
                                In Cart
                            </p>
                        ) : (
                                <i className="fas fa-cart-plus" />
                            )}
                    </button>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {Name}
                    </p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>
                        {Price}
                    </h5>
                </div>
            </>
        )
    }
}

export default Product
