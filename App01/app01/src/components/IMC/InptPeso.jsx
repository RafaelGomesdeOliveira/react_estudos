import React from "react";

export default class InptPeso extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <label htmlFor="altura">Informe o seu peso:</label>
                <input type="number" name="ialtura" id="altura" value={this.props.peso} onChange={(e) => this.props.setPeso(e.target.value)} />
            </>
        )
    }
}