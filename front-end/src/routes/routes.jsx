import { Redirect, Route, Switch } from 'react-router-dom';

import HomeProvider from '../context/HomeProvider';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProtectedRoutes from './ProtectedRoutes';

function AppRoutes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login">
        <Login />
      </Route>
      <HomeProvider>
        <ProtectedRoutes path="/home" component={Home} />

        <ProtectedRoutes path="/favorites" component={Favorites} />
      </HomeProvider>
    </Switch>
  );
}

export default AppRoutes;
