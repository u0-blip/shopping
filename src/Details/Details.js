import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonWrapper } from '../buttonWrapper';
import { ProductListContext } from '../centralized_context';


export class Details extends Component {
    static contextType = ProductListContext;

    render() {
        const id = this.props.match.params.id;

        let product_wait = Object.keys(this.context.products).length === 0;
        if (product_wait) {
            return <div />
        }

        const { Name, Descriptioin, Page_count, Characters, Author, Price, Genres, image_url, inCart } = this.context.products[id];

        const { addToCart, openModal, increment, decrement } = this.context;

        return (
            <div className='container'>
                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                        <h1>
                            {Name}
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize justify-content-end">

                            <img src={image_url} style={{ maxHeight: '600px', marginLeft: '30px' }} className="img-fluid" alt="product" />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h2>model: {Name}</h2>
                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                Author : <span className="text-uppercase">{Author}</span>
                            </h4>
                            <h4 className="text-blue">
                                <strong>
                                    price: <span>$</span> {Price}
                                </strong>
                            </h4>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                Description:
                      </p>
                            <p className="text-muted lead">
                                {Descriptioin}
                            </p>
                            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                                <div> Quantity </div>
                                <div className="d-flex justify-content-center">
                                    <span className="btn btn-black mx-1"
                                        onClick={() => decrement(id)}> -
                                        </span>
                                    <span className="btn btn-black mx-1">{0}</span>
                                    <span className="btn btn-black mx-1"
                                        onClick={() => increment(id)}> +
                                        </span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <ButtonWrapper
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        addToCart(id);
                                        openModal(id);
                                    }}
                                >
                                    Buy Now
                            </ButtonWrapper>
                                <ButtonWrapper
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        addToCart(id);
                                        openModal(id);
                                    }}
                                >
                                    Add to Cart
                            </ButtonWrapper>
                            </div>
                        </div>
                    </div>
                </div>

            </div>);
    }
}

export default Details
