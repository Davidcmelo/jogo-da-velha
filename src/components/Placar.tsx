import { Box, Button, Typography } from "@mui/material"
import '../Jogo.css'
import { useEffect, useState } from "react";

export const Placar =({nomeJogador,vencedor}:any)=>{
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0)

   function count(){
        if(vencedor === 'X'  ){
         setScore1(score1 + 1);
        }else if( vencedor === 'O'){
            setScore2(score2 + 1);
            console.log(score2)
        }
    }
    useEffect(() => {
        count();
      }, [vencedor]);
    
    return(
        <>
        <Typography variant='h5' textAlign='center'>
            Placar
        </Typography>
        <Box className='card' borderRadius={6}>
            <Box display='flex' justifyContent='space-between' paddingX={5}>
                <Typography variant='h5' >
                    <p>Nome</p>
                </Typography>
                <Typography variant='h5'>
                    <p>Vitórias</p>
                </Typography>
            </Box>
            <hr color="rgb(11, 0, 65)"/>
            <Box >
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='h5' paddingX={1} >
                        <p> {nomeJogador[0]} - X  </p>
                    </Typography>
                    <Typography variant='h5' paddingRight={2}>
                        <p>pt {score1}</p>
                    </Typography>
                </Box>
                <hr color="rgb(11, 0, 65)" />
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='h5'paddingX={1}>
                        <p>{nomeJogador[1]} - O</p>
                    </Typography>
                    <Typography variant='h5' paddingRight={2}>
                        <p>pt {score2}</p>
                    </Typography>
                </Box>

            </Box>
        </Box>
        </>
    
    )
}









