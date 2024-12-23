import React from "react";


export default function Caixa(props) {
    return (
        <aritcle className={`m-6 pl-8 pr-3 pt-6 pb-4 flex flex-col border-solid border-[3px] border-black ${props.color} justify-between w-[270px] h-[305px] shadow-[6px_6px_0px_0px_black] `}>

            <section className="flex flex-col justify-start gap-4">
                <img className="w-12" src={props.piano} alt="" />
                <h2 className="text-2xl font-bold">
                    {props.titulo.charAt(0).toUpperCase() + props.titulo.slice(1)}
                </h2>
                <p>{props.text}</p>
            </section>

            {/* SVG */}
            {props.children}

        </aritcle>
    )
}