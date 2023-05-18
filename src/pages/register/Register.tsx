import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { RegisterPage } from './styles';
type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export const Register = (): JSX.Element => {
  const registerRequest = (
    name: string,
    email: string,
    surname: string,
    password: string
  ) => {
    axios
      .post(
        `http://localhost:8080/api/add?name=${name}&email=${email}&surname=${surname}&password=${password}`
      )
      .then((response) => console.log(response.data));
  };
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    registerRequest(data.name, data.email, data.surname, data.password);
    navigate(`/login`, { replace: false });
  };

  return (
    <RegisterPage>
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register('name')} />
        <input
          placeholder="Surname"
          {...register('surname', { required: true })}
        />
        <input placeholder="Email" {...register('email', { required: true })} />
        <input
          placeholder="Password"
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <button type="submit">Sign in </button>
      </form>
      <p>
        Have an account ?<Link to={'/Login'}> Sign In</Link>
      </p>
    </RegisterPage>
  );
};
