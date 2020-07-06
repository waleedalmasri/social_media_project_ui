const AuthReducer = (
  state = {
    isLoggedIn: false,
    userName: '',
    email: '',
    fullName: '',
    bio: '',
  },
  action
) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload.username,
        fullName: action.payload.fullname,
        email: action.payload.email,
        bio: action.payload.bio,
      };
    case 'LOGIN':
      return {
        //should be filled with user information in real case
        ...state,
        isLoggedIn: true,
        userName: 'waleed',
        fullName: 'Waleed Almasri',
        email: 'waleedalmsri.061@gmail.com',
        bio: 'Average Joe',
      };
    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;
