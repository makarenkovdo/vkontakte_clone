import Auth from './pages/auth'
import Feed from './pages/feed'
import './App.css'
import { Route, Switch } from 'react-router-dom';
import { useMyDispatch, useMySelector } from './global/rootRedux/store'
import { signInSetSuccess } from './modules/auth/redux/signIn/signInSlice';
import Friends from './pages/friends';
import { Profile } from './pages/profile';





function App() {
  const signInState = useMySelector(state => state.signInSlice.signInStatus)
  const dispatch = useMyDispatch()

  const checkIfSignIn = () => {
    const displayName: string | null = localStorage.getItem('displayName')
    if (displayName) {
      dispatch(signInSetSuccess(displayName))
    }


  }
  checkIfSignIn()

  return (
    <div className='app'>
      {signInState
        ? <Switch><Route path="/feed" component={Feed} />
          <Route path="/" exact component={Feed} />
          <Route path="/friends" component={Friends} />
          <Route path="/profile" component={Profile} /></Switch>

        : <Auth />
      }
    </div>
  )
}

export default App;
