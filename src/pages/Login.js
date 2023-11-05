import React, { useState } from 'react';
import { Button, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <Grid container className="page-container">
      <Grid item md={4} sm={6} xs={11} className="page-block">
        <span className="page-heading"> Login </span>
        <form className="mb-4" >
          <TextField variant="standard" margin="normal" fullWidth
            label="Email Address" name="email" autoFocus />
          <TextField variant="standard" margin="normal"
            label="Password*" type={passwordVisibility ? "text" : "password"} fullWidth name="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" tabIndex="-1"
                    onClick={e => setPasswordVisibility(!passwordVisibility)} >
                    {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" > Log in </Button>

        </form>
      </Grid>
    </Grid>)
}

export default Login;