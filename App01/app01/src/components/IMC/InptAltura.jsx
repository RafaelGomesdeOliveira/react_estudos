import React from "react";

export default class InptAltura extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <label htmlFor="altura">Informe a sua altura:</label>
                <input type="number" name="ialtura" id="altura" value={this.props.altura} onChange={(e) => this.props.setAltura(e.target.value)} />
            </>
        )
    }
}