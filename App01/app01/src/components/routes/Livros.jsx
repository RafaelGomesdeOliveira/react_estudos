import React from "react";
import { Link, Outlet} from "react-router-dom";

export default class Livros extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
            <p>
                <Link to='/livros/1'>Bíblia</Link>
            </p>
            <p>
                <Link to='/livros/2'>Hábitos Atômicos</Link>
            </p>
            <p>
                <Link to='/livros/3'>Revoluão dos Bichos</Link>
            </p>

            </>
        )
    }
}