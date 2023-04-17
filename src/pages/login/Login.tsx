import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import { loginRequest } from '../../components/ApiCAlls';
import index from "/index.css";
type Inputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const navigate = useNavigate();
  const redirectFunc = () => {
    navigate('/HomePage', { replace: true });
  };
  const [isLoggedin, setisLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedin) {
      redirectFunc();
    }
  }, [isLoggedin]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setisLoggedIn(await loginRequest(data.email, data.password));
  };

  return (
    <>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='paragraph'>
          <a >
            <img className="foto" src="https://media.istockphoto.com/id/822432012/pl/wektor/ikona-kszta%C5%82tu-g%C5%82owy-kota.jpg?s=1024x1024&w=is&k=20&c=V45IYwSXUxh9tom947QHGMXpM9VvFtg3w-xdXGFXVnE=" alt="Example Image" />
          </a>
          <h4>Log in</h4>
        </div>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="twój stary" {...register('email')} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('password', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
      <Link to={'/Register'}>Register</Link>
    </>
  );
};
