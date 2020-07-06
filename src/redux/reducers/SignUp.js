const SignUpReducer = (
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
        //should be filled with user information in real case
        ...state,
        isLoggedIn: true,
        userName: action.payload.username,
        fullName: action.payload.fullname,
        email: action.payload.email,
        bio: action.payload.bio,
      };
    default:
      return {
        ...state,
      };
  }
};

export default SignUpReducer;
