import React from "react";


export default class ApiCarros extends React.Component {
    constructor(props) {
        super(props)

    }
    

    render() {
        return(
            <div>
                <h2>API  de Carros</h2>
                {this.props.car.map(
                    (carro, indice, arrayBase) => (
                        <div key={carro.id}>{`ID: ${carro.id} - ${carro.modelo} - ${carro.marca} - ${carro.ano}`}</div>
                    )    
                )}
            </div>
        ) 
    }



}