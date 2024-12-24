import React from "react";


export default function Form(props) {

    const handleFormChange = (e) => {
        if(e.target.getAttribute('id') == 'nome'){
            return props.setForm({'nome': e.target.value, 'curso': props.form.curso, 'ano': props.form.ano})
        } else if(e.target.getAttribute('id') == 'curso'){
            return props.setForm({'nome': props.form.nome, 'curso': e.target.value, 'ano': props.form.ano})
        } else if(e.target.getAttribute('id') == 'ano'){
            return props.setForm({'nome': props.form.nome, 'curso': props.form.curso, 'ano': e.target.value})
        }
    }

    return (
        <>
            <div className="bloco">
                <label htmlFor="nome">
                    Digite seu nome
                </label>
                <input type="text" name="fnome" id="nome" onChange={(e)=> handleFormChange(e)}/>
                <br/>
                <label htmlFor="nome">
                    Digite o curso desejado
                </label>
                <input type="text" name="fcurso" id="curso" onChange={(e)=> handleFormChange(e)}/>
                <br/>
                <label htmlFor="nome">
                    Digite o ano que deseja fazer
                </label>
                <input type="number" min={'2024'} name="fano" id="ano" onChange={(e)=> handleFormChange(e)}/>
                <p>Nome: {props.form.nome}</p>
                <p>Curso: {props.form.curso}</p>
                <p>Ano: {props.form.ano}</p>
            </div>
            
        </>
    )
}