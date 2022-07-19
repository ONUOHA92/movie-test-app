import React from 'react';
import Navbar from '../Navbar';

function index({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default index;