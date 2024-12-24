import React from "react";

export default function Nota(props) {

    // const handleChangeNota = (e) => {
    //     const value = e.target.value;

    //     if (value === "" || isNaN(value)) {
    //         props.setNotas((notasAnteriores) => (
    //             { ...notasAnteriores, [`nota${props.num}`]: 0 }
    //         ))
    //     } else {
    //         props.setNotas((notasAnteriores) => ({ ...notasAnteriores, [`nota${props.num}`]: parseFloat(value) }));
    //     }
    // };

    return (
        <>
            <label htmlFor={'nota' + props.num}>Nota {props.num}: </label>

            <input type="number"
                name={'inota' + props.num}
                value={props.nota || ''}
                id={'nota' + props.num}
                onChange={(e) => props.alterarNota(e, props.num)} />

            <p>Valor da nota {props.nota}</p>
        </>
    )
}