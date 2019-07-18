import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid,Button,ButtonGroup, Divider } from '@material-ui/core';
import agriImg from '../../../assets/images/Agribourse.png';
import UpArrowIcon from '@material-ui/icons/KeyboardArrowUp';
import DownArrowIcon from '@material-ui/icons/KeyboardArrowDown';




const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    
  },
  testimonial:{
      marginLeft:10,
      marginBottom:0,
  },
  my_btn:{
     backgroundColor: "#9ac21c",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
   
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div >
        <Grid container >
            <Grid  xs={12}  md={9} container>
                <Paper  className={classes.root}>
                   <Grid container>
                       <Grid xs={12}>
                        <Typography style={{margin:15}} align='left' variant='h4' component='h3'>
                           <strong>Welcome, cher visiteur!</strong> 
                            </Typography>
                            <Divider />
                            <Grid container>
                                <Grid xs={3} >
                                <img className="img-fluid" alt="logo" src={agriImg}/>
                                </Grid>
                                <Grid xs={8}  >
                                    <Typography className="font-weight-light" align='justify' component="p" style={{marginTop:10}}>
                                        The background of an application resembles the flat, opaque texture of a sheet of paper,
                                        and an application’s behavior mimics paper’s ability to be re-sized, shuffled, and bound together in multiple sheets
                                        The background of an application resembles the flat, opaque texture of a sheet of paper, and an application’s
                                        behavior mimics paper’s ability to be re-sized, shuffled, and bound together in multiple sheets
                                    </Typography>
                                </Grid>
                            </Grid>
                       </Grid>
                   </Grid>
                </Paper>
            </Grid>
            <Grid container xs={8}  md={3}>
                <Grid xs={12}> 
                    <Typography style={{margin:15}} align='left' variant='h5' component='h3'>
                            <strong>Temoignage</strong> 
                    </Typography>
                    <Divider />
                    <Paper className={classes.testimonial} >
                   
                        <Typography className="font-italic font-weight-light" style={{padding:20}} align="center">
                        <blockquote class="blockquote">
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer class="blockquote-footer"><strong>Felix Roland</strong></footer>
                        </blockquote>
                        </Typography>
                    </Paper>
                    <ButtonGroup  className="float-right" style={{marginTop:5}} variant="contained" size="small" aria-label="Small contained primary button group">
                        <Button  className={classes.my_btn}><DownArrowIcon style={{color:'white'}} /></Button>
                        <Button className={classes.my_btn} ><UpArrowIcon style={{color:'white'}} /></Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}
