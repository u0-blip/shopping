import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonWrapper, SliderButtonWrapper } from '../buttonWrapper';
import { ProductListContext } from '../centralized_context';
import Axios from 'axios';

export default class Modal extends Component {
    static contextType = ProductListContext;

    constructor(props) {
        super(props);
        this.escFunction = this.escFunction.bind(this);
    }

    escFunction(event) {
        if (event.keyCode === 27) {
            this.context.closeModal();
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.escFunction, false);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.escFunction, false);
    }

    handleClose() {
        const { closeModal } = this.context;
        closeModal();
    }
    render() {
        const { modalOpen, closeModal } = this.context;

        if (!modalOpen) {
            return null;
        }

        const { id, Name, Price, img_type } = this.context.modalProduct;

        let info;
        if (this.context.cart[id] != null) {
            info = this.context.cart[id];
        } else {
            info = this.context.cart['default'];
        }
        const { increment, decrement, removeFromCart, addToCart } = this.context;

        return <ModalWrapper>
            <div className="container">
                <div className="row">
                    <div onClick={closeModal} className='col' />
                    <div id="modal"
                        className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">

                        <img src={Axios.defaults.baseURL + '/' + encodeURIComponent(Name + img_type)} className="img-fluid" alt="product" />
                        <h5>{Name}</h5>
                        <h5 className="text-muted">price: $ {Price}</h5>
                        <h5>Choose the quantity</h5>
                        <div className="col-10 mx-auto col-lg-11 my-2 my-lg-1">
                            <div className="d-flex" style={{ justifContent: 'space-evenly' }}>
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
                        <Link to='/'>
                            <ButtonWrapper onClick={() => {
                                addToCart(id);
                                closeModal()
                            }}>
                                Add, keep shopping
                            </ButtonWrapper>
                        </Link>
                        <Link to='/cart'>
                            <ButtonWrapper onClick={() => {
                                addToCart(id);
                                closeModal()
                            }}>
                                Add, go to cart
                            </ButtonWrapper>
                        </Link>
                    </div>
                    <div onClick={closeModal} className='col' />
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
