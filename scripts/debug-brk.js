#!/usr/bin/env babel-node

import start from './start'
import spawn from 'crater-util/lib/spawn'
import path from 'path'

process.on('SIGINT', () => process.exit(1))

start({
  commandOptions: ['--debug-brk'],
})
spawn('node-inspector', [], {cwd: path.resolve(__dirname, '..'), stdio: 'inherit'})
