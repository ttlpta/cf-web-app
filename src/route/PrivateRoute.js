/* eslint-disable react/jsx-filename-extension */
import { Redirect, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import useAuth from '../hooks/useAuth';

const PrivateRouter = ({ children, noLayout = false, ...rest }) => {
  const {hasLogin} = useAuth();
  const authInfo = hasLogin();
  const routeRender = ({location}) => {
    if (authInfo) {
        if (noLayout) 
          return <>{children}</>;
          
        return (<Layout>{children}</Layout>);
    }

    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location },
        }}
      />
    );
  };

  return <Route {...rest} render={routeRender} />;
};

export default PrivateRouter;
