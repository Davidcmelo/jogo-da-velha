import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import '../Jogo.css'

export const Tela = ({play, nomeJogador, setNomeJogador}:any) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

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
        <Box className="vida" display='flex' flexDirection='column' justifyContent='center'  alignItems='center' style={{height:isSmallScreen ? '80vh' : '97vh'}}>
                <Typography fontSize='3rem' style={{fontSize:isSmallScreen ? '1.95rem' : '3rem'}}>
                    <p>Digite o nome dos jogadores</p>
                </Typography>
            <Box style={{display: isSmallScreen? 'flex' : '', flexDirection: isSmallScreen? 'column':'row'}}> 
                {nomeJogador.map(( value:any,index:any) =>(
                    <TextField
                        onChange={(event)=> handleChange(event,index)}
                        key={index}
                        value={nomeJogador[index]}
                        InputProps={{
                            style: { backgroundColor: 'white', marginRight:'10px', borderRadius:'10px',fontSize:'2rem', marginBottom:'40px', width: isSmallScreen ? '280px' : '360px', height: isSmallScreen ? '60px' : '79px'
                        }
                        }}
                    />
                ))}
            </Box>
    
            <Button variant="contained" color="success" style={{fontSize: isSmallScreen ? '1rem' : '1.75rem', display:'flex', alignItems:'center' }} onClick={playGame} endIcon={<SendIcon />}>
                Iniciar Partida
            </Button>
        </Box>
    )
};


