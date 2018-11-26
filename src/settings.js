// defaults
var browser = require('./util/browser')

function createStore (plugin, defaultSettings) {
  var settings = Object.assign({}, defaultSettings)
  var changeEvent = `${plugin}-change`
  var listeners = []
  browser.storage.sync.get(plugin).then((res) => {
    Object.assign(settings, res[plugin])
    triggerChange()
  })

  function get (key) {
    return settings[key]
  }

  function set (key, value) {
    settings[key] = value

    var store = {}
    store[plugin] = settings
    browser.storage.sync.set(store)

    triggerChange()
  }

  function triggerChange () {
    var message = {
      type: changeEvent,
      settings: settings
    }
    var frames = Array.from(window.frames)
    frames.forEach((f) => {
      f.postMessage(message, '*')
    })
    window.parent.postMessage(message, '*')
    window.postMessage(message, '*')
  }

  function change (listener) {
    listeners.push(listener)
  }

  window.addEventListener('message', (message) => {
    if (message.data && message.data.type === changeEvent) {
      Object.assign(settings, message.data.settings)
      listeners.forEach((l) => l())
    }
  })

  return {
    get: get,
    set: set,
    change: change
  }
}

module.exports = createStore
