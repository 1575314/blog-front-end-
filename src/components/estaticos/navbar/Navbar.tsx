import React from "react";
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import "./Navbar.css";
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useLocalStorage from "react-use-localstorage";
function Navbar (){
    const [token, setToken]= useLocalStorage('token');
    let history = useHistory();

    function goLogout(){
        setToken('')
        alert('Usuário deslogado')
        history.push("/login")
    }
    return(
        <>
        
        <AppBar position="static" className="cordefundo" >
                <Toolbar variant="dense" className="layout">
                    <Box className="cursor" >
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to= 'home'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        </Link>
                        <Link  to = '/postagem' className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>



                        
                        </Link>
                        <Link  to = '/temas' className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link  to = '/formularioTema' className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        </Link>
                        
                        <Box mx={1} className="cursor" onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                        
                    </Box>

                </Toolbar>
            </AppBar>
            </>
    )
}

export default Navbar;