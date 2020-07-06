import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import SignUp from '../redux/actions/SignUp';
import { useDispatch } from 'react-redux';
import store from '../redux/store';

export default function SignUpForm() {
  const dispatch = useDispatch();

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('Required')
      .min(8, 'Password must have 8 characters at least'),
    confirmpassword: Yup.string().required('Required'),
    username: Yup.string()
      .required('Required')
      .min(8, 'UserName must have 8 characters at least'),
    fullname: Yup.string()
      .required('Required')
      .min(8, 'FullName must have 8 characters at least'),
    bio: Yup.string()
      .min(5, '5 Characters at least')
      .max(50, '50 Characters maximum'),
  });
  store.subscribe(() => {
    console.log(store.getState());
  });

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      mx="auto"
      mt={8}
      display={'flex'}
    >
      <Card raised={true}>
        <CardContent>
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmpassword: '',
              username: '',
              fullname: '',
              bio: '',
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(SignUp(values));
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
                  SIGN UP
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
                <TextField
                  margin={'dense'}
                  placeholder={'Confirm Password'}
                  type="password"
                  name="confirmpassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmpassword}
                  error={
                    errors.confirmpassword &&
                    touched.confirmpassword &&
                    errors.confirmpassword
                  }
                  helperText={'Passwords must be matched'}
                />

                <br />
                <TextField
                  margin={'dense'}
                  placeholder={'User Name'}
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  error={errors.username && touched.username && errors.username}
                  helperText={'8 characters at least'}
                />
                <br />
                <TextField
                  margin={'dense'}
                  placeholder={'Full Name'}
                  type="text"
                  name="fullname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname}
                  error={errors.fullname && touched.fullname && errors.fullname}
                  helperText={'8 characters at least'}
                />

                <br />
                <TextField
                  margin={'dense'}
                  placeholder={'Bio'}
                  type="text"
                  name="bio"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bio}
                  error={errors.bio && touched.bio && errors.bio}
                  helperText={'5-50 Characters'}
                />
                <CardActions>
                  <Button
                    margin={'dense'}
                    onClick={handleSubmit}
                    variant={'contained'}
                    color="primary"
                    size={'small'}
                  >
                    Sign Up
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
