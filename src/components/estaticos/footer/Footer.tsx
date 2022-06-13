import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1.5} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos' >Entre em contacto </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            
                            <a href="angelaguacaran@gmail.com.com" target="_blank">
                                <EmailIcon className='redes' />
                            </a>
                            <a href="https://github.com/1575314" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/angela-daniela-guacaran-regalado-17805a1b8/" target="_blank">
                                <LinkedInIcon className="redes"/>
                            </a>
                            <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos2'>© 2022 Copyright:</Typography>
                        </Box>
                        </Box>

            
            
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;