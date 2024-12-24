import React, { useRef, useState } from "react";

import Carros from "./Carros";

export default function Pessoa(props) {
    const inputRef = useRef(null);

    const carros = [ // É um array
        { categoria: "Esporte", preco: "110.000,00", modelo: "Golf GTI"   },
        { categoria: "Esporte", preco: "120.000,00", modelo: "Camaro" },
        { categoria: "SUV", preco: "85.000,00", modelo: "HRV" },
        { categoria: "SUV", preco: "83.000,00", modelo: "T-Cross" },
        { categoria: "Utilitario", preco: "120.000,00", modelo: "Hilux" },
        { categoria: "Utilitario", preco: "90.000,00", modelo: "Ranger" },
        { categoria: "Utilitario", preco: "1.100.000,00", modelo: "Lamborguini" },
    ];

    const car = { //É um objeto
        categoria: "Esporte", 
        preco: "110000.00", 
        modelo: "Golf GTI"
    }

    /*Object.entries(car).forEach(
        ([chave, valor]) => {
            console.log(chave, valor)
        }
    )
    */


    const [carro, setCarro] = useState(carros[0].categoria + ' -- ' + carros[0].modelo)


    const handleChangeNome = (e) => {
        return props.setNome(e.target.value)
    }

    return (
        <>
            <div className="bloco">
                <p>Esse é o seu nome: {props.nome}? Se não, altere no input abaixo</p>
                <input type="text" name="inome" id="nome" value={props.nome} ref={inputRef} onChange={(e) => handleChangeNome(e)} />
                <button onClick={(e) =>
                    props.setNome('')
                }>Limpar</button>
                <Carros
                    carros={carros}
                    carro={carro}
                    setCarro={setCarro}
                />
            </div>

        </>
    )

}
