import { FieldValues, useForm } from 'react-hook-form';

import './Login.css';
import image from '../assets/5243321.jpg';
// import useLogin from '../hooks/useLogin';
import { useContext, useState } from 'react';
import loginService, { LoginResponse } from '../services/login-service';
import { CanceledError } from '../services/api-client';
import AuthContext from '../context/AuthProvider';

interface LoginFormData {
    email: string;
    password:string;
}

function Form() {
    const {setAuth} = useContext(AuthContext)

    const {register, handleSubmit, formState:{ errors , isValid}} = useForm<LoginFormData>()
    // const [req, setReq] = useState<LoginFormData>({email:'',password:''})
    const [sessionId, setSessionId] = useState<LoginResponse>()
    const [error, setError] = useState("");
    
    // const response = (req.email && req.password) && useLogin({username:req.email,password:req.password})
    // console.log(response)
    const onSubmit = (data: FieldValues) => {
        console.log(data)
        // setReq({email:data.email, password:data.password})
        const headers = {
          'Authorization': 'Basic ' + btoa(data.email + ':' + data.password)
      }
      const { request, cancel } = loginService.postOne<LoginResponse>(
        headers,
        {}
    );
    request
      .then((res) => {
        setSessionId(res.data)
        setAuth(res.data)
        // setUsers(res.data);
        // setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        // setIsLoading(false);
      });
      return cancel;
    }

  return (
    <div className="login-container d-flex">
      <div className="login-form-container col-md-6">
        <div className="login-form">
          <h1 className="mb-4 fw-bolder">MIS Portal</h1>
          <h3 className="mb-4">...</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input
                { ...register('email', {required:true, minLength:3})}
                type="email"
                className="form-control"
                id="email"
                placeholder="johndoe@manipalcigna.com"
              />
              { errors.email?.type === 'required' && <p className='text-danger'>Email Address is required</p>}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                { ...register('password', {required:true, minLength:3})}
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
              {errors.password?.type === 'required' && <p className='text-danger'>Password is required</p>}
              {/* {errors.password?.type === 'minLength' && <p className='text-danger'>Password length is too short</p>} */}
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
              <a href="/" className="float-end">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={!isValid}>
              Sign In
            </button>
          </form>
          <div className="mt-3">
            <span>
              Don't have an account? <a href="/">Sign Up</a>
            </span>
          </div>
        </div>
      </div>
      <div className="login-image-container col-md-6">
        <img src={image} alt="Login Illustration" className="img-fluid" />
      </div>
    </div>
  );
}

export default Form;
