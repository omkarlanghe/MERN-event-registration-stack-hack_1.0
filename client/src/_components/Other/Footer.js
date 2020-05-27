import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
export const Copyright = ()=> {
    return (
        <Box pt={4}>
        
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          StackHack 1.0 By Pallavi Vetal & Omkar Langhe
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
     
      </Box>
    );
  }