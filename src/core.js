/* RightTasks Extension
 */

var css = require('./core.css')

var gmailLegacy = require('./plugins/gmail-legacy/gmail-legacy')
var gmailMaterial = require('./plugins/gmail-material/gmail-material')

var plugins = [
  gmailLegacy,
  gmailMaterial
]

plugins.forEach((p) => p.init())
