import React from 'react';
import './Recruiters.css'
import RecImages from '../Images/Recruiters/ZYCUS.jpg';
import { Navbar_b } from '../Navbar/Navbar_b';
import zopper from '../Images/Recruiters/Zopper.png';
import tata from '../Images/Recruiters/tata.jpg';
import ubi from '../Images/Recruiters/ubi.png';
import te from '../Images/Recruiters/te.png';
import skl from '../Images/Recruiters/SLK.png';
import ms from '../Images/Recruiters/Microsoft.jpg';
import bc from '../Images/Recruiters/barclays.png';

const Recruiters = () => {
    return (
        <>
            <Navbar_b/>
        <div className="container rcontainer">
            
            <h1 className="heading">Our Recruiters</h1>
            <div className="box-container recruiters">
            <div className="box rBox">
                    <a href='https://www.zycus.com/'>
                        <img src={RecImages}></img>
                    </a>
                </div>
                <div className="box rBox">
                    <a href='https://www.zopper.com/'>
                        <img src={zopper}></img>
                    </a>
                </div>
                <div className="box rBox">
                    <a href='https://www.tatapower.com/'>
                        <img src={tata}></img>
                    </a>

                </div>
                <div className="box rBox">
                    <a href='https://www.ubisoft.com/en-us/'>
                        <img src={ubi}></img>
                    </a>
                </div>
                <div className="box rBox">
                    <img src={te}></img>

                </div>
                <div className="box rBox">
                    <img src={skl}></img>

                </div>
                <div className="box rBox">
                    <img src={ms}></img>
                </div>

                <div className="box rBox">
                    <img src={bc}></img>
                </div>

                
            
                
                
            </div>
            </div>
            </>
    );
};

export default Recruiters;