/* RightTasks Extension
 */

var css = require('./core.css')

var gmailLegacy = require('./plugins/gmail-legacy/gmail-legacy')
var generic = require('./plugins/generic/generic')

var plugins = [
  gmailLegacy,
  generic
]

Promise
  .all(plugins.map((p) => Promise.resolve(p.active())))
  .then((res) => {
    res.some((r, index) => {
      if (r === true) {
        plugins[index].init()
        return true
      }
    })
  })

