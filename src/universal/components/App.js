import React, {Component} from 'react'
import {Meteor} from 'meteor/meteor'

import Counter from './Counter'

import styles from './App.css'

const App = () => (
  <div className={styles.app}>
    <h1>Welcome to Crater!</h1>
    <Counter />
    <h3>Meteor.settings.public.test: <span className="settings-test">{Meteor.settings.public.test}</span></h3>
  </div>
)

export default App