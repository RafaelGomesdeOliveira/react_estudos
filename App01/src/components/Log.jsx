import React, { useState } from "react";

export default function Log(props) {

    const comprimento = (hora) => {
        if (hora < 12 && hora >= 0) {
            return 'Bom dia'
        } else if (hora < 18) {
            return 'Boa tarde'
        } else {
            return 'Boa noite'
        }
    }

    const msgLogin = () => {
        return `Usuário Logado`
    }
    const msgLogOff = () => {
        return `Usuário Deslogado`
    }


    return (
        <>
            <div className="bloco">
                <p>Horas: {props.hora}</p>
                {comprimento(props.hora)}
                
                <p>{props.log ? msgLogin() : msgLogOff()}</p>
                <button onClick={() => props.setLog(!props.log)}>
                    {props.log ? 'Logout' : 'Login'}
                </button>
            </div>
        </>

    )
}