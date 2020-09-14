import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProductListContext } from '../centralized_context';
import styled from 'styled-components';

export class Product extends Component {
    static contextType = ProductListContext;

    render() {
        const { id, Name, Descriptioin, Page_count, Characters, Author, Price, Genres, image_url, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 col-md-6 col-lg-3 my-3">
                <div
                    className="img-container p-5"
                    onClick={() => this.context.handleDetail(Name)}
                >
                    <Link to={{ pathname: `/products/${id}` }}>
                        <img src={image_url} alt="product" className="card-img-top" />
                    </Link>

                    <button
                        className="cart-btn"
                        disabled={inCart ? true : false}
                        onClick={() => {
                            this.context.addToCart(Name);
                            this.context.openModal(Name);
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
            </ProductWrapper>
        )
    }
}

export default Product


const ProductWrapper = styled.div`
    .card {
    //   border-color: transparent;
      transition: all 0.5s linear;
    }
    .card-footer {
      background: transparent;
      border-top: transparent;
      transition: all 0.5s linear;
    }
    &:hover {
      .card {
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2)
      }
      .card-footer {
        background: rgba(247, 247, 247);
      }
    }
    .img-container {
      position: relative;
      overflow: hidden;
    }
    .card-img-top {
      transition: all 1s linear;
      height:150px;
      width: auto;
    }
    .img-container:hover .card-img-top{
      transform: scale(1.05);
    }
    .cart-btn{
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0.2 rem 0.4rem;
      background: var(--lightBlue);
      border: none;
      color:var(--mainWhite);
      font-size: 1.4rem;
      border-radius: 0.5rem 0 0 0;
    //   transform: translate(100%, 100%);
      transition: all 0.5s linear;
    }
    .img-container: hover .cart-btn {
      transform: translate(0,0);
    }
    .cart-btn:hover{
      color: var(--mainBlue);
      cursor: pointer;
    }
`;
