import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 200,
    [theme.breakpoints.down(960)]: {
      maxWidth:300,
      
     },
     [theme.breakpoints.down(600)]: {
      maxWidth:150,
     },
     [theme.breakpoints.down(465)]: {
      maxWidth:250,
     },
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  avatar:{
      backgroundColor:'#319401',
      [theme.breakpoints.down(960)]: {
        width:60,
        height:60,
        margin:'auto'
        
       },
       [theme.breakpoints.down(600)]: {
        width:30,
        height:30,
        margin:'auto',
        
        
        
       },
  },
  label:{
    margin:'auto',
  }
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function AutoGridNoWrap(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Paper className={classes.paper}>
        <Grid container  spacing={2}>
            <Grid item xs={'4'}>
                <Avatar className={classes.avatar}><strong> {props.avatar}</strong></Avatar>
            </Grid>
            <Grid xs={'8'} className={classes.label}>
                <Typography textAlign='center' variant='h6'><strong>{props.label}</strong></Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography textAlign='center'>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
