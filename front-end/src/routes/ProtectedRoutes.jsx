import Cookies from 'js-cookie';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  const token = Cookies.get('token');

  return (
    <Route
      {...rest}
      render={() => (token ? <Component {...rest} /> : <Redirect to="/login" />)}
    />
  );
};

export default ProtectedRoutes;
