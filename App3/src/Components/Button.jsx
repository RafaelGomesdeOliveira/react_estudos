import React from "react";

export default function Button(props) {
    return (
        <button className="flex flex-row justify-center items-center bg-orange-600 border-solid border-[3px] border-black text-lg shadow-[5px_5px_0px_0px_black] w-[199px] h-[51px] font-bold">
            {props.text.toUpperCase()}
        </button>
    )
}