import React, { Component } from 'react'
import Axios from 'axios';

const ProductListContext = React.createContext();
const ShoppingContext = React.createContext();

// this file provide data and actions to perform on the data
// sort of like a local backend

class ContextProduct extends Component {
    state = {
        products: {},
        cart: {
            '1984': {
                count: 1,
            }
        },
        cartPrice: {
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0
        },
        modalOpen: false,
    }

    componentDidMount() {
        // get the data from local server
        Axios.get('/product')
            .then((res) => {
                let data = res.data;
                let data_dict = {};
                data.forEach((d) => {
                    data_dict[d.id] = d;
                })
                this.setState({ products: data_dict })
            })
    }

    handleDetail() {

    }
    addToCart() {

    }
    openModal() {

    }
    closeModal() {

    }
    increment() {

    }
    decrement() {

    }
    removeFromCart() {

    }
    clearCart() {

    }
    render() {
        return (
            <ProductListContext.Provider value={
                {
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeFromCart: this.removeFromCart,
                    clearCart: this.clearCart
                }
            }>
                {this.props.children}
            </ProductListContext.Provider>
        );
    }
}


class ContextShopping extends Component {
    render() {
        return (
            <ShoppingContext.Provider value={
                {
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeFromCart: this.removeFromCart,
                    clearCart: this.clearCart
                }
            }>
                {this.props.children}
            </ShoppingContext.Provider>
        );
    }
}

const ProductConsumer = ProductListContext.Consumer;

export { ProductListContext, ContextProduct, ContextShopping, ShoppingContext, ProductConsumer };
