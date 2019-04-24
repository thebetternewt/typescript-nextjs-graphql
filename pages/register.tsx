import React from 'react';
import { Formik, Field } from 'formik';
import Layout from '../components/Layout';
import { InputField } from '../components/files/InputField';
import { RegisterComponent } from '../generated/apolloComponents';

const Register = () => {
  return (
    <Layout title="Register Page">
      <RegisterComponent>
        {register => {
          return (
            <Formik
              initialValues={{
                email: '',
                firstName: '',
                lastName: '',
                password: '',
              }}
              onSubmit={async data => {
                console.log('data:', data);
                try {
                  const result = await register({ variables: { data } });
                  console.log('result:', result);
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              {({ values, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    name="firstName"
                    placeholder="first name"
                    component={InputField}
                  />
                  <Field
                    name="lastName"
                    placeholder="last name"
                    component={InputField}
                  />
                  <Field
                    name="email"
                    type="email"
                    placeholder="email"
                    component={InputField}
                  />
                  <Field
                    name="password"
                    type="password"
                    placeholder="password"
                    component={InputField}
                  />

                  <button type="submit">Submit</button>
                </form>
              )}
            </Formik>
          );
        }}
      </RegisterComponent>
    </Layout>
  );
};

export default Register;
