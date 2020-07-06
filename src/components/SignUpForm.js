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
      mt={15}
      width={{ xs: 200, sm: 300, md: 500, lg: 700, xl: 1500 }}
      display={'block'}
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
                <TextField
                  margin={'dense'}
                  placeholder={'Confirm Password'}
                  type="password"
                  name="confirmpassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmpassword}
                  error={errors.confirmpassword && touched.confirmpassword}
                  helperText={errors.confirmpassword}
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
                  error={errors.username && touched.username}
                  helperText={errors.username}
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
                  error={errors.fullname && touched.fullname}
                  helperText={errors.fullname}
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
                  error={errors.bio && touched.bio}
                  helperText={errors.bio}
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
