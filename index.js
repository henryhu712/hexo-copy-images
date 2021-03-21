/**
 * Hexo-copy-images
 */

import { fs } from 'fs'

function copy(filename) {

  const data = fs.readFileSync(filename)

  console.log('In copy: ', data)
}

module.exports = copy
