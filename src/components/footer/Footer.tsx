import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
    return (
        <Container maxWidth={false} style={{ padding: '20px 0', backgroundColor: '#eeeaea' }}>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Typography style={{ color: '#fff', textAlign: 'center' }}>
                        <Link href="https://www.linkedin.com/in/or-sasson-308345229/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077B5', fontSize: '24px', marginRight: '20px' }}>
                            <LinkedIn style={{ fontSize: '36px' }} /> 
                        </Link>
                        <Link href="https://github.com/orsasson12" target="_blank" rel="noopener noreferrer" style={{ color: '#333', fontSize: '24px' }}>
                            <GitHub style={{ fontSize: '36px' }} /> 
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
            <Typography style={{ color: 'black', textAlign: 'center', paddingTop: '10px' }}>
                Copyright &copy; {new Date().getFullYear()} Uzi  Or  Sasson 
            </Typography>
        </Container>
    );
};

export default Footer;