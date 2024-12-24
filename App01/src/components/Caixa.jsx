import React from "react";

export default function Caixa(props) {
    

    return (
        <>
            <h1>Valor da Caixa</h1>
            <p>Paragrafo da caixa</p>

            {props.children}
        </>
    )
}