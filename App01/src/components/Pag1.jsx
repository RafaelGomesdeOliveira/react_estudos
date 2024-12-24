import React from "react";
export default class Pag1 extends React.Component {
    constructor(props) {
        super(props)

        this.num = 1
    }

    componentDidMount() {
        console.log('O componente foi montadado')
    }

    render(){
        return(
            <>
                <h1>Página {this.num}</h1>
                <h3>Estamos fazendo uma paginação</h3>
            </>
        )
    }



}