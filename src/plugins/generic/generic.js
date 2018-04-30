function init () {
  var iframe = document.createElement('iframe')
  iframe.src = 'https://mail.google.com/tasks/ig'
  iframe.className = 'rt-iframe'

  document.documentElement.appendChild(iframe)
}

module.exports = {
  name: 'generic',
  active: () => true,
  init: init
}
