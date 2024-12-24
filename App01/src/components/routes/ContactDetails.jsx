import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ContactDetails(){
    const { id } = useParams()
    const navigate = useNavigate()

    const handleContact = () => {
        console.log('Mensagem enviada')
        return navigate('/')
    }

    return(
        <>
            <h2>
                Exibindo mais informações do contacto: {id}
                <button onClick={handleContact}>Enviar mensagem</button>
            </h2>
        </>
    )
}