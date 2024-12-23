import React from "react";
import { Link } from "react-router-dom";

export default function Contact(){
    return(
        <>
            <h2>
                Está é a página Contact
            </h2>

            <p>
                <Link to='/contact/1'>Forma de contato 1</Link>
            </p>
            <p>
                <Link to='/contact/2'>Forma de contato 2</Link>
            </p>
            <p>
                <Link to='/contact/3'>Forma de contato 3</Link>
            </p>
            
            
        </>
    )
}