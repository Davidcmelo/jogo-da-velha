import React, { useState } from 'react'
import {JogoDaVelha}  from "./components/JogoDaVelha"
import { Tela } from './components/Tela'
import { Placar } from './components/Placar';


export default function App() {
    const [iniciado, setIniciado] = useState(false);
    const [nomeJogador, setNomeJogador] = useState(Array(2).fill(''));

    function iniciarPartida() {
        setIniciado(true);
    }

    return (
        <div>
            {iniciado ? (
                <JogoDaVelha setIniciado={setIniciado} nomeJogador={nomeJogador} setNomeJogador={setNomeJogador} />
            ) : 
            (
                <Tela play={iniciarPartida} nomeJogador={nomeJogador} setNomeJogador={setNomeJogador}/>
            )}
        </div>
    );
}


