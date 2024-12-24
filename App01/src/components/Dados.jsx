import React from "react";

export default function Dados(props) {
    let n1 = 10
    let n2 = 20

    return (
        <>

            <p>Temos o estudante <strong>{props.estudante}</strong> de {props.idade} estudando o curso de React na <strong>{props.canal()}</strong> </p>
            <p>A soma entre <strong>n1: {n1}</strong> e <strong>n2: {n2}</strong> é igual a <strong>{props.somar(n1, n2)}</strong></p>

        </>
    )
}
