import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router';

import Layout from './app/layouts/Layout';
import Footer from './app/components/Footer';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Footer} />
      </Route>
    </Router>,
app);
