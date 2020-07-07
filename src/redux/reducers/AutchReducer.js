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

export default AuthReducer;
