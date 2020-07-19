import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Formik } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import axios_config from '../axios_service/axios_config';
import storage from '../firebase_stoarge/storage_config';
import { useSelector } from 'react-redux';

export default function NewPost() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);

  const SignUpSchema = Yup.object().shape({
    postContent: Yup.string()
      .required('Required')
      .min(5, 'Post should have 5 characters at least')
      .max(150, 'Post should have 150 characters maximum')
  });

  const post = (newPost) => {
    axios_config
      .post('/post.json', newPost)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const userName = useSelector((state) => state.Auth.userName);

  const uploadImage = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            console.log(url);
          });
      }
    );
  };

  useEffect(()=>{
    if (image!==null)
    {
      uploadImage();
    }
  },[image]);

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      mx="auto"
      width={500}
      display={'block'}
    >
      <Card raised={true}>
        <CardContent>
          <Formik
            initialValues={{
              postContent: '',
              image: null
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values, { setSubmitting }) => {
              const newPost = {
                userName: userName,
                publishDate: new Date(),
                postContent: values.postContent,
                imageURL: url,
                likes: 0,
                comments: ''
              };
              post(newPost);
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
                isSubmitting
              }) => (
              <form onSubmit={handleSubmit}>
                <InputLabel color={'primary'} variant={'standard'}>
                  New Post
                </InputLabel>
                <TextField
                  margin={'dense'}
                  placeholder={'Post Content'}
                  type="text"
                  name="postContent"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.postContent && touched.postContent}
                  helperText={errors.postContent}
                />
                <br/>
                <label>ADD IMAGE</label>
                <br/>
                <input
                  type={'file'}
                  name={'image'}
                  accept={'image/*'}
                  onChange={handleImage}
                  onBlur={handleBlur}
                  value={values.image}
                />
                <CardActions>
                  <Button
                    margin={'dense'}
                    onClick={handleSubmit}
                    variant={'contained'}
                    color="primary"
                    size={'small'}
                    disabled={progress<100}
                  >
                    POST
                  </Button>
                  <progress value={progress} max="100"/>
                </CardActions>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
}
