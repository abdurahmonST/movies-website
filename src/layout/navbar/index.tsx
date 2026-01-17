// import React from 'react'
import { Link } from "react-router-dom"
import { Typography } from "../../components"
import { Actions, Links, Logo, NavbarContainer } from "./navbar.styles"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }

  return (
    <NavbarContainer>
        <Logo>
            <Link to={"/home"}>
                <img src="/icons/heroicons-solid/heart.svg" alt="logo" />
            </Link>
        </Logo>
        <Links>
            <Link to={"/home"}><Typography type="h4">Home</Typography></Link>
            <Link to={"/pricing"}><Typography type="h4">Pricing</Typography></Link>
            <Link to={"/movies"}><Typography type="h4">Movies</Typography></Link>
            <Link to={"/series"}><Typography type="h4">Series</Typography></Link>
            <Link to={"/collection"}><Typography type="h4">Collection</Typography></Link>
            <Link to={"/faq"}><Typography type="h4">FAQ</Typography></Link>
        </Links>
        <Actions>
            <button>
                <img src="/icons/heroicons-solid/sun.svg" alt="sun" />
            </button>
            <button>
                <img src="/icons/heroicons-solid/sun.svg" alt="sun" />
            </button>
            <button>
                <img src="/icons/heroicons-solid/sun.svg" alt="sun" />
            </button>
            <button onClick={toggleTheme}>
                <img src="/icons/heroicons-solid/sun.svg" alt="sun" />
            </button>
        </Actions>
    </NavbarContainer>
  )
}

export default Navbar
