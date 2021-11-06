import { Suspense, lazy } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import PrivateRouter from './PrivateRoute';
import Loading from './components/Loading';

import reduxStore from './redux/store';

import './App.scss';

const Dashboard = lazy(() => import('./pages/DashBoard'));
const Profile = lazy(() => import('./pages/Profile'));
const Login = lazy(() => import('./pages/Login'));
const Page500 = lazy(() => import('./pages/Page500'));

function App() {
  return (
    <Provider store={reduxStore}>
      <Router>
        <Suspense fallback={Loading()}>
          <Page500>
            <Switch>
              <Route path="/login" exact component={Login} />
              <PrivateRouter path="/" exact>
                <Dashboard/>
              </PrivateRouter>
              <PrivateRouter path="/profile" exact>
                <Profile/>
              </PrivateRouter>
            </Switch>
          </Page500>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
