import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

        const { addToCart, openModal } = this.context;

        return (
            <div className="row">
                <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                    <h1>
                        {Name}
                    </h1>
                </div>
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={image_url} className="img-fluid" alt="product" />
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
                        <div>
                            <Link to="/">
                                <button>
                                    back to products
                          </button>
                            </Link>
                            <button
                                disabled={inCart ? true : false}
                                onClick={() => {
                                    addToCart(id);
                                    openModal(id);
                                }}
                            >
                                {inCart ? "inCart" : "add to cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details
