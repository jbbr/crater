#!/usr/bin/env babel-node

import asyncScript from 'crater-util/lib/asyncScript'
import path from 'path'
import buildMeteor from './build-meteor'
import installMeteorDeps from './installMeteorDeps'
import launch from 'smart-restart'

process.env.NODE_ENV = 'development'
process.env.USE_DOTENV = '1'

const root = path.resolve(__dirname, '..')
const src = path.join(root, 'src')

async function start(options = {}) {
  if (process.argv.indexOf('--fast') < 0) {
    await buildMeteor()
    await installMeteorDeps()
  }
  require('./devServer')
  launch({
    commandOptions: options.commandOptions || [],
    main: path.join(src, 'index.js'),
  })
}

export default start

if (!module.parent) {
  process.on('SIGINT', () => process.exit(0))
  process.on('SIGTERM', () => process.exit(0))
  asyncScript(start, {
    exitOnSuccess: false,
  })
}

