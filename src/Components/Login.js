import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import login from '../assests/login.svg'
import axios from 'axios'
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import Toast from 'react-bootstrap/Toast'
import * as yup from 'yup'
import '../App.css'


const Login = () => {
  const history = useNavigate();

  const [loginStatus, setLoginStatus] = useState("")
  const [show, SetShow] = useState(false)

  React.useEffect(() => {
    if (localStorage.getItem('auth')) history('/dashboard')
  }, [])

  const Formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: yup.object({
      email: yup.string()
        .required("email is required")
        .email(),
      password: yup.string()
        .required("Password is required")
    }),
    onSubmit: (values) => {
      const { ...data } = values;
      console.log(values);
      Formik.resetForm();
      SetShow(true)

      axios.post("http://3.110.105.86:1111/login", data).then((res) => {
        console.log(res.data)
        if (res.data.status === 'ERROR') {
          setLoginStatus(res.data.message)
        } else {
          setLoginStatus(res.data.result)
          const data = res.data.result;
          console.log(data)
          history('/dashboard')
          localStorage.setItem('auth', true)
          localStorage.setItem('data', data)
        }
      })
    }

  })
  return (
    <>
      <div className="container-fluid" >
        <div className="login-main">
          <div className="row">
            <div className="col-md-6 left" >
              <div className="inner">
                <img src={login} className="img-fluid" alt='img' />
              </div>
            </div>
            <div className="col-md-5 right">
              <h2 style={{ fontWeight: 'bold', alignItems: 'left', color: '#232323',marginBottom:'42px' }}>Login</h2>

              <Toast onClose={() => SetShow(false)} show={show} delay={5000} autohide>
                <Toast.Body className=" bg-danger text-white">
                  {loginStatus}
                </Toast.Body>
              </Toast>
              <div className="form-group">
                <label className='label'>Email</label><br/>
                <input label='Email' className="text" type='email' name="email" autoComplete="off" id="text1"
                  onChange={Formik.handleChange} placeholder='Enter Your Email ID'
                  value={Formik.values.email} /><br/>
                {Formik.errors.email ? <div className="text-danger error">{Formik.errors.email}</div> : null}
               
                <label className='label'>Password</label><br/>
                <input label='Password' className="text" type='password' name="password" id='text2'
                  onChange={Formik.handleChange} placeholder='Enter Your Password'
                  value={Formik.values.password} />
                {Formik.errors.password ? <div className="text-danger error">{Formik.errors.password}</div> : null}
              </div>
              <Link to="/" id="forget">Forget password</Link>
              <button className="form-control button" onClick={Formik.handleSubmit} type="submit">Login</button>
              <Link to="/register" className="create">Create account?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login