import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import '../Jogo.css'
import { useEffect, useState } from "react";
import { fontSize } from "@mui/system";

export const Placar =({nomeJogador,vencedor}:any)=>{
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0)
    const isSmallScreen = useMediaQuery('(max-width:756px)');

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
        <Box>
            <Typography variant='h5' textAlign='center' style={{fontSize:isSmallScreen? '15px' : ''}}>
                Placar
            </Typography>
            <Box className='card' borderRadius={6}>
                <Box display='flex' justifyContent='space-between' paddingX={5} >
                    <Typography variant='h5' style={{fontSize:isSmallScreen? '12px' : ''}}>
                        <p>Nome</p>
                    </Typography>
                    <Typography variant='h5' style={{fontSize:isSmallScreen? '12px' : ''}} >
                        <p>Vitórias</p>
                    </Typography>
                </Box>
                <hr color="rgb(11, 0, 65)"/>
                <Box >
                    <Box display='flex' justifyContent='space-between'>
                        <Typography variant='h5' paddingX={1} style={{fontSize:isSmallScreen? '12px' : ''}} >
                            <p> {nomeJogador[0]} - X  </p>
                        </Typography>
                        <Typography variant='h5' paddingRight={2} style={{fontSize:isSmallScreen? '12px' : ''}}>
                            <p>pt {score1}</p>
                        </Typography>
                    </Box>
                    <hr color="rgb(11, 0, 65)" />
                    <Box display='flex' justifyContent='space-between'>
                        <Typography variant='h5'paddingX={1} style={{fontSize:isSmallScreen? '12px' : ''}}>
                            <p>{nomeJogador[1]} - O</p>
                        </Typography>
                        <Typography variant='h5' paddingRight={2} style={{fontSize:isSmallScreen? '12px' : ''}}>
                            <p>pt {score2}</p>
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </Box>
    
    )
}









