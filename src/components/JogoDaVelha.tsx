import { Box, Button, TextField,Typography } from '@mui/material';
import {  useState } from 'react';
import '../Jogo.css'
import '@fontsource/roboto';
import { Placar } from './Placar';

export const JogoDaVelha=({setIniciado,nomeJogador}:any) =>{
    const [jogadorDaVez, setJogadorDaVez] = useState('X');
    const [meuArray,setMeuArray]=useState(Array(9).fill(''));
    const [clicked, setClicked] = useState<boolean[]>(Array(9).fill(false));
    const [vencedor, setVencedor]= useState<string | null>(null);
    const [jogoFinalizado, setJogoFinalizado] = useState(false);
    const exibirInformacoes =vencedor === null
    const [combinacoesVencedoras, setCombinacoesVencedoras] = useState<any[]>([]);

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
        <Box  display='flex' flexDirection='column' justifyContent='center' height='98vh' alignItems='center' color='white' >
            <Box marginBottom={3}>
                <Typography variant="h5" fontSize='2.5rem' >
                    Jogo da Velha
                </Typography>
            </Box>
            <Box className='box' border='2px solid' height={500} width={500} display='flex' flexDirection='column' justifyContent='center' alignItems='center' borderRadius={5} flexWrap='wrap'>
                <Box className='caixa'>
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
                            style: { backgroundColor: combinacoesVencedoras.includes(index) ? 'green' : 'rgb(52, 64, 114)', fontSize:'80px',
                            }
                        }}
                    />
                    ))}
                </Box>
                <div className='score'>
                    <Placar nomeJogador={nomeJogador} vencedor={vencedor} />
                </div>
            </Box>

            <Box paddingTop={7} >
                <Button variant="contained"  color="success" onClick={resetJogo} style={{fontSize:'1.75rem'}}>
                    Resetar Jogo
                </Button>
                <Button
                    onClick={()=>setIniciado(false)}
                    variant="contained"
                    color="success"
                    style={ {marginLeft: '10px',fontSize:'1.75rem'} }
                >Começar Novo Jogo
                </Button>
                <Box>
                    <Typography fontSize='2rem' textAlign='center'>
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
    );
};


