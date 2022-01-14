import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

  const {
    name,
    email,
    password,
    password2,
    formData,

    onHandleInputChange,
    reset,
    isValidEmail
   } = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page </h1>
      <form
        onSubmit={ onSubmit }
        noValidate
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={ onHandleInputChange }
          className={`${!name.trim().length && 'has-error'}`}
        />
        {!name.trim().length && <span>Este campo es obligatorio</span>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={ onHandleInputChange}
          className={`${!isValidEmail(email) &&  'has-error'}`}
          />
        {!isValidEmail(email) && <span>El email es inválido</span>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={ onHandleInputChange}
          />
        {!password.trim().length && <span>Este campo es obligatorio</span>}
        {password.trim().length < 6 && <span>El password debe tener al menso 6 caracteres</span>}

        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          name="password2"
          onChange={ onHandleInputChange }
        />
        {!password2.trim().length && <span>Este campo es obligatorio</span>}
        {password2.trim().length > 5 && password !== password2 && <span>Las contraseñas no coinciden</span>}

        <button type="submit">Create</button>
        <button type="reset" onClick={reset}>Reset Form</button>
      </form>
    </div>
  )
}
