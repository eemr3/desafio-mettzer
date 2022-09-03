import { Redirect, Route, Switch } from 'react-router-dom';
import HomeProvider from '../context/HomeProvider';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Login from '../pages/Login';

function AppRoutes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="/favorites" component={Favorites} />
      <HomeProvider>
        <Route path="/home" component={Home} />
      </HomeProvider>
    </Switch>
  );
}

export default AppRoutes;
