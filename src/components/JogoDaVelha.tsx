import { Box, Button, TextField,Typography, useMediaQuery } from '@mui/material';
import {  useState } from 'react';
import '../Jogo.css'
import '@fontsource/roboto';
import { Placar } from './Placar';
import { display } from '@mui/system';

export const JogoDaVelha=({setIniciado,nomeJogador}:any) =>{
    const [jogadorDaVez, setJogadorDaVez] = useState('X');
    const [meuArray,setMeuArray]=useState(Array(9).fill(''));
    const [clicked, setClicked] = useState<boolean[]>(Array(9).fill(false));
    const [vencedor, setVencedor]= useState<string | null>(null);
    const [jogoFinalizado, setJogoFinalizado] = useState(false);
    const exibirInformacoes =vencedor === null
    const [combinacoesVencedoras, setCombinacoesVencedoras] = useState<any[]>([]);
    const isSmallScreen = useMediaQuery('(max-width:756px)');

    const checkVencedor = (meuArray: string[]) =>  {
        const combinacoes = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]  
        ];
        
        for (let i = 0; i < combinacoes.length; i++) {
            const [a, b, c] = combinacoes[i];
            if (meuArray[a] !== '' && meuArray[a] === meuArray[b] && meuArray[b] === meuArray[c]) {
                setVencedor(meuArray[a]);
                setJogoFinalizado(true);
                const combinacoesVencedoras=combinacoes[i]
                setCombinacoesVencedoras(combinacoesVencedoras)
                return ;
            } 
        }
    }

    const handleClick = (index:number) => {      
 
        meuArray[index] = jogadorDaVez 
        setJogadorDaVez (jogadorDaVez === 'X' ?'O':'X')
        setMeuArray(meuArray)

        clicked[index] = true;
        setClicked(clicked);
        
        if (vencedor !== null || meuArray[index] !== '') {
            checkVencedor(meuArray);  
        }
        if(jogadorDaVez === 'X'){
            nomeJogador[0]
        }
        if(jogadorDaVez === 'O'){
            nomeJogador[1]
        }
    }

    function resetJogo () {
        setJogadorDaVez('X');
        setMeuArray(Array(9).fill(''));
        setClicked(Array(9).fill(false));
        setVencedor(null);
        setJogoFinalizado(false)
        setCombinacoesVencedoras([])
    };
    
    return (
        <Box className='tudo' display='flex' flexDirection='row' justifyContent='center'  alignItems='center' color='white' style={{flexDirection:isSmallScreen? 'column': 'row'}} >
           
            <Box className="aloooooo">
            <Box marginBottom={3}>
                <Typography variant="h5" textAlign={'center'} style={{fontSize:isSmallScreen ? '2rem' : '3rem'}}>
                    Jogo da Velha
                </Typography>
            </Box >
                <Box className='borda' border='2px solid'   display='flex' flexDirection='column' justifyContent='center' alignItems='center' borderRadius={5} flexWrap='wrap' style={{height:isSmallScreen? '300px' : '500px', width:isSmallScreen? '300px' : '500px'}}  >
                    <Box className='caixa' style={{height:isSmallScreen? '261px': '', width:isSmallScreen? '300px': '', }}>
                        {meuArray.map((value,index) =>(
                        <TextField
                            type='button'
                            key={index}
                            value={value}
                            onClick={() => handleClick(index)}
                            disabled={clicked[index] || jogoFinalizado }
                            sx={{
                                "& .MuiInputBase-input.Mui-disabled": {
                                WebkitTextFillColor: "white",
                            },
                            }}
                            InputProps={{
                                style: { backgroundColor: combinacoesVencedoras.includes(index) ? 'green' : 'rgb(52, 64, 114)',
                                fontSize:isSmallScreen? '40px': '80px',
                                }
                            }}
                        />
                        ))}
                    </Box>

                </Box>
                <Box paddingTop={2} style={{display:isSmallScreen? 'flex' : 'flex', flexDirection:isSmallScreen? 'column' : 'column', alignItems:isSmallScreen? 'center' : 'center' }}  >
                    <Button variant="contained"  color="success" onClick={resetJogo} style={{fontSize:isSmallScreen ? '1rem' : '1.75rem', display:'flex', alignItems:isSmallScreen?'center': 'center', marginBottom:isSmallScreen? '10px' : '10px'}}>
                        Resetar Jogo
                    </Button>
                    <Button
                        onClick={()=>setIniciado(false)}
                        variant="contained"
                        color="success"
                        style={ {marginLeft: '10px', fontSize:isSmallScreen ? '1rem' : '1.75rem', display:'flex', alignItems:'center' } }
                    >Começar Novo Jogo
                    </Button>
                    <Box>
                        <Typography fontSize='1.5rem' textAlign='center'>
                            {exibirInformacoes ? (
                                <p>
                                    {jogadorDaVez === 'X' ? `Jogador da vez: ${nomeJogador[0]}` : ''}
                                    {jogadorDaVez === 'O' ? `Jogador da vez: ${nomeJogador[1]}` : ''}
                                </p>
                                ) : (
                                <p>
                                    {vencedor === 'X' ? `O jogador ${nomeJogador[0]} venceu!` : ''}
                                    {vencedor === 'O' ? `O jogador ${nomeJogador[1]} venceu!` : ''}
                                </p>
                            )}
                        </Typography>
                    </Box>

                </Box>
            </Box>
            <Box className="fundao" style={{paddingLeft:isSmallScreen? '0' : '30px'}}>
                <Box className='score' >
                    <Placar nomeJogador={nomeJogador} vencedor={vencedor} />
                </Box>
            </Box>
        </Box>
    );
};


