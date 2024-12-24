import React from "react";
import InptAltura from "./IMC/InptAltura";
import Tabela from "./IMC/Tabela";
import InptPeso from "./IMC/InptPeso";
import InptButton from "./IMC/InptButton";


export default class IMC extends React.Component {
    constructor(props) {
        super(props)

    }




    render() {
        return (
            <>

                <InptPeso
                    peso={this.props.peso}
                    setPeso={this.props.setPeso}
                />

                <InptAltura
                    altura={this.props.altura}
                    setAltura={this.props.setAltura}
                />

                <InptButton
                    peso={this.props.peso}
                    altura={this.props.altura}
                />

                <Tabela />

            </>
        )
    }

}

{
    /*
        const { peso, altura } = this.props;
    */

}