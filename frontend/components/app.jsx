import React from 'react'
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session/login_form_container';
import RegistrationFormContainer from './session/registration_form_container';
import SidebarContainer from './sidebar/sidebar_container';
import ServerIndexContainer from './servers/server_index_container';

const App = () => {
  return (
    <>
      <Route exact path="/" component={SplashContainer} />

      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/register" component={RegistrationFormContainer} />

      <ProtectedRoute path="/channels" component={ServerIndexContainer} />
      <ProtectedRoute path="/channels/:serverId" component={SidebarContainer} />
    </>
  )
}

export default App;