import React, { useEffect } from 'react';
import 'react-sticky-header/styles.css';
import './styles.css'

function Home() {

    useEffect(() => {
        var links = document.getElementsByClassName('link')
        for(let i=0; i<links.length; i++){
            links[i].style.color = "#2f5397"
        }
        document.getElementsByClassName('header')[0].style.backgroundColor = "#fff"
    }, [])

    return (
        <div class='home'>
                
        </div>
    );
}

export default Home;