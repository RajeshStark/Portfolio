import React from 'react'
import styles from './About.module.css'

export default function About() {
    return (
        <div style={{ backgroundColor: '#2B2B2B' }}>
            <h1 className={styles.header}>About Me</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '5%' }}>
            
                <img src="https://scontent.fmaa2-2.fna.fbcdn.net/v/t1.0-9/59121138_431877094040019_1073594201679069184_o.jpg?_nc_cat=103&_nc_sid=a4a2d7&_nc_ohc=9VNIxSsmz5kAX96bTgp&_nc_ht=scontent.fmaa2-2.fna&oh=6d6a19259031e6891f14c989c5f5c837&oe=5ECDCFE3"
                    style={{ height: '200px', width: '200px', borderRadius: '200px' }}
                />
                {/* <img src={require('../../assets/myprofile.jpeg')}
                    style={{ height: '200px', width: '200px', borderRadius: '200px' }}
                /> */}
                <p className={styles.p1}>
                    I'm Self-taught React Native developer, i learnt everything my own with help of internet.
                    I'm currently working Nutantek Solution LLP as React Native. I've developed different and goood 
                    Applications in React Native and React.
                    </p>
                <p className={styles.p2}>
                    I'm pursuing Btech CSE from K.G. Reddy College of Engineering and Technology
                    But unfortunately I have discontinued my Btech course in my second semester,
                    And then I Started Learning Programming My Own.
                </p>
            </div>
        </div>
    )
}
