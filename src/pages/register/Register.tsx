import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export const Register = () => {
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    registerRequest(data.name, data.email, data.surname, data.password);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register('name')} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('surname', { required: true })} />
        <input {...register('email', { required: true })} />
        <input {...register('password', { required: true })} />

        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
      <Link to={'/Login'}>Login</Link>
    </>
  );
};
