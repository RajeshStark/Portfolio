import React from 'react';
import { Button} from '@material-ui/core';
import './Home.css';
export default function Home() {

    return (
        <div className='main'>
           
            <div>
                <div className='container'>
                    <h1 className="responsive-headline name">Hi I'm Rajesh Sangapogu</h1>
                    <h3 className="responsive-headline subheading">React / React Native developer</h3>  
                    <p className="responsive-headline paragraph1">I'm a Hyderabad based self-taught frontend developer for mobile & web.</p>
                    <p className="responsive-headline paragraph2">creating responsive and good looking UI. Let's start scrolling and learn more about me. </p>
                    <Button variant="contained" color="primary" style={{paddingLeft:30,paddingRight:30}}>
                        Resume
                    </Button>
                </div>
            </div>
        </div>
    )
}