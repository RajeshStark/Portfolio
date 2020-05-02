import React from 'react'
import { SocialIcon } from 'react-social-icons';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Button from '@material-ui/core/Button';


import './Contact.css'

export default function Contact() {
    return (
        <div >
            <div className='contactmain'>
                <h3 className='heading'>contact me</h3>

                <div className="row">
                    <div className="row1">
                    <PhoneIcon className="item" />
                    <p className="item">+91-9398838327</p>
                    </div>
                    <div className="row2">
                    <MailIcon className="item" />
                    <p className="item">sangapogurajesh@gmail.com</p>
                    </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom:'30px' }}>
                    <SocialIcon style={{ margin: '10px' }} url="https://www.facebook.com/Rajesh.Stark.8" bgColor="transparent" fgColor="#fff" />
                    <SocialIcon style={{ margin: '10px' }} url="https://twitter.com/razrajesh6" bgColor="transparent" fgColor="#fff" />
                    <SocialIcon style={{ margin: '10px' }} url="https://www.linkedin.com/in/rajesh-sangapogu-a5bb5a158/" bgColor="transparent" fgColor="#fff" />
                    <SocialIcon style={{ margin: '10px' }} url="https://github.com/RajeshStark" bgColor="transparent" fgColor="#fff" />
                </div>
            </div>
        </div>
    )
}
