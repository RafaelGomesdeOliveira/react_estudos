import React from "react";  

export default class Classe extends React.Component{ //Eu tô acessndo o Components do react
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h1>Primeiro h1 do componente de classe</h1>
                <p>{this.props.pessoa} está assistinod o curso de {this.props.curso}</p>
            </>
        )
    }
}