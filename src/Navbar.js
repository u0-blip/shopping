import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { ButtonWrapper } from './buttonWrapper';
import logo from './logo.svg';




export class Navbar extends Component {
    render() {
        return (
            <NavbarWarpper className='navbar navbar-expand-sm px-sm-5'>
                <Link to='/'>
                    <img src={logo} alt='store' style={{ borderRadius: '50%' }} />
                </Link>

                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            Products
                        </Link>

                    </li>
                </ul>

                <Link className="ml-auto" to="/cart">
                    <ButtonWrapper>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                    my cart
                    </ButtonWrapper>
                </Link>
            </NavbarWarpper>

        )
    }
}



export default Navbar

const NavbarWarpper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite);
    fond-size: 1.3rem; 
    text-transfrom: captialize;
}
`