import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom box-shadow py-3 px-5 mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Web App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/"
                                className="nav-link text-dark" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products"
                                className="nav-link text-dark">Product</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar