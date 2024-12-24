import React from "react";
import '../JogoDaVelha.css'

export default function JogoDaVelha(props) {
    let pontos = 0
    let vitoria = 0

    const { arrJogo, setArrJogo, jogando, setJogando, simbolo, setSimbolo } = props;

    const jogoInicial = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    const trocaJogador = () => {
        simbolo == 'X' ? setSimbolo('O') : setSimbolo('X')
    }

    const retPosicao = (e) => {
        const valueDataPos = e.target.getAttribute('data-pos')
        const possicao = [ //array de dois números
            parseInt(valueDataPos.substring(0, 1)),
            parseInt(valueDataPos.substring(1, 2))

        ]
        console.log(possicao)
        return possicao // = [0,0] 0:0 , 1:0
    }

    const verificarEspaco = (e) => {
        if (arrJogo[retPosicao(e)[0]][retPosicao(e)[1]] == '') {
            return true
        }
        else {
            return false
        }
    }

    const jogar = (e) => {
        if (jogando) {


            if (verificarVitoria()) {
                arrJogo[retPosicao(e)[0]][retPosicao(e)[1]] = simbolo

                alert(`O jogado do simbolo: ${simbolo} ganhou o jogo`)
                setJogando(false)
                return
            }
            if (verificarEspaco(e)) {
                arrJogo[retPosicao(e)[0]][retPosicao(e)[1]] = simbolo
                trocaJogador()
            } else {
                alert(`O espaço ${retPosicao(e)} já está prenchido com ${arrJogo[retPosicao(e)[0]][retPosicao(e)[1]]}`)

            }
        }
    }

    const reiniciar = () => {
        setJogando(true)
        setArrJogo(jogoInicial)

    }
    const verificarPontos = (pontos) => {
        if (pontos >= 3) {
            vitoria = true
            return (<button onClick={() => reiniciar()}>Reiniciar</button>)
        }
    }

    const verificarVitoria = () => {
        pontos = 0
        vitoria = 0

        for (let l = 0; l < arrJogo.length; l++) {
            pontos = 0
            
            for (let c = 0; c < arrJogo[l].length; c++) {

                if (arrJogo[l][c] == props.simbolo) {
                    pontos++
                }
            }

            verificarPontos(pontos)

        }

        for (let l = 0; l < arrJogo.length; l++) {
            pontos = 0

            for (let c = 0; c < arrJogo[l].length; c++) {
                if (arrJogo[c][l] == props.simbolo) {
                    pontos++
                }
            }
            verificarPontos(pontos)
        }

        for (let i = 0; i < arrJogo.length; i++) {
            if (arrJogo[i][i] == props.simbolo) {
                pontos++
            }
            verificarPontos(pontos)

        }
        let l = 0
        for (let i = 0; i < arrJogo.length; i++) {


            console.log('Aquiii: ' + arrJogo[i][arrJogo.length - 1 - i])
            if (arrJogo[i][arrJogo.length - 1 - i] == props.simbolo) {
                pontos++
            }
            l++
            verificarPontos(pontos)
        }
        return vitoria
    }


    const tabuleiro = () => {
        return (
            <>
                <div className="tabu">
                    <div className="tabuLinha">
                        <div className="casa" data-pos='00' onClick={(e) => jogar(e)}>
                            {arrJogo[0][0]}
                        </div>
                        <div className="casa" data-pos='01' onClick={(e) => jogar(e)}>
                            {arrJogo[0][1]}
                        </div>
                        <div className="casa" data-pos='02' onClick={(e) => jogar(e)}>
                            {arrJogo[0][2]}
                        </div>
                    </div>

                    <div className="tabuLinha">
                        <div className="casa" data-pos='10' onClick={(e) => jogar(e)}>
                            {arrJogo[1][0]}
                        </div>
                        <div className="casa" data-pos='11' onClick={(e) => jogar(e)}>
                            {arrJogo[1][1]}
                        </div>
                        <div className="casa" data-pos='12' onClick={(e) => jogar(e)}>
                            {arrJogo[1][2]}
                        </div>
                    </div>

                    <div className="tabuLinha">
                        <div className="casa" data-pos='20' onClick={(e) => jogar(e)}>
                            {arrJogo[2][0]}
                        </div>
                        <div className="casa" data-pos='21' onClick={(e) => jogar(e)}>
                            {arrJogo[2][1]}
                        </div>
                        <div className="casa" data-pos='22' onClick={(e) => jogar(e)}>
                            {arrJogo[2][2]}
                        </div>
                    </div>


                </div>
            </>
        )
    }



    return (
        <>
            <div>
                <p>Quem joga: {simbolo}</p>
            </div>

            <div>{tabuleiro()}</div>



        </>
    )
}