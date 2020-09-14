import React, { Component } from 'react'
import Axios from 'axios';

const ProductListContext = React.createContext();


// this file provide data and actions to perform on the data
// sort of like a local backend

class ContextProvider extends Component {
    state = {
        products: [],
        cart: [],
        modalOpen: false,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount() {
        // get the data from local server
        Axios.get('/product')
            .then((res) => {
                this.setState({ products: res.data })
                console.log(this.state.products)
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

const ProductConsumer = ProductListContext.Consumer;

export { ProductListContext, ContextProvider, ProductConsumer };
