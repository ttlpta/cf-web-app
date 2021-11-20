import { Suspense, lazy } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import PrivateRouter from './PrivateRoute';
import Loading from './components/Loading';

import reduxStore from './redux/store';

import './App.scss';

// const Dashboard = lazy(() => import('./pages/DashBoard'));
// const Home = lazy(() => import('./pages/Home'));
const New = lazy(() => import('./pages/New'));
const NewDetail = lazy(() => import('./pages/NewDetail'));
const Schedule = lazy(() => import('./pages/Schedule'));
const ScheduleDetail = lazy(() => import('./pages/ScheduleDetail'));
const ArtistProfile = lazy(() => import('./pages/ArtistProfile'));
// const Profile = lazy(() => import('./pages/Profile'));
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
              <Route path="/news" exact component={New} />
              <Route path="/news/detail/:id" exact component={NewDetail} />
              <Route path="/schedules" exact component={Schedule} />
              <Route path="/schedules/detail/:id" exact component={ScheduleDetail} />
              <Route path="/artist-profile" exact component={ArtistProfile} />
              <Route path="/" exact component={TopPage} />
            </Switch>
          </Page500>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
