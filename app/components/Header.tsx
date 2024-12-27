import React from "react";

const Header = () => {
    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="Main Navigation">
                <a className="navbar-logo" href="/" >
                    <img 
                        className="navbar-logo-img"
                        src="/image/SIS-Logo.webp" 
                        alt="Social Insight Solutions Logo" 
                        width="100px"
                        loading="lazy"
                    />
                    <span className="sr-only">Portfolio Home</span>
                </a>
                <div className="burger-menu" role="button" aria-label="Toggle navigation menu" area-expanded="false">
                    <div className="burger-bar"></div>
                    <div className="burger-bar"></div>
                    <div className="burger-bar"></div>
                </div>
                <ul className="navbar-links" role="menu" aria-label="Navigation Links">
                    <li role="menuitem">
                        <a href="/">Home</a>
                    </li>
                    <li role="menuitem">
                        <a href="/projects">Projects</a>
                    </li>
                    <li role="menuitem">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
                <a className="rainbow-flag" href="/" >
                    <img 
                        className="rainbow-flag-img"
                        src="/image/rainbow-flag.webp" 
                        alt="Pride flag supporting LGBTQIA+ community" 
                        width="60px"
                        loading="lazy"
                    />
                    <span className="sr-only">Portfolio Home</span>
                </a>
            </nav>
        </header>
    )
}

export default Header;