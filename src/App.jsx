import { Suspense, lazy } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Loading from './components/Loading';

import reduxStore from './redux/store';

import './App.scss';
import { PUBLIC_ROUTE } from './route/route';
import PublicRoute from './route/PublicRoute';

const Page500 = lazy(() => import('./pages/Page500'));


function App() {
  return (
    <Provider store={reduxStore}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Page500>
            <Switch>
              {PUBLIC_ROUTE.map((entry, key) => (
                <PublicRoute exact {...entry} key={`${entry.title}-${key}`} />
              ))}
            </Switch>
          </Page500>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
