/* RightTasks Extension
 */

var legacy = require('./plugins/gmail-legacy/gmail-legacy')

if (legacy.active()) {
  console.log('is legacy')

  return legacy.init()
}


console.log('not legacy')


