import React from 'react';
import 'react-sticky-header/styles.css';
import { HomeContainer, BgImg, BgWeb, ArrowContainer, BgImgContainer } from './HomeElements';
import BackImg from '../../Images/backImage.jpg'
import BackWeb from '../../Images/bgweb.png'
import Lottie from 'react-lottie';
import animationData from '../../assets/arrow-down.json';

const Home = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        
        <HomeContainer id="Home">
            <BgImgContainer>
                <BgImg src={BackImg}/>
                <BgWeb src={BackWeb}/>
                <ArrowContainer>
                    <Lottie options={defaultOptions}
                        height={300}
                        width={300}
                        isStopped={false}
                        isPaused={false}/>
                </ArrowContainer>
                
            </BgImgContainer>
            
        </HomeContainer>
    );
}

export default Home;
