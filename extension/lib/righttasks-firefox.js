/* RightTasks for Gmail
 * Firefox Extension
 */

var pageMod = require('sdk/page-mod');
var data = require('sdk/self').data;

pageMod.PageMod({
  include: 'https://mail.google.com/*',
  contentScriptWhen: 'ready',
  contentScriptFile: data.url('righttasks.js'),
  contentStyleFile: data.url('righttasks.css')
});

