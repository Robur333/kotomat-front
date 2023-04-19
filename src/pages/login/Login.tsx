import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import { loginRequest } from '../../shared/ApiCAlls';
import { Navbar } from '../../components/Navbar/Navbar';
type Inputs = {
  email: string;
  password: string;
};

export const Login = (): JSX.Element => {
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
      <Navbar />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="Login" {...register('email')} />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          placeholder="Password"
          {...register('password', { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}

        <input value="Sign In" type="submit" />
      </form>

      <p>
        Don't have an account yet <Link to={'/Register'}>Sign Up</Link>
      </p>
    </>
  );
};
