import React from 'react'
import {createContainer} from 'react-meteor-data'
import {Meteor} from 'meteor/meteor'

import Counts from '../collections/Counts'

console.log('LOAD counter.tsx', React)

const Counter = ({value, isLoading}) => {
  console.log('Running counter with', value, isLoading)
  if (isLoading) return <span>Loading...</span>

  return (
    <div>
      Counter - {value}
    </div>
  )
}

const CounterContainer = createContainer(() => {
  if (!Meteor.isClient) return {}

  const handle = Meteor.subscribe('counts', 'a')
  const count = Counts.findOne()

  return {
    value: count && count.value,
    isLoading: ! handle.ready(),
  }
}, Counter)

export default CounterContainer
