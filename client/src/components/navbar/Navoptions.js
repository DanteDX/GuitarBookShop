import React from 'react'
import {NavLink} from 'react-router-dom';

const Navoptions = () => {
    return (
        <ul className="navoptions">
            <li><NavLink to="/books">Books</NavLink></li>
            {/* <li><NavLink to="/pens">Pens</NavLink></li> */}
            <li><NavLink to="/guitars">Guitars</NavLink></li>
            {/* <li><NavLink to="/phones">Phones</NavLink></li> */}
        </ul>
    )
}

export default Navoptions;
