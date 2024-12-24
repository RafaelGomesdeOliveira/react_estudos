import React from "react";

export default function Header(props) {


    const retCor = () => {
        switch (props.cor) {
            case 1:
                return props.cores.vermelho;
            case 2:
                return props.cores.verde;
            case 3:
                return props.cores.azul;
            default:
                return {color: '#000'};
        }
    };
    

    const mudarCor = () => {
        props.setCor(props.cor+1)
        if(props.cor > 2){
            props.setCor(1)
        }
        console.log(props.cor)
    }


    return (
        <header>    
            <h1 style={retCor()} className="titulo">Título da página</h1>
            <div className="bloco"><button onClick={() => mudarCor()} >Mudar cor</button></div>
        </header>
    )
}

