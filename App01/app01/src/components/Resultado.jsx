import React from "react";

export default function Resultado (props) {

    return (
        <div className="bloco">
            <p>A soma das notas é: {props.sumNota}</p>
            <p>{props.sumNota >= 70 ? 'Aprovado' : 'Reprovado'}</p>
        </div>
    )
}