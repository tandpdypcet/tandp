import './login.css';
import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios';
import logo from "../Images/logoo.png";
import Validation from './Validation';

export default function Registration() {
    const [values, setValues] = useState({
        Username: '',
        Email: '',
        Password: '',
        Cpassword:''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        Username: '',
        Email: '',
        Password: '',
        Cpassword: ''
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        if (Object.values(validationErrors).every((val) => val === '')) {
         
            axios.post(process.env.REACT_APP_BASE_URL + '/register', { username: values.Username[0], email: values.Email[0], password: values.Password[0] })
                .then(res => {
                    // console.log("Registered Successful!", res);
                    alert("Registration Successfull!");
                    navigate("/home")
                })
                .catch(err => {
                    // console.log("Registration failed", err);
                    alert("Fail");
                });
        }
    }

    const onHandleChange = (event) => {
        setValues({ ...values, [event.target.name]: [event.target.value] })
    }

    return (
        <>
            <div className='MainContainerLogin'>
                <div className='ContainerBoxLogin'>
                    <img src={logo} alt='logo' />
                    <div className='LoginContainer regBox'>
                        <form>
                            <form>


                                <h4>Student Registration</h4>

                                <div className="input">
                                    <input type="text" name="Username" id="username" required title="Please enter your Username here" onChange={onHandleChange} placeholder='Username' />
                                    {errors.Username && <span className='text-danger error-msg'> {errors.Username}</span>}
                                </div>

                                <div className="input">
                                    <input type="email" name="Email" id="email" required
                                        placeholder='Email' title="Please enter your Email here" onChange={onHandleChange} />
                                    {errors.Email && <span className='text-danger'> {errors.Email}</span>}
                                </div>

                                <div className="input">
                                    <input type="password" placeholder='Password' name="Password" id="password" required title="Please enter your Password here" onChange={onHandleChange} />
                                    {errors.Password && <span className='text-danger'> {errors.Password}</span>}
                                </div>

                                <div className="input">
                                    <input type="password" placeholder='Confirm Password' name="Cpassword" id="Cpassword" required title="Please enter your Password again here" />
                                    {/* {errors.Cpassword && <span className='text-danger'> {errors.Cpassword}</span>} */}
                                </div>

                                <input type="submit" value="SignUp" className="login-btn" onClick={handleSubmit} />
                                <p>Already have an account? <Link to="/login">Login</Link></p>

                                <Link to="/"><button className="login-btn" >Back</button></Link>

                            </form>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}