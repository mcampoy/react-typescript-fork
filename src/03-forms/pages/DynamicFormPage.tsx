import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import { CustomInputText, CustomSelect } from '../components';
import formJson from '../data/custom-form.json';

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};



for (const input of formJson) {
  initialValues[input.name] = input.value;
  if(!input.validations?.length) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if(rule.type === 'required') {
      schema = schema.required((rule as any).description)
    }

    if(rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2, `Mínimo ${(rule as any).value || 2} caracteres` )
    }

    if(rule.type === 'email') {
      schema = schema.email((rule as any).description)
    }

    // Otras reglas
  }

  requiredFields[input.name] = schema;

};

const validationSchema = Yup.object({...requiredFields})

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={ (values) => console.log(values) }
      >
        {({handleReset}) => (
          <Form noValidate>
            {
              formJson.map( ({name, type, placeholder, label, options}) => {
                if (type === 'input' || type === 'password' || type === 'email' ) {
                  return <CustomInputText 
                          key={name}
                          name={name}
                          type={(type as any )}
                          label={label}
                          placeholder={placeholder} 
                        />
                } else if (type === 'select') {
                  return  <CustomSelect 
                            key={name}
                            name={name}
                            type={(type as any )}
                            label={label}
                          >
                              <option value="">Select an option</option>
                            {
                              options?.map(({ id, label }) => (
                                <option key={id} value={id}> { label } </option>
                              ))
                            }
                          </CustomSelect>
                }

                throw new Error(`The ${ type }, is not supported`)
              })
            }

            <button type='submit'>Submit</button>
            <button type='reset' onClick={handleReset}>Clean Form</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default DynamicFormPage;
