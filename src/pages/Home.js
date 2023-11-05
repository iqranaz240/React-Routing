import { Grid } from '@mui/material';
import React, { useState } from 'react';

const Home = () => {

  const [name, setName] = useState("Romik Makavana");

  return (
    <Grid container className="page-container">
      <Grid item md={4} sm={6} xs={11} className="page-block">
        <p className="page-heading">
          Welcome
          <br />
          <span>{name}...</span>
        </p>
      </Grid>
    </Grid>)

}

export default Home;