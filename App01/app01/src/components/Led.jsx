import React from "react";

/*IMG's*/
import ledVerde from './imgs/led_verde.png'
import ledVermelho from './imgs/led_vermelho.png'

export default function Led(props) {

    const cancelar = (e) => {
        return e.preventDefault()

    }
    return (
        <>

            <img src={props.estadoLed ? ledVerde : ledVermelho} id="imgButton" width={'100px'} />
            <button onClick={() => { props.setEstadoLed(!props.estadoLed) }}>
                {props.estadoLed ? 'Desligar' : 'Ligar'}
            </button>
            <a href="https://youtube.com/cfbcursos" target="_blank" onClick={(e) => cancelar(e)}>
                CFBCursos
            </a>






        </>

    )
}
