import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { CustomCheckbox, CustomInputText, CustomSelect } from '../components';

import '../styles/styles.css';

const formSchema =Yup.object({
  firstName: Yup.string().max(15, 'Debe tener al menos 15 caracteres').required('Requerido'),
  lastName: Yup.string().max(10, 'Debe tener al menos 10 caracteres').required('Requerido'),
  email: Yup.string().email('Debe ser un email válido').required('Requerido'),
  terms: Yup.boolean().oneOf([true], 'Debe aceptar las condiciones'),
  jobType: Yup.string().required('Requerido').notOneOf(['it-jr'], 'Esta opción no es permitida')
})

export const FormikAbstractation = () => {

  return (
    <div>
        <h1>Formik Abstractation</h1>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            terms: false,
            jobType: ''
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={formSchema}
        >
          { (formik) => {
          return (
            <Form>

              <CustomInputText
                label="First Name"
                name="firstName"
                type="text"
                placeholder='Ingrese su nombre' />
              <CustomInputText
                label="Last Name"
                name="lastName"
                type="text"
                placeholder='Ingrese su Apellido' />
              <CustomInputText
                label="Address email"
                name="email"
                type="text"
                placeholder='Ingrese su correo electrónico' />

              <CustomSelect name="jobType" label="Job Type">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr</option>
              </CustomSelect>

              <CustomCheckbox label='Terms & Conditions' name="terms" />

              <button type="submit">Submit</button>
            </Form>
          );
        }
          }
        </Formik>
    </div>
  )
}

export default FormikAbstractation;
