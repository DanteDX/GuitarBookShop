import React from 'react'
import Controls from './Controls';
import Navoptions from './Navoptions';

const Navbar = () => {
    return (
        <div className="navbar">
            <Navoptions />
            <Controls />
        </div>
    )
}

export default Navbar;
