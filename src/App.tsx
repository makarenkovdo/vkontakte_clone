import Auth from './PAGES/Auth'
import Feed from './PAGES/Feed'
import './App.css'
import { Redirect, Route, Switch } from 'react-router-dom';
import { useMyDispatch, useMySelector } from './GLOBAL/Redux/Root/Store'
// import { signIn_Action_SetSuccess } from './MODULES/Auth/Redux/SignIn/SignIn_Actions';
// import { signUp_Action_SetSucess } from './MODULES/Auth/Redux/SignUp/SignUp_Actions';
import { Action } from 'redux'
import { signIn_setSuccess } from './MODULES/Auth/Redux/SignIn/SignIn_Slice';





function App() {
  const dispatch = useMyDispatch()

  const app_Dispatch_SignInCheck = () => {
    const displayName: string | null = localStorage.getItem('displayName')
    console.log(displayName);

    if (displayName) {
      console.log('send success');

      dispatch(signIn_setSuccess(displayName))
    }


  }
  app_Dispatch_SignInCheck()
  const signInState = useMySelector(state => state.signInSlice.signInStatus)
  console.log(signInState);

  return (
    <div className='app'>


      {signInState
        ? <Switch><Route path="/feed" component={Feed} />
          <Route path="/" component={Feed} /></Switch>
        : <Auth />
      }





    </div>
  )
}

export default App;
