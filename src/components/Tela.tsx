import { Box, Button, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import '../Jogo.css'

import { useState } from "react";
import { JogoDaVelha } from "./JogoDaVelha";
import App from "../App";


export const Tela = ({play, nomeJogador, setNomeJogador}:any) => {

    const handleChange=(event:any,index:number ) => {
        nomeJogador[index]=event.target.value;
        const newNomeJogador = [...nomeJogador];
        setNomeJogador(newNomeJogador);
        console.log(nomeJogador)
    }

    //FUNÇÃO PRA DAR PLAY
    function playGame(event:any): void {
        event.preventDefault();
        play();
    }

    return(
        <Box className="vida" display='flex' flexDirection='column' justifyContent='center' height='98vh' alignItems='center' >
                <Typography fontSize='3rem'>
                    <p>Digite o nome dos jogadores</p>
                </Typography>
            <Box>
                {nomeJogador.map(( value:any,index:any) =>(
                    <TextField
                        onChange={(event)=> handleChange(event,index)}
                        key={index}
                        value={nomeJogador[index]}
                        InputProps={{
                            style: { backgroundColor: 'white', marginRight:'10px', borderRadius:'10px',fontSize:'2rem', marginBottom:'40px'
                        }
                        }}
                    />
                ))}
            </Box>
    
            <Button variant="contained" color="success" style={{fontSize:'1.75rem', display:'flex', alignItems:'center' }} onClick={playGame} endIcon={<SendIcon />}>
                Iniciar Partida
            </Button>
        </Box>
    )
};
