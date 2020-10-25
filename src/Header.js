import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

const Header = () => (
    <header className="Header">
        <div className="SiteName">
            SHOP
        </div>
        <div className="Menu">
            <ul className="Menu__List">
                <li className="Menu__Item">
                    <Link className="Menu__Link" to="/">КАТАЛОГ</Link>
                </li>
                <li className="Menu__Item">ОБЗОРЫ</li>
                <li className="Menu__Item">GOODBOOK</li>
                <li className="Menu__Item">АКЦИИ</li>
            </ul>
        </div>
    </header>
);

export { Header };
