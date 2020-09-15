import React, { Component } from 'react'
import { ButtonWrapper, SliderButtonWrapper } from '../buttonWrapper';
import { ProductListContext } from '../centralized_context';

class CartItem extends Component {
    static contextType = ProductListContext;

    render() {
        if (!this.props.item || this.props.info.count < 1) {
            return <div />
        }
        const { id, Name, Descriptioin, Page_count, Characters, Author, Genres, image_url, inCart } = this.props.item;

        const { count, Price } = this.props.info;
        const { increment, decrement, removeFromCart, addToCart } = this.context;

        return (
            <div className="row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img
                        src={image_url}
                        style={{ width: "auto", height: "5rem" }}
                        className="image_url-fluid"
                        alt="product"
                    />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">product:</span>
                    {Name}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Price :</span>
                    {Price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <SliderButtonWrapper className=" mx-1"
                            onClick={() => {
                                decrement(id);
                                addToCart(id);
                            }}> -
                            </SliderButtonWrapper>
                        <span className=" mx-1">{count}</span>
                        <SliderButtonWrapper className=" mx-1"
                            onClick={() => {
                                increment(id);
                                addToCart(id);
                            }}> +
                            </SliderButtonWrapper>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <ButtonWrapper className="cart-icon" onClick={() => removeFromCart(id)}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                        </svg>
                    </ButtonWrapper>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong>item total: $ {count * Price}</strong>
                </div>
            </div>
        )
    }
}

export class CartList extends Component {
    static contextType = ProductListContext;

    render() {
        const { cart, products } = this.context;
        let CartRows = []

        for (const [id, info] of Object.entries(cart)) {
            CartRows.push(<CartItem key={id} item={products[id]} info={info} />)
        }

        return (<div className='container-fluid'>
            {CartRows}
        </div>
        )
    }
}

export default CartList
