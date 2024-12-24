import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function LivrosDetails() {
    const { id } = useParams()
    const navigate = useNavigate()

    const retornarLivro = () => {
        switch (parseInt(id)) {
            case 1:
                return <h1>Bíblia</h1>

            case 2:
                navigate('/')

            case 3:
                return <h1>Revolução dos bichso</h1>

            default:
                return <h1>Nenhum</h1>

        }
    }

    console.log(id)

    return (
        <>
            {retornarLivro()

  
            }

        </>
    )
}