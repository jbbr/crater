#!/usr/bin/env babel-node

import asyncScript from 'crater-util/lib/asyncScript'
import buildMeteor from './build-meteor'
import buildServer from './build-server'
import buildClient from './build-client'

async function build() {
  await buildMeteor()
  await Promise.all([buildClient(), buildServer()])
}

export default build

if (!module.parent) {
  process.on('SIGINT', () => process.exit(1))
  asyncScript(build)
}
