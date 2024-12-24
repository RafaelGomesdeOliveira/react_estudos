import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

/*COMPONENT's*/
import Header from './components/Header';
import Corpo from "./components/Corpo";
import Numero from "./components/Numero";
import Pessoa from "./components/Pessoa";
import Led from "./components/Led";
import Log from "./components/Log";
import Form from "./components/Form";
import Nota from "./components/Nota";
import Resultado from "./components/Resultado";
import Caixa from "./components/Caixa";
import LocalStorage from "./components/LocalStorage";
import Classe from "./components/Classe";
import Carro from "./components/Carro";
import BaseClass from "./components/BaseClasse";
import Globais from "./components/Globais";
import Categoria from "./components/Categoria";
import IMC from "./components/IMC";
import Calculadora from "./components/Calculadora";
import JogoDaVelha from "./components/JogoDaVelha";
import ApiCarros from "./components/ApiCarros";
import Pag1 from "./components/Pag1";
import Pag2 from "./components/Pag2";
import Pag3 from "./components/Pag3";
import Navbar from "./components/Navbar";

import './App.css'

/*IMG's*/

export default function App() {
  let hora = new Date().getHours()

  const cores = {
    vermelho: { color: '#f00' },
    verde: { color: '#0f0' },
    azul: { color: '#00f' },
  }

  //useState's
  const [storage, setStorage] = useState('')
  const [notas, setNotas] = useState({ nota1: 0, nota2: 0, nota3: 0, nota4: 0 })
  const [form, setForm] = useState({ 'nome': '', 'curso': '', 'ano': '' })
  const [cor, setCor] = useState(1)
  const [log, setLog] = useState(false)
  const [estadoLed, setEstadoLed] = useState(false) //False = led vermelho
  const [num, setNum] = useState(1)
  const [nome, setNome] = useState('Tiago')
  const [carro, setCarro] = useState(true)
  const [texto, setTexto] = useState(Globais.texto)
  const [categoria, setCategoria] = useState('')
  const [altura, setAltura] = useState()
  const [peso, setPeso] = useState()
  const [valorDaTela, setValorDaTela] = useState('')
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operado, setOperado] = useState(false)
  const [arrJogo, setArrJogo] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ])
  const [simbolo, setSimbolo] = useState('X')
  const [jogando, setJogando] = useState(true)
  const [car, setCar] = useState([])

  const carros = [ // É um array
    { categoria: "Esporte", preco: "110.000,00", modelo: "Golf GTI" },
    { categoria: "Esporte", preco: "120.000,00", modelo: "Camaro" },
    { categoria: "SUV", preco: "85.000,00", modelo: "HRV" },
    { categoria: "SUV", preco: "83.000,00", modelo: "T-Cross" },
    { categoria: "Utilitario", preco: "120.000,00", modelo: "Hilux" },
    { categoria: "Utilitario", preco: "90.000,00", modelo: "Ranger" },
    { categoria: "Utilitario", preco: "1.100.000,00", modelo: "Lamborguini" },
  ];

  useEffect(
    () => {

      fetch('https://6f7500fe-b430-4f40-9cff-6311a650d9ac-00-1rne4vij3m4z4.worf.replit.dev/')
        .then((res) => res.json())
        .then((resultado) => {
          setCar(resultado)
        }).catch('Deu erro')

      // axios.get('https://6f7500fe-b430-4f40-9cff-6311a650d9ac-00-1rne4vij3m4z4.worf.replit.dev/')
      //   .then((resposta) => {
      //     const dados = resposta.data
      //     setCar(dados)
      //   }) 

      console.log('ATUALIZEIIIIIIIIIIIIIIIIIIIIIIIIIII')
    },
    []
  )

  // 1 - Use effect, roda a cada renderização
  useEffect(
    () => {
      document.title = `Contador: ${num}`
    }
  )

  // 2 - Array de dependẽncias - Executa sempre que um dado for alterado
  useEffect(() => {
    console.log(`Só roda quando cor é alterado`)
  }, [cor])

  // 3 - Array de dependências vázios - Só executa uma vez
  useEffect(() => {
    console.log(`Só roda UMA vez`)
  }, [])
  // 4 - Clean up function 
  useEffect(() => {

    const time = setTimeout(() => {
      console.log(`O incrementador foi alterado ${num} vezes`)
    }, 2000);

    return () => {
      console.log('Apaguei')
      clearTimeout(time)
    }
  }, [num])

  const handleChangeNota = (e, num) => {
    const valor = e.target.value

    if (valor === '' || isNaN(valor)) {
      setNotas((notasAnteriores) => (
        { ...notasAnteriores, [`nota${num}`]: 0 }
      ))
    } else {
      setNotas((notasAnteriores) => (
        { ...notasAnteriores, [`nota${num}`]: parseFloat(valor) }
      ))

    }
  }

  const gravarGlobal = () => {
    Globais.texto = texto
  }

  const lerGlobal = () => {
    alert(Globais.texto)
  }

  const array_num = [1,2,3,4,5,6,7,8,9,0]

  const percorrerArrayNum = () => {
    const lista = array_num.map(
      (valor, indice)=>(
        <li key={indice.toString()}>{valor}</li>
      )
    )
    return lista
  }

  return (
    <>
      <Header
        cor={cor}
        setCor={setCor}
        cores={cores}
      />

      <div className="bloco">
        <ul>
          {percorrerArrayNum()}
        </ul>
      </div>

      <div className="bloco">
        <Navbar></Navbar>
        <Outlet />
      </div>

      <div className="bloco">
        <ApiCarros
          car={car}
          setCar={setCar}
        />
      </div>

      <div className="bloco">
        <JogoDaVelha
          arrJogo={arrJogo}
          setArrJogo={setArrJogo}
          jogando={jogando}
          setJogando={setJogando}

          simbolo={simbolo}
          setSimbolo={setSimbolo}
        />
      </div>

      <Calculadora
        resultado={resultado}
        setResultado={setResultado}
        valorDaTela={valorDaTela}
        setValorDaTela={setValorDaTela}
        acumulador={acumulador}
        setAcumulador={setAcumulador}
        operado={operado}
        setOperado={setOperado}
      />


      <div className="bloco">
        <IMC
          peso={peso}
          altura={altura}
          setPeso={setPeso}
          setAltura={setAltura}
        >
        </IMC>
      </div>

      <div className="bloco">
        <Categoria
          categoria={categoria}
          setCategoria={setCategoria}
          carros={carros}
        />
      </div>

      <div className="bloco">
        <p>Nome: {Globais.nome}</p>
        <p>Curso: {Globais.curso}</p>
        <p>Ano: {Globais.ano}</p>
        <p>Texto: {texto}</p>
        <input onChange={(e) => setTexto(e.target.value)} value={texto} type="text" name="itexto" id="texto" />
        <button onClick={() => gravarGlobal()}>Gravar na variável global</button>
        <button onClick={() => lerGlobal()}>Ler a variavel global</button>
      </div>

      <div className="bloco">
        <BaseClass usuario='Rafael' />
      </div>

      <div className="bloco">
        {carro ? <Carro fator={2} /> : ''}
        <button onClick={() => setCarro(!carro)}>Ocultar</button>
      </div>

      <div className="bloco">
        <Classe
          pessoa='Rafael'
          curso='React'
        />

      </div>

      <div className="bloco">
        <LocalStorage
          storage={storage}
          setStorage={setStorage}
        />

      </div>

      <div className="bloco">
        <Caixa>
          <p><strong>P que eu tô passando para o array children da caixa</strong></p>
          <a href="#">Chora papai</a>
          <Led
            estadoLed={estadoLed}
            setEstadoLed={setEstadoLed}
          />

        </Caixa>

      </div>

      <div className="bloco">
        <Nota
          num={1}
          nota={notas.nota1}
          alterarNota={handleChangeNota}
        />
        <Nota
          num={2}
          nota={notas.nota2}
          alterarNota={handleChangeNota}
        />
        <Nota
          num={3}
          nota={notas.nota3}
          alterarNota={handleChangeNota}
        />
        <Nota
          num={4}
          nota={notas.nota4}
          alterarNota={handleChangeNota}
        />
      </div>


      <Resultado
        sumNota={parseFloat(notas.nota1) + parseFloat(notas.nota2) + parseFloat(notas.nota3) + parseFloat(notas.nota4)}

      />


      <p>O valor de num no APP: {num}</p>
      <Numero
        num={num}
        setNum={setNum}
      />

      <Pessoa
        nome={nome}
        setNome={setNome}
      />
      <div className="bloco">

        <Led
          estadoLed={estadoLed}
          setEstadoLed={setEstadoLed}
        />
      </div>



      <Log
        log={log}
        setLog={setLog}
        hora={hora}
      />

      <Corpo />

      <Form
        form={form}
        setForm={setForm}
      />

    </>
  )

}

