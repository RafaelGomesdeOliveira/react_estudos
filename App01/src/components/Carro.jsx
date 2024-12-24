import React from "react";

export default class Carro extends React.Component {
    constructor(props) {
        super(props)
        this.modelo = 'Golf'
        this.state = {
            ligado: false,
            vel: 0
        }
        this.controle = null
        // this.LigDes = this.ligarDesligar.bind(this)
        console.log('Aqui: ' + this)
    }

    acelerar = () => {
        if (this.state.ligado) {
            this.setState(
                (state, props) => (
                    { vel: state.vel + props.fator }
                )
            )
        }
    }

    desacelerar = () => {
        if (this.state.vel > 0) {
            this.setState(
                (state, props) => ({
                    vel: state.vel - props.fator > 0 ? state.vel - props.fator : 0
                })
            )
        }
    }

    ligarDesligar = () => {
        // this.setState({ligado: !this.state.ligado})
        if (this.state.ligado) {
            this.setState(
                (state) => (
                    { ligado: false }
                ),
                () => {
                    this.iniciarDesaceleracao()
                }
            )
        } else {
            this.setState(
                (state) => (
                    { ligado: true }
                ),
                () => {
                    this.pararDesaceleracao()
                }
            )
        }
    }

    iniciarDesaceleracao = () => {
        this.controle = setInterval(() => {
            this.desacelerar()
            if (this.state.vel == 0) {
                this.pararDesaceleracao()
            }
        }, 500);

    }

    pararDesaceleracao = () => {
        clearInterval(this.controle)
        this.controle = null

    }

    render() {
        return (
            <>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Ligado' : 'Desligado'}</p>
                <p>Velocidade: {this.state.vel}</p>
                <button onClick={this.ligarDesligar}>{this.state.ligado ? 'Desligar carro' : 'Ligar Carro'}</button>

                <button onClick={this.acelerar}>Acelerar</button>

                <button onClick={this.desacelerar}>Desacelerar</button>
            </>
        )
    }

    componentDidMount () { //Posso chamar em qualquer lugar que ele só será chamdado depois do render
        console.log('O cara foi criado')
    }
    componentDidUpdate() { //É chamado sempre que atualizado  
        console.log('O cara foi atualizado')
    }
    componentWillUnmount() { //Quando ele não é mais renderizado na tela
        console.log('O carro foi removido')
    }

}