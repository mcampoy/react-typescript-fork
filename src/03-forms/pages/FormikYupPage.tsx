import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

const formSchema = Yup.object({
  firstName: Yup.string().max(15, 'Debe tener al menos 15 caracteres').required('Requerido'),
  lastName: Yup.string().max(10, 'Debe tener al menos 10 caracteres').required('Requerido'),
  email: Yup.string().email('Debe ser un email válido').required('Requerido')
})

export const FormikYupPage = () => {

  const {
    // handleChange,
    // values,
    // handleBlur,
    handleSubmit,
    errors,
    touched,
    getFieldProps
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: formSchema
  });

  return (
    <div>
        <h1>Formik Yup Tutorial</h1>
        <form
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor='firstName'>First Name</label>
          <input
            type="text"
            { ...getFieldProps('firstName') }
          />
          { touched.firstName && errors.firstName &&  <span>{ errors.firstName }</span>}

          <label htmlFor='lastName'>Last Name</label>
          <input
            type="text"
            { ...getFieldProps('lastName') }
          />
          { touched.lastName && errors.lastName &&  <span>{ errors.lastName }</span>}

          <label htmlFor='email'>Email</label>
          <input
            type="email"
            { ...getFieldProps('email') }
          />
          { touched.email && errors.email &&  <span>{ errors.email }</span>}

          <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default FormikYupPage;
