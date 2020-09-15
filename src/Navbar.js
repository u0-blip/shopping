import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import logo from './logo.png';




export class Navbar extends Component {
    render() {
        return (
            <NavbarWarpper className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className="container justify-content-between">
                    <div className='col-3'>
                        <Link to='/'>
                            <img src={logo} alt='store' style={{ borderRadius: '50%', objectFit: 'scale-down', width: '60px', height: '60px' }} />
                            <div class="navbar-brand ml-3" href="#">Arctic Ocean</div>
                        </Link>
                    </div>
                    <div className='col-2'>
                        <Link to='/' className='nav-link'>
                            Products
                        </Link>
                    </div>
                    <div className='col-4'>

                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>

                    <div className='col-2'>
                        <Link className="ml-auto" to="/cart">
                            <button class='btn  btn-outline-info'>
                                <span className="mr-2">
                                    <i className="fas fa-cart-plus"></i>
                                </span>
                                my cart
                            </button>
                        </Link>
                    </div>
                </div>
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