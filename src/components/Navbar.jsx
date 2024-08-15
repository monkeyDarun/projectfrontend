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
                <li className="nav-item"><Link to={"/reviews"}>Reviews</Link></li>
                <li className="nav-item"><Link to={"/services"}>Site Services</Link></li>
                <li className="nav-item dropdown">
                    <Link to={"#"}>More</Link>
                    <ul className="dropdown-menu">
                        <li><Link to={"/guides"}>Guides</Link></li>
                        <li><Link to={"/guides/cities"}>Cities</Link></li>
                        <li><Link to={"/guides/more"}>More</Link></li>
                    </ul>
                </li>
                <li className="nav-item"><Link to={"/submit-idea"}>Submit Idea Blog</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
