import React, {Component} from 'react'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import routes from '../universal/routes/index'
import {syncHistoryWithStore} from 'react-router-redux'

console.log('LOAD Root.tsx', React)

interface IProps {
  store: any,
}

export default class Root extends Component<IProps, {}> {
  render() {
    const {store} = this.props
    const history = syncHistoryWithStore(browserHistory, store, {
      selectLocationState: (state) => state.get('router')
    })
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes(store)} />
        </div>
      </Provider>
    )
  }
}
