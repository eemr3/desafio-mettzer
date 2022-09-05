import { Redirect, Route, Switch } from 'react-router-dom';
import AppProvider from '../context/AppProvider';
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
      <AppProvider>
        <ProtectedRoutes path="/home" component={Home} />

        <ProtectedRoutes path="/favorites" component={Favorites} />
      </AppProvider>
    </Switch>
  );
}

export default AppRoutes;
