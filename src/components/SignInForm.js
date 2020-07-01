import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

export default function LogInForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {


      }}
    >
      {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit} className={'msg'}>
          <InputLabel color={'primary'} variant={'standard'}>SIGN IN</InputLabel>
          <TextField
            className={'input'}
            margin={'dense'}
            placeholder={'Email'}
            type="mail"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}/>

          {errors.email && touched.email && errors.email}
          <br/>
          <TextField
            className={'input'}
            margin={'dense'}
            placeholder={'Password'}
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <br/>
          {errors.password && touched.password && errors.password}
          <Button margin={'dense'} type={'submit'} variant={'contained'} color="primary" size={'medium'}>
            Sign In
          </Button>
        </form>
      )}
    </Formik>

  );
}