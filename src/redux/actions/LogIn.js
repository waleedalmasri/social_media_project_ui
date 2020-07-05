const logIn=()=>{
    return dispatch => {
      //This time out simulate an fetch data from an api (ex :using axios )
      //this Async action handled bu thunk middleware lib
      setTimeout( ()=>{
        dispatch({
          type:'LOGIN'
        });
      },2000 );
    }
};
export default logIn ;