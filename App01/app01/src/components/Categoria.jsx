import React from "react";
import '../Tabela.css'

export default class Categoria extends React.Component {
    constructor(props) {
        super(props)

    }
    retornarLinhas = (cat) => {
        const linha = this.props.carros.map(
            (carro, indice, arrayBase) => {

                if (cat.toUpperCase() === carro.categoria.toUpperCase() || cat === '') {
                    return (
                        <tr key={indice}>
                            <td>{carro.categoria}</td>
                            <td>{carro.preco}</td>
                            <td>{carro.modelo}</td>
                        </tr>
                    )
                }
            }
        )

        return linha
    }

    retornarTabela = (cat) => {
        return (
            <table border={'1px solid black'}>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Preço</th>
                        <th>Modelo</th>
                    </tr>
                </thead>
                <tbody>

                    {this.retornarLinhas(cat)}

                </tbody>

            </table>
        )
    }


    render() {
        return (
            <>


                {this.retornarTabela(this.props.categoria)}
                <label htmlFor="categoria">Pesquise a categoria</label>
                <input type="text" name="icategoria" id="categoria" onChange={(e) => this.props.setCategoria(e.target.value)} />

            </>
        )
    }
}