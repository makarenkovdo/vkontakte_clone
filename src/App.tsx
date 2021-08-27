import Auth from './pages/auth'
import Feed from './pages/feed'
import './App.css'
import { Route, Switch } from 'react-router-dom';
import { useMyDispatch, useMySelector } from './global/rootRedux/store'
import { signInSetSuccess } from './modules/auth/redux/signIn/signInSlice';
import Friends from './pages/friends';





function App() {
  const dispatch = useMyDispatch()
  const checkIfSignIn = () => {
    const displayName: string | null = localStorage.getItem('displayName')
    console.log(displayName);

    if (displayName) {
      console.log('send success');

      dispatch(signInSetSuccess(displayName))
    }


  }
  checkIfSignIn()
  const signInState = useMySelector(state => state.signInSlice.signInStatus)
  console.log(signInState);

  return (
    <div className='app'>
      {signInState
        ? <Switch><Route path="/feed" component={Feed} />
          <Route path="/" exact component={Feed} />
          <Route path="/friends" component={Friends} /></Switch>
        : <Auth />
      }
    </div>
  )
}

export default App;
