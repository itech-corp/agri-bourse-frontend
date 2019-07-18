import React from 'react';
import footerImg from '../../assets/images/bg.jpg';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Grid, Container, Divider} from '@material-ui/core/';
import  './footer.css';
import FacebookIcon from 'mdi-material-ui/FacebookBox';
import TwitterIcon from 'mdi-material-ui/Twitter';
import LinkedInIcon from 'mdi-material-ui/LinkedinBox';



const useStyles = makeStyles(theme => ({
    
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
     
    },
  }));
  

export default function Footer(){

    const classes = useStyles();
    return(
        <footer style={{backgroundImage: `url(${footerImg})`,backgroundRepeat:"repeat",backgroundPosition:'right top', backgroundAttachment:'fixed',marginTop:50}} className={classes.footer}>
           <Container maxWidth='md'>
                <Grid container>
                <Grid xs={true}>
                        <section>
                            <Typography   style={{color:'white'}} variant='h5'>pourquoi nous?</Typography>
                            <ul >
                                <li><a href="#">wow nous</a></li>
                                <Divider />
                                <li><a href="#">les raisons d'utilisation de vos services</a></li>
                                <li><a href="#">hmmmmmmmmm </a></li>
                                <li><a href="#">LoremIpsum.............</a></li> 
                            </ul>
                        </section>    
                </Grid>
                <Grid xs={true}>
                <Typography style={{color:'white'}}  variant='h5'>Address</Typography>
                        <ul style={{color:'#5c5e5bfb'}}>
                            <li><span>pays:     </span>CAMEROUN</li>
                            <li><span>City:     </span>kotto kotto bloc E Douala-Cameroun</li>
                            <li><span>Phone:    </span>00237 6 91 76 35 05</li>
                            <li><span>Email:    </span><a href="mailto:">Agrib@gmail.com</a></li> 
                        </ul>
                </Grid>
                <Grid xs={true}>
                <Typography style={{color:'white'}} variant='h5'>suivez-nous</Typography>
                        <ul  style={{color:'white'}}>
                            <li><a href="#"><FacebookIcon />Facebook</a></li>
							<li><a href="#"><TwitterIcon />Twitter</a></li>
							<li><a href="#"><LinkedInIcon />LinkedIn</a></li>
                        </ul>
                </Grid>
            </Grid>
                <div class="col-md-6 widget">
                    <div class="widget-body">
                        <p style={{color:'white'}} class="text-right">
                            Copyright &copy; 2019, freezone disgn by : <a href="#" rel="designer">PNstudio</a>
                        </p>
                    </div>
                </div> 
            </Container>
        </footer>
    )


}