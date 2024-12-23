import React from "react";
import Dados from "./Dados";

export default function Corpo(){
    //VARIAVÉIS
    const idade = 18
    const nome = 'Rafael'

    //FUNÇÕES
    const cnl = () => {
        return 'CFBCursos'
    }
    const somar = (v1, v2) => {
        return v1 + v2

    }

    const textoDestaque = {
        color: 'blue',
        fontSize: '20px',
        fontWeigth: 'bold',
    }


    return (
        <div className="bloco">
            <p style={{color:"red", fontSize:'18px'}}>Aqui é o conteudo</p>
            <p style={textoDestaque}>Ainda estou aprendendo, por isso tenha calma paizão</p>
            <Dados 
                canal={cnl} 
                estudante={nome}
                idade={idade}
                somar={somar}
            />
        </div>
    )
}