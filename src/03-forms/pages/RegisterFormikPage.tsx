import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { CustomInputText } from '../components';

const registerSchema = Yup.object({
  name: Yup.string()
            .min(2, 'El nombre debe tener al menos dos caracteres')
            .max(15, 'El nombre debe tener 15 caracteres como máximo')
            .required('Requerido'),
  email: Yup.string()
            .email('Debe ser un email válido')
            .required('Requerido'),
  password: Yup.string()
            .min(6, 'Mínimo 6 caracteres')
            .required('Requerido'),
  password2: Yup.string()
  .oneOf([Yup.ref('password')], 'Las contraseñas no son iguales')
            .required('Requerido')
})

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page </h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          password2: ''
        }}
        onSubmit={ values => console.log(values) }
        validationSchema={ registerSchema }
      >

        { ({handleReset}) => (
          <Form>
            <CustomInputText
              name="name" label="Nombre" placeholder='Ingrese su nombre' />
            <CustomInputText
              name="email" label="Correo electrónico" type="email" placeholder='Ingrese su correo electrónico' />
            <CustomInputText
              name="password" label="Contraseña" type="password" placeholder="Ingrese una contraseña" />
            <CustomInputText
              name="password2" label="Repita contraseña" type="password" placeholder="Repita la contraseña" />

            <button type="submit">Create</button>
            <button type="reset" onClick={handleReset}>Reset Form</button>
          </Form>
        )}

      </Formik>

    </div>
  )
}
