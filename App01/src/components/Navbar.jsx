import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='contact'>Contact</Link>
            <Link to='pag1'>Pagaina 1</Link>
            <Link to='pag2'>Pagina 2</Link>
            <Link to='pag3'>Pagina 3</Link>
        </nav>
    )
} 