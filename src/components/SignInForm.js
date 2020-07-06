import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import { useTranslation } from 'react-i18next';
import logIn from '../redux/actions/LogIn';
import { useDispatch } from 'react-redux';
import store from '../redux/store';

export default function LogInForm() {
  const dispatch = useDispatch();

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  //const { t } = useTranslation();
  store.subscribe(() => {
    console.log(store.getState());
  });

  return (
      <Card raised={true}>
        <CardContent>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SignInSchema}
            onSubmit={(values, { setSubmitting }) => {
              //before dispatch action we should check if authinticated in real cases
              dispatch(logIn());
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <InputLabel color={'primary'} variant={'standard'}>
                  SIGN IN
                </InputLabel>
                <TextField
                  margin={'dense'}
                  placeholder={'Email'}
                  type="mail"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email && touched.email && errors.email}
                  helperText={'Email should be valid'}
                />
                <br />
                <TextField
                  margin={'dense'}
                  placeholder={'Password'}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={errors.password && touched.password && errors.password}
                  helperText={'Password Required'}
                />
                <br />
                <CardActions>
                  <Button
                    margin={'dense'}
                    onClick={handleSubmit}
                    variant={'contained'}
                    color="primary"
                    size={'small'}
                  >
                    Sign In
                  </Button>
                </CardActions>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
  );
}
