import React, { useState } from "react";

export default function Carros(props) {

    const listaCarro = props.carros.map(
        (objeto, indice, arrayBase) => {
            const opcao = objeto.categoria + ' -- ' + objeto.modelo
            
            return <option key={indice} value={opcao} >{opcao}</option>
        }
    )

    const handleChange = (e) => {

        props.setCarro(e.target.value)
    }

    return (
        <>
            <select value={props.carro} onChange={(e) => handleChange(e)}>
                {listaCarro}
            </select>
            <p>
                Carro selecionado: {props.carro}
            </p>

        </>
    )
}