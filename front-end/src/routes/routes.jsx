import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';

function AppRoutes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default AppRoutes;
