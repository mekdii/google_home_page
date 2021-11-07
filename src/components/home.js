import logo from '../asset/logo.jpg';
import { Grid } from '@material-ui/core';
import { useState } from 'react';
import {  TextField, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
function Home(){
    const [userInput, setUserInput] = useState('')

    const inputchangehandler = (event) => {
        setUserInput(event.target.value)
       
    }
    

    return (
    <div>

         {!userInput?
         <Box m={2} pt={4}>
        <Grid container justifyContent="center"  sx={{ pt: 2 }}>
            
                   <img src={logo} height="150" width="400" align="center" alt= "logo"/>
            
                 </Grid>
                 </Box>:
                 
                <Grid container justifyContent="center">
                 <h1>{userInput}</h1>
                 </Grid>
                 
                 }

  

  <Grid container justifyContent="center">
               <TextField
                onChange={inputchangehandler} 
                value = {userInput}
               
                id="standard-bare"
                variant="outlined"
                defaultValue="search google "
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />
              </Grid>
        
        
        </div>
    )
    
}
export default Home;