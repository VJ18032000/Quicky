import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import register from '../assests/register.svg'
import axios from 'axios';
import { useFormik } from "formik";
import * as yup from 'yup';
import Toast from 'react-bootstrap/Toast'


const Register = () => {
    const history = useNavigate()


    const [registerStatus, setRegisterStatus] = useState("")
    const [show, SetShow] = useState(false)

    React.useEffect(() => {
        if (localStorage.getItem('auth')) history('/dashboard')
    }, [])

    const Formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmpassword: ''
        },
        validateOnChange:false,
        validateOnBlur:false,
        validationSchema: yup.object({
            email: yup.string()
                .required("email is required")
                .email(),
            password: yup.string()
                .max(8, "maximum 8 characters only")
                .required("Password is required"),
            confirmpassword: yup.string()
                .oneOf([yup.ref('password'), null], 'Passwords must match')
                .required("confirmpassword is required"),
        }),
        onSubmit: (values) => {
            const { ...data } = values;
            console.log(values);
            Formik.resetForm();
            SetShow(true)
            axios.post("http://3.110.105.86:1111/signup", data)
                .then((res) => {
                    console.log(res.data)
                    if (res.data.status==='Success') {
                        setRegisterStatus("Data successfully register")
                        history('/dashboard')
                        localStorage.setItem('auth', true)
                        localStorage.setItem('data', data.email)
                    } else {
                        setRegisterStatus(res.data.message)
                    }
                }).catch((err) => {
                    if (err && err.response) console.log(err);
                })
        }
    })
    return (
        <div className="container-fluid" >
            <div className="register-main">
                <div className="row">
                    <div className="col-md-6 left" >
                        <div className="inner">
                            <img src={register} className="img-fluid" alt='img' />
                        </div>
                    </div>
                    <div className="col-md-5 right">
                        <h2 style={{ fontWeight: 'bold', alignItems: 'left', color: '#232323',marginBottom:'42px' }}>Create account </h2>
                        <div className="form-group">
                            <Toast onClose={() => SetShow(false)} show={show} delay={5000} autohide>
                                <Toast.Body className=" bg-primary text-white">
                                    {registerStatus}
                                </Toast.Body>
                            </Toast>
                            <label className='label'>Email</label>
                            <input label='Email' className="form-control text" id="text1" type='email' name="email" autoComplete="off"
                                onChange={Formik.handleChange} placeholder="Enter Your Email ID"
                                value={Formik.values.email} />
                            {Formik.errors.email ? <div className="text-danger error">{Formik.errors.email}</div> : null}

                            <label className='label'>Password</label>
                            <input label='Password' className="form-control text" id="text2" type='password' name="password" 
                                onChange={Formik.handleChange} placeholder="Enter Your Password"
                                value={Formik.values.password} />
                            {Formik.errors.password ? <div className="text-danger error">{Formik.errors.password}</div> : null}

                            <label className='label'>Confirm Password</label>
                            <input label='Confirm Password' className="form-control text" id="text3" type='password' name="confirmpassword" 
                                onChange={Formik.handleChange} placeholder="Enter Your Password again"
                                value={Formik.values.confirmpassword} />
                            {Formik.errors.confirmpassword ? <div className="text-danger error">{Formik.errors.confirmpassword}</div> : null}
                            <button className="form-control button" onClick={Formik.handleSubmit} type="submit">Register</button>
                            <Link to="/" className="create">Already have an account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register