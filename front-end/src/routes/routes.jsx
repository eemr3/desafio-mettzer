import { Redirect, Route, Switch } from 'react-router-dom';
import HomeProvider from '../context/HomeProvider';
import Home from '../pages/Home';
import Login from '../pages/Login';

function AppRoutes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login">
        <Login />
      </Route>
      <HomeProvider>
        <Route path="/home" component={Home} />
      </HomeProvider>
    </Switch>
  );
}

export default AppRoutes;
