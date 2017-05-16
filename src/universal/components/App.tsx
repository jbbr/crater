import React from 'react'
import {Meteor} from 'meteor/meteor'

import Counter from './Counter'
import ClickCounter from './ClickCounter'

import './App.css'

const App = () => (
  <div>
    <h1>Welcome to Crater!</h1>
    <Counter />
    <ClickCounter />
    <h3>Meteor.settings.public.test: <span className="settings-test">{Meteor.settings.public.test}</span></h3>
  </div>
)

export default App
