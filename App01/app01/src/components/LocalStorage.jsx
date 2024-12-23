import React from "react";

export default function LocalStorage(props){

    const armanezar = (key, value) => {
        localStorage.setItem(key, value)
    }
    const ler = (key) => {
        alert(localStorage.getItem(key))
    }
    const apagar = (key) => {
        localStorage.removeItemItem(key)
    }

    return (
        <>
            <label htmlFor="nome">Digite o seu nome:</label>
            <input type="text" value={props.storage} name="inome" id="nome" onChange={(e) => props.setStorage(e.target.value)} />

            <button onClick={(e)=>armanezar('pessoa', props.storage)}>Adicionar</button>
            <button onClick={()=>ler('pessoa')}>Ler</button>
            <button onClick={()=>apagar('pessoa')}>Apagar</button>



        </>
    )
}