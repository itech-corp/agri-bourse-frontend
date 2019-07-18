import React,{ Component } from 'react';
import { Container, Grid,Typography  } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';

import CardContainer from '../../components/cards/cardsContainer/cardContainer';
import HomeCard from '../../components/cards/HomeCard/HomeCard';
import Footer from  '../../components/Footer/Footer';

class Home extends Component {

    
    render(){
       
        return(
            <>
               <div style={{backgroundColor:'#315e01',height:'95vh'}}>
                   <Container>
                        <Carousel dynamicHeight={true} showThumbs={false} infiniteLoop={true} autoPlay={true} >
                            <div>
                                <img alt='carrousel-img' src={img1}/>
                            </div>
                            <div>
                                <img alt='carrousel-img' src={img2}/>
                            </div>
                            <div>
                                <img alt='carrousel-img' src={img3}/>
                            </div>
                            <div>
                                <img alt='carrousel-img' src={img4}/>
                            </div>
                        </Carousel>
                   </Container>
               </div>
               <div style={{alignContent:'center'}} >
                    <Container maxWidth='md' style={{marginTop:40,textAlign:'center'}}> 
                       <CardContainer/>
                       <div style={{marginTop:40 ,textAlign:'center'}}>
                            <Grid container>
                                <HomeCard />
                            </Grid> 
                       </div>
                    </Container> 
               </div>
              <Footer />
            </>   
        );
    }
}


export default Home;