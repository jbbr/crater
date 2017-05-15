import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

interface ICount {
  value: number,
}

const Counts = new Mongo.Collection<ICount>('counts')

export default Counts

if (Meteor.isServer) {
  console.log('ISSERVER')

  Meteor.publish('counts', function (_id) {
      Counts.upsert({_id}, {$set: {value: 0}})
      this.ready()

      console.log('Subscribing counts now - starting interval')
      const interval = Meteor.setInterval(() => {
        Counts.update({_id}, {$inc: {value: 10}})
      }, 1000)
      this.onStop(() => Meteor.clearInterval(interval))
      return Counts.find({_id})
  })
} else {
  console.log('ISCLIENT')
}
