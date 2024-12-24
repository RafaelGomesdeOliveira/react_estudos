import React from "react";

export default class BaseClass extends React.Component {
    constructor(props) {
        super(props)

        this.nome = 'Agnes'
        this.state = {
            curso: 'React',
            quantAulas: 40,
            ativo: true,
            ouvinte: this.props.usuario
        }
    }

    ativarDesativar = () => {
        this.setState(
            (state) => ({
                ativo: !state.ativo
            })
        )
    }


    render() {
        return (
            <>
                <p>{`${this.nome} e ${this.state.ouvinte}`}</p>
                <p>Curso: {this.state.ativo ? 'Ativado ' : 'Desativado'}</p>
                
                <button onClick={this.ativarDesativar}>{this.state.ativo ? 'Desativa' : 'Ativar'}</button>
            </>
        )
    }
} 