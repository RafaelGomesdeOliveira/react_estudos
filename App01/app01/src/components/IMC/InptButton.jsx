import React from "react";

export default class InptButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imc: null,
        };
    }
    
    calcularIMC = () => {
        const { peso, altura } = this.props;
        
        if (peso !== undefined && altura !== undefined) {
            const imc = (parseFloat(peso) / (parseFloat(altura) ** 2)).toFixed(2);
            this.setState({ imc });  // Atualizar o estado com o valor calculado
        }
    }

    render() {
        return (
            <>
                <button onClick={this.calcularIMC}>Calcular</button>
                <div className="res">{this.state.imc === null ? 'Não tem resultado' : `IMC: ${this.state.imc}`}</div>

            </>
        );
    }
}
