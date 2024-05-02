/* RightTasks Extension
 */

var css = require('./content.css')

var gmailMaterial = require('./plugins/gmail-material/gmail-material')

var plugins = [
  gmailMaterial,
]

plugins.forEach((p) => p.init())
