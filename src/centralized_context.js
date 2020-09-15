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
                Price: 25,
                tempCount: 1
            },
            'Pride and Prejudice': {
                count: 2,
                Price: 25,
                tempCount: 2
            },
            'default': {
                count: 0,
                Price: 0,
                tempCount: 1
            }
        },
        cartPrice: {
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0
        },
        modalProduct: null,
        modalOpen: false,
    }

    async componentDidMount() {
        // get the data from local server

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(Axios.get('/product')), 1000)
        });

        let res = await promise;

        let data = res.data;
        let data_dict = {};
        data.forEach((d) => {
            data_dict[d.id] = d;
        })
        this.setState({ products: data_dict })
    }

    createCartInstance = (id) => {
        let instance = this.state.cart[id];
        if (!instance) {
            instance = JSON.parse(JSON.stringify(this.state.cart['default']))
            let product = this.state.products[id];
            instance.Price = product.Price;

            this.setState(() => {
                return { cart: { ...this.state.cart, [id]: instance } }
            })
        }
        return instance;
    }

    addToCart = (id) => {
        let product = this.state.products[id];
        if (!product) {
            return null
        }

        let instance = this.createCartInstance(id)
        instance.count = instance.tempCount;

        this.setState(() => {
            return { cart: { ...this.state.cart, [id]: instance } }
        })
        this.updateTotals();
    }

    updateTotals = () => {
        let subTotal = 0;
        for (const [key, instance] of Object.entries(this.state.cart)) {
            subTotal += instance.count * instance.Price;
        }

        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal;
        subTotal = total - tax;
        this.setState(() => {
            return {
                cartPrice: {
                    cartSubTotal: subTotal,
                    cartTax: tax,
                    cartTotal: total
                }
            }
        })
    }

    openModal = (id) => {
        const product = this.state.products[id];
        let instance = this.createCartInstance(id)
        instance.tempCount = instance.count > 1 ? instance.count : 1;

        this.setState(() => {
            return { modalProduct: product, modalOpen: true, cart: { ...this.state.cart, [id]: instance } };
        })
    }

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        })
    }

    increment = (id) => {
        let instance = this.createCartInstance(id)

        instance.tempCount += 1;

        this.setState(
            () => {
                return { cart: { ...this.state.cart, [id]: instance } };
            }
        );
    }

    decrement = (id) => {
        let instance = this.createCartInstance(id)

        if (instance.tempCount > 0) {
            instance.tempCount -= 1;
        }

        this.setState(
            () => {
                return { cart: { ...this.state.cart, [id]: instance } };
            }
        );
    }

    removeFromCart = () => {

    }
    clearCart = () => {

    }
    render() {
        return (
            <ProductListContext.Provider value={
                {
                    ...this.state,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    updateTotals: this.updateTotals,
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
