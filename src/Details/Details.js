import React, { Component } from 'react';
import { ButtonWrapper, SliderButtonWrapper } from '../buttonWrapper';
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
        let info;
        if (this.context.cart[id] != null) {
            info = this.context.cart[id];
        } else {
            info = this.context.cart['default'];
        }
        return (
            <div className='container'>
                <div className="row">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize justify-content-end">
                            <img src={image_url} style={{ maxHeight: '600px', marginLeft: '30px' }} className="img-fluid" alt="product" />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h2>Book name: {Name}</h2>
                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                Author : <span className="text-uppercase">{Author}</span>
                            </h4>
                            <p className="text-title text-uppercase text-muted mt-3 mb-2">
                                Genres : <span className="text-uppercase">{Genres}</span>
                            </p>
                            <p className="text-title text-uppercase text-muted mt-3 mb-2">
                                Page count : <span className="text-uppercase">{Page_count}</span>
                            </p>
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
                            <div className="col-10 mx-auto col-lg-11 my-2 my-lg-1">
                                <div className="d-flex" style={{ justifContent: 'space-evenly' }} >
                                    <div>
                                        <SliderButtonWrapper className=" mx-1"
                                            onClick={() => decrement(id)}> -
                                </SliderButtonWrapper>
                                        <span className=" mx-1">{info.tempCount}</span>
                                        <SliderButtonWrapper className=" mx-1"
                                            onClick={() => increment(id)}> +
                                </SliderButtonWrapper>
                                    </div>
                                    <div>
                                        <strong> Total Price: {info.tempCount * info.Price} </strong>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <ButtonWrapper
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        addToCart(id);
                                    }}
                                >
                                    Buy Now
                            </ButtonWrapper>
                                <ButtonWrapper
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        addToCart(id);
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
