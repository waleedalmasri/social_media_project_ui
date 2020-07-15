import axios_config from '../../axios_service/axios_config';

const logIn = (User) => {
  return (dispatch) => {
    axios_config.get('/user.json').then((res) => {
      const users = res.data;
      const indeces = Object.keys(users);

      for (let i = 0; i < indeces.length; i++) {
        const authedUser = users[indeces[i]]['User'];
        const authedEmail = authedUser['email'];
        const authedPassword = authedUser['password'];
        if (User.email === authedEmail && User.password === authedPassword) {
          console.log('Authed');
          dispatch({
            type: 'LOGIN',
            payload: authedUser,
          });
          return;
        }
      }
      alert('Invalid User');
      return;
    });
  };
};
export default logIn;
