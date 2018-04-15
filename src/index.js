
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import reducers from 'reducers'
import Layout from 'containers/layout'
import Layout_2 from 'containers/layout_2'
import Coin from 'containers/coin'
import Lending from 'containers/lending'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Lending} />
            </Route>
            <Route component={Layout_2}>
                <Route path='/trade/:id' component={Coin} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
