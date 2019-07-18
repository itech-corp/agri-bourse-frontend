import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CustumCard from '../card/card';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    content:{
       ///display:'inline-block'
    },
    till:{
      
    }
}));

export default function CardContainer(props){
    const classes = useStyles();
    return(
        <div style={{ display:'inline-block' }}>
            <Grid  className={classes.content} container>
                <Grid className={classes.till} item xs={true} sm={6} md={3} lg={3}>
                    <CustumCard avatar="A" label="Produit Agriculteur" />
                </Grid>
                <Grid className={classes.till} item xs={true} sm={6} md={3} lg={3} >
                    <CustumCard avatar="G" label="Eleveur strategies" />
                </Grid>
                <Grid className={classes.till} item xs={true} sm={6} md={3} lg={3} >
                    <CustumCard avatar="R" label="Service Logistique"/>
                </Grid>
                <Grid className={classes.till} item xs={true} sm={6} md={3} lg={3} >
                    <CustumCard  avatar="I" label="Service domicile"/>
                </Grid>
            </Grid>
        </div>
    );
}

