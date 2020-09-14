import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonWrapper, SliderButtonWrapper } from '../buttonWrapper';
import { ProductListContext } from '../centralized_context';

export default class Modal extends Component {
    static contextType = ProductListContext;
    render() {
        const { modalOpen, closeModal } = this.context;

        if (!modalOpen) {
            return null;
        }

        const { id, image_url, Name, Price } = this.context.modalProduct;

        let count;
        if (this.context.cart.id != null) {
            count = this.context.cart.id.count;
        } else {
            count = 0;
        }
        const { total } = this.context.cartPrice;
        const { increment, decrement, removeItem } = this.context;

        return <ModalWrapper>
            <div className="container">
                <div className="row">
                    <div id="modal"
                        className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">

                        <img src={image_url} className="img-fluid" alt="product" />
                        <h5>{Name}</h5>
                        <h5 className="text-muted">price: $ {Price}</h5>
                        <h5>Choose the quantity</h5>
                        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                            <div className="d-flex justify-content-center">
                                <SliderButtonWrapper className=" mx-1"
                                    onClick={() => decrement(id)}> -
                            </SliderButtonWrapper>
                                <span className=" mx-1">{count}</span>
                                <SliderButtonWrapper className=" mx-1"
                                    onClick={() => increment(id)}> +
                            </SliderButtonWrapper>
                            </div>
                        </div>
                        <Link to='/'>
                            <ButtonWrapper onClick={() => closeModal()}>
                                store
                                        </ButtonWrapper>
                        </Link>
                        <Link to='/cart'>
                            <ButtonWrapper onClick={() => closeModal()}>
                                go to cart
                                        </ButtonWrapper>
                        </Link>
                    </div>
                </div>
            </div>
        </ModalWrapper>

    }
}

const ModalWrapper = styled.div`
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        #modal {
            background: var(--mainWhite);
        }
`;
