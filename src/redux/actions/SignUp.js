import axios_config from '../../axios_service/axios_config';

const SignUp = (User) => {
  return (dispatch) => {
    //This time out simulate an fetch data from an api (ex :using axios )
    //this Async action handled by thunk middleware lib
    axios_config
      .post('/user.json', { User })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
    dispatch({
      type: 'SIGNUP',
      payload: User,
    });

  }
}
export default SignUp;
