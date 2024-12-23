import React from "react";
import '../Calculadora.css'
import Resultado from "./Resultado";

export default class Calculadora extends React.Component {
    constructor(props) {
        super(props)
    }


    //COMPONENTES
    rtnTela = (valor, res) => {
        return (
            <div className="display">
                <span id="valor">
                    {valor}
                </span>
                <span id="res">
                    {res}
                </span>
            </div>
        )
    }

    btn = (label, onClick) => {
        return (
            <button className="button" onClick={onClick}>
                {label}
            </button>
        )
    }
    //FUNÇÕES

    addDigitoTela = (digito) => {
        const { setOperado, setValorDaTela, valorDaTela, resultado, operado } = this.props;


        if ((digito == '-' || digito == '*' || digito == '/' || digito == '+') && operado) {
            console.log('chora')
            setOperado(false)
            setValorDaTela(resultado + digito)
            return
        }
        if(operado) {
            setValorDaTela(digito),
            setOperado(false) 
            return
        }

        const valorDigitadoTela = valorDaTela + digito
        setValorDaTela(valorDigitadoTela)
    }

    operacao = (oper) => {
        const { setOperado, setValorDaTela, valorDaTela, setResultado, setAcumulador } = this.props;

        if(oper === 'bs'){
            let vtela = valorDaTela
            vtela = vtela.substring(0, (vtela.length-1))
            setValorDaTela(vtela)
            setOperado(false)
        }
        try {
            const res = eval(valorDaTela)
            setAcumulador(res)
            setResultado(res)
            setOperado(true)
        } catch {
            setResultado('ERRO')
        }

    }

    limparMemoria = () => {
        const {setOperado, setValorDaTela, setAcumulador, setResultado} = this.props
        setValorDaTela('')
        setResultado(0)
        setAcumulador(0)
        setOperado(false)

    }


    render() {
        return (
            <>
                <div className="conteiner">
                    <h3>Calculadora Matemática Simples</h3>
                    {this.rtnTela(this.props.valorDaTela, this.props.resultado)}
                    <div className="botoes">
                        {this.btn('AC', () => this.limparMemoria())}
                        {this.btn('(', () => this.addDigitoTela('('))}
                        {this.btn(')', () => this.addDigitoTela(')'))}
                        {this.btn('/', () => this.addDigitoTela('/'))}
                        {this.btn('7', () => this.addDigitoTela('7'))}
                        {this.btn('8', () => this.addDigitoTela('8'))}
                        {this.btn('9', () => this.addDigitoTela('9'))}
                        {this.btn('*', () => this.addDigitoTela('*'))}
                        {this.btn('4', () => this.addDigitoTela('4'))}
                        {this.btn('5', () => this.addDigitoTela('5'))}
                        {this.btn('6', () => this.addDigitoTela('6'))}
                        {this.btn('-', () => this.addDigitoTela('-'))}
                        {this.btn('1', () => this.addDigitoTela('1'))}
                        {this.btn('2', () => this.addDigitoTela('2'))}
                        {this.btn('3', () => this.addDigitoTela('3'))}
                        {this.btn('+', () => this.addDigitoTela('+'))}
                        {this.btn('0', () => this.addDigitoTela('0'))}
                        {this.btn('.', () => this.addDigitoTela('.'))}
                        {this.btn('<-', () => this.operacao('bs'))}
                        {this.btn('=', () => this.operacao('='))}

                    </div>

                </div>
            </>
        )
    }
}