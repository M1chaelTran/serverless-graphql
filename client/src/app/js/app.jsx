import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Relay from 'react-relay';

import store from './store';
import routes from './routes';

console.log(
  Relay.QL`
    query test {
      User {
        name
      }
    }
  `
)
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
  , document.getElementById('root')
);

