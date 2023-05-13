import React, { Component } from 'react';
//import logo from '../ClientApp/public/Images/labourimage.jpg';
import HouseIcon from '@mui/icons-material/House';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';

import './NavMenu.css';
//import Homecontent from './Homecontent';

function Homepage() {
    const [inhover, outhover] = useState(true)
    return (
        <div className='MainHome'>
            <div className='Logobar' style={{ position: "fixed", top: "0", width: "100%" }}>
                <button onClick={() => outhover(!inhover)}
                    style={{ background: "black", color: 'gray', cursor: "pointer", padding: "1rem" }}>
                    <DehazeIcon />
                </button>
                 {/*<img src={logo} width={100} alt='images'/> */}
                <text className='Headinglogo' >LabourWale</text>
            </div>
            <div className='navbarcontainer'>
                <section >
                    <ul onMouseEnter={() => outhover(true)}
                        onMouseLeave={() => outhover(false)} className="unorderedlist"
                        style={{
                            listStyleType: "none", transition: "all 1s ease", width: "fit-content",
                            margin: 0, padding: 0, paddingLeft: "1.9%", backgroundColor: "black"
                        }} className='header'>

                        <li style={{ display: "flex", paddingTop: "75px" }}>
                            <a href='/' style={{ color: "#f7d022", cursor: 'pointer', fontsize: "1.4rem", paddingRight: "10px" }} title='Home' className=' ember-view'><HouseIcon /></a>
                            {inhover ? <a href='./' style={{ marginRight: "45px", paddingLeft: "20px", cursor: "pointer", textDecoration: "none", fontWeight: 400, color: "white", fontFamily: "source-sans-pro" }} className='expanded'>Home </a> : null}
                        </li>

                        <li style={{ display: "flex", paddingTop: "10px" }}>
                            <a href='/' title='Home' style={{ color: "#f7d022", cursor: 'pointer', fontsize: "1.4rem", paddingRight: "10px" }} className=' ember-view'><EngineeringIcon /></a>
                            {inhover ? <a href='./Mission' style={{ marginRight: "45px", paddingLeft: "20px", cursor: "pointer", textDecoration: "none", fontWeight: 400, color: "white", fontFamily: "source-sans-pro" }} className='expanded'>Mission</a> : null}
                        </li>

                        <li style={{ display: "flex", paddingTop: "10px" }}>
                            <a href='/' title='Home' style={{ color: "#f7d022", cursor: 'pointer', fontsize: "1.4rem", paddingRight: "10px" }} className=' ember-view'><GroupsIcon /></a>
                            {inhover ? <a href='./Aboutme' style={{ marginRight: "45px", paddingLeft: "20px", cursor: "pointer", textDecoration: "none", fontWeight: 400, color: "white", fontFamily: "source-sans-pro" }} className='expanded'>Pricing</a> : null}
                        </li>
                        <li style={{ display: "flex", paddingTop: "10px" }}>
                            <a href='/Contact' title='Home' style={{ color: "#f7d022", cursor: 'pointer', fontsize: "1.4rem", paddingRight: "10px" }} className=' ember-view'><GroupsIcon /></a>
                            {inhover ? <a href='./Contact' style={{ marginRight: "50px", paddingLeft: "20px", alignItems: "left", textDecoration: "none", fontWeight: 400, color: "white", fontFamily: "source-sans-pro" }} className='expanded'>About Us</a> : null}
                        </li>
                        <li style={{ display: "flex", paddingTop: "10px" }}>
                            <a href='/Contact' title='CC' style={{ color: "#f7d022", cursor: 'pointer', fontsize: "1.4rem", paddingRight: "10px" }} className=' ember-view'><RecentActorsIcon /></a>
                            {inhover ? <a href='./Crousel' style={{ marginRight: "50px", paddingLeft: "20px", alignItems: "left", textDecoration: "none", fontWeight: 400, color: "white", fontFamily: "source-sans-pro" }} className='expanded'>ContactUs</a> : null}
                        </li>
                        <li style={{ display: "flex", paddingTop: "10px" }}>
                            <a href='/Contact' title='Home' style={{ color: "#f7d022", cursor: 'pointer', fontsize: "1.4rem", paddingRight: "10px" }} className=' ember-view'><RecentActorsIcon /></a>
                            {inhover ? <a href='./Contact' style={{ marginRight: "50px", paddingLeft: "20px", alignItems: "left", textDecoration: "none", fontWeight: 400, color: "white", fontFamily: "source-sans-pro" }} className='expanded'>Contactus </a> : null}
                        </li>
                        <li style={{ display: "flex", paddingTop: "10px" }}>
                            <a href='/Contact' title='Home' style={{ color: "#f7d022", cursor: 'pointer', fontsize: "1.4rem", paddingRight: "10px" }} className=' ember-view'><RecentActorsIcon /></a>
                            {inhover ? <a href='./Contact' style={{ marginRight: "50px", paddingLeft: "20px", alignItems: "left", textDecoration: "none", fontWeight: 400, color: "white", fontFamily: "source-sans-pro" }} className='expanded'>Contactus </a> : null}
                        </li>
                        <li style={{ display: "flex", paddingTop: "10px" }}>
                            <a href='/Contact' title='Home' style={{ color: "#f7d022", cursor: 'pointer', fontsize: "1.4rem", paddingRight: "10px" }} className=' ember-view'><RecentActorsIcon /></a>
                            {inhover ? <a href='./Contact' style={{ marginRight: "50px", paddingLeft: "20px", alignItems: "left", textDecoration: "none", fontWeight: 400, color: "white", fontFamily: "source-sans-pro" }} className='expanded'>Contactus </a> : null}
                        </li>
                        <li style={{ display: "flex", paddingTop: "10px" }}>
                            <a href='/Contact' title='Home' style={{ color: "#f7d022", cursor: 'pointer', fontsize: "1.4rem", paddingRight: "10px" }} className=' ember-view'><SettingsIcon /></a>
                            {inhover ? <a href='./Contact' style={{ marginRight: "50px", paddingLeft: "20px", alignItems: "left", textDecoration: "none", fontWeight: 400, color: "white", fontFamily: "source-sans-pro" }} className='expanded'>Contactus </a> : null}
                        </li>
                        <li style={{ display: "flex", paddingTop: "10px" }}>
                            <a href='/Contact' title='Home' style={{ color: "#f7d022", cursor: 'pointer', fontsize: "1.4rem", paddingRight: "10px" }} className=' ember-view'><RecentActorsIcon /></a>
                            {inhover ? <a href='./Contact' style={{ marginRight: "50px", paddingLeft: "20px", alignItems: "left", textDecoration: "none", fontWeight: 400, color: "white", fontFamily: "source-sans-pro" }} className='expanded'>Contactus </a> : null}
                        </li>
                        <li style={{ display: "flex", paddingTop: "10px" }}>
                            <a href='/Contact' title='Home' style={{ color: "#f7d022", cursor: 'pointer', fontsize: "1.4rem", paddingRight: "10px" }} className=' ember-view'><RecentActorsIcon /></a>
                            {inhover ? <a href='./Contact' style={{ marginRight: "50px", paddingLeft: "20px", alignItems: "left", textDecoration: "none", fontWeight: 400, color: "white", fontFamily: "source-sans-pro" }} className='expanded'>Contactus </a> : null}
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}
export default Homepage