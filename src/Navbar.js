import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to='/'>
                    <img />
                </Link>
                <Link to='/'>
                    Products
                </Link>
                <Link to='/cart'>
                    my cart
                </Link>
            </nav>

        )
    }
}

export default Navbar
