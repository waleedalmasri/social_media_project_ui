import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import logIn from '../redux/actions/LogIn';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router';

export default function LogInForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const authed = useSelector((state) => state.Auth.isLoggedIn);

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  useEffect(() => {
    if (!authed) return;
    history.replace('/');
  }, [authed, history]);

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      mx="auto"
      mt={15}
      width={{ xs: 200, sm: 300, md: 500, lg: 700, xl: 1500 }}
      display={'block'}
    >
      <Card raised={true}>
        <CardContent>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SignInSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(logIn(values));
              setSubmitting(false);
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
                  error={errors.email && touched.email}
                  helperText={errors.email}
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
                  error={errors.password && touched.password}
                  helperText={errors.password}
                />
                <br />
                <CardActions>
                  <Button
                    margin={'dense'}
                    onClick={handleSubmit}
                    variant={'contained'}
                    color="primary"
                    size={'small'}
                    disabled={isSubmitting}
                  >
                    Sign In
                  </Button>
                </CardActions>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
}
