import React from "react";

export default function Numero(props) {
    return (
        <>
            <div className="bloco">
                <p>O valor de num no compoenete NUMERO: {props.num}</p>
                <button onClick={()=>props.setNum((valorAnterior) => valorAnterior+1)}>Adicionar</button>
            </div>
        </>
    )
}
