import React from "react";
import {Box, Button, TextField} from "@mui/material"

const Forgot=()=>
{
      return (
        <>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off" className="register">

            <Box className="header_title">Forgot</Box>     

            <Box className="signUp">  

           <TextField
           type="password"
           required
           id="Password"
           variant="standard"
           label="Old Pass"
        />

         <TextField
          type="password"
          required
           variant="standard"
          id="password"
          label="Enter new Password"
        />
            
         <Box className="forgot_password">
            <Box className="forgot">Forgot Password</Box>
         </Box>
          
          <Button className="primary_button">Register</Button>
            
         <Box className="account">
            <Box>Already an account</Box>
            <Box className="forgot">Login</Box>
         </Box>

          </Box> 
        
        </Box> 
        </>
      )
}

export default Forgot;