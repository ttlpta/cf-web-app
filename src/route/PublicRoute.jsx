import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';

const PublicRoute = ({ title, children, ...rest }) => {
  const routeRender = () => (
    <>
      <Helmet>
        <title>Fan Club {title}</title>
      </Helmet>
      {children}
    </>
  );
  return <Route {...rest} render={routeRender} />;
};

export default PublicRoute;
