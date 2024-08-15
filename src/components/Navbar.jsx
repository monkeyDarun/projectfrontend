import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a class="a" href="/"> <img class="mg" height="50px" width="50px" src="https://img.freepik.com/premium-vector/web-home-flat-icon-apps-websites-house-icon-home-sign-circle-main-page-icon_690577-329.jpg" alt="" />
                Ｔｈｅ Ｄｅｃｏｒ Ｌｏｆｔ</a>
            </div>
            <ul className="nav-links">
                <li className="nav-item dropdown">
                    <Link to={"/gallery"}>Design Gallery</Link>
                    {/* <ul className="dropdown-menu">
                        <li><a href="/gallery">Design 1</a></li>
                        <li><a href="/gallery">Design 2</a></li>
                        <li><a href="/gallery">Design 3</a></li>
                    </ul> */}
                </li>
                {/* <li className="nav-item"><a href="/projects">Recent Projects</a></li> */}
                <li className="nav-item"><a href="/reviews">Reviews</a></li>
                <li className="nav-item"><a href="/services">Site Services</a></li>
                <li className="nav-item dropdown">
                    <a href="#">More</a>
                    <ul className="dropdown-menu">
                        <li><a href="/guides">Guides</a></li>
                        <li><a href="/guides/cities">Cities</a></li>
                        <li><a href="/guides/more">More</a></li>
                    </ul>
                </li>
                <li className="nav-item"><a href="/submit-idea">Submit Idea Blog</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
