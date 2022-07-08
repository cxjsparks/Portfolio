import React from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <ul className="nav-links">
                    <Link to="/About"  style={{textDecoration: "none"}}><li>ABOUT</li></Link>
                    <Link to="/Home"  style={{textDecoration: "none"}}><li>PROJECTS</li></Link>
                </ul>
            </nav>
        </div>
    )  
     
}

export default Navbar;