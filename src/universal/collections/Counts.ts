import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

interface ICount {
  value: number,
}

const Counts = new Mongo.Collection<ICount>('counts')

export default Counts

if (Meteor.isServer) {
  Meteor.publish('counts', function (_id) {
      Counts.upsert({_id}, {$set: {value: 0}})
      this.ready()

      const interval = Meteor.setInterval(() => {
        console.error('setting interval...')
        Counts.update({_id}, {$inc: {value: 2}})
      }, 2000)
      this.onStop(() => Meteor.clearInterval(interval))
      return Counts.find({_id})
  })
}
