import React from 'react';
import './navbar.css'
import logo from '../../assets/images/MyTestApp.png'

function Navbar(props) {
    return (
        <>
            <nav className='wrapper'>
                <div className='logo-wrapper'>
                    <img src={logo} alt="" />
                </div>


            </nav>

        </>
    );
}

export default Navbar;