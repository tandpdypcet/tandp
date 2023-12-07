import './login.css';
import logo from "../Images/logoo.png";
import React from 'react';
import { Link } from 'react-router-dom';

export default function EntryPage() {
    
    
    return (
        <div>

            {/* <div className='mainBg' style={{backgroundImage: `url(${bg})`} } > */}
            <div className='MainContainerLogin'>
                <div className='ContainerBoxLogin'>
                <img src={logo} alt='logo'/>
                    <div className='LoginContainer LoginBox EntryBox'>
                        <form >
                           
                            <h4>Which user are you?</h4>


                            {/* <input type="submit" value="Login" className="login-btn" /> */}
                            <Link to="/adminVerify"><button className="login-btn" >Admin</button></Link>
                            <p style={{marginLeft:"180px"}}>OR</p>
                            <Link to="/register"><button className="login-btn">Student</button></Link>
                        </form>
                    </div>
                </div>
            </div>
         
        </div>
    );
}











