import { Suspense, lazy } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import PrivateRouter from './PrivateRoute';
import Loading from './components/Loading';

import reduxStore from './redux/store';

import './App.scss';

// const Dashboard = lazy(() => import('./pages/DashBoard'));
const Home = lazy(() => import('./pages/Home'));
const New = lazy(() => import('./pages/New'));
const NewDetail = lazy(() => import('./pages/NewDetail'));
const Schedule = lazy(() => import('./pages/Schedule'));
const ScheduleDetail = lazy(() => import('./pages/ScheduleDetail'));
const Profile = lazy(() => import('./pages/Profile'));
const TopPage = lazy(() => import('./pages/TopPage'));

const Login = lazy(() => import('./pages/Login'));
const Page500 = lazy(() => import('./pages/Page500'));

function App() {
  return (
    <Provider store={reduxStore}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Page500>
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/" component={Home} exact />
              <Route path="/news" component={New} exact />
              <Route path="/news/detail" component={NewDetail} exact />
              <Route path="/schedules" component={Schedule} exact />
              <Route path="/schedules/detail/:id" component={ScheduleDetail} exact />
              <PrivateRouter path="/profile" exact>
                <Profile />
              </PrivateRouter>
              <PrivateRouter path="/top-page" exact>
                <TopPage />
              </PrivateRouter>
            </Switch>
          </Page500>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
