import React from 'react'
import {Meteor} from 'meteor/meteor'

import Counter from './Counter'

import './App.css'

console.log('LOAD App.tsx', React)

const App = () => (
  <div>
    <h1>Welcome to Crater!</h1>
    <Counter />
    <h3>Meteor.settings.public.test: <span className="settings-test">{Meteor.settings.public.test}</span></h3>
  </div>
)

export default App
