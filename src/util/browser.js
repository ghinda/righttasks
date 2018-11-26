/* globals chrome */
/*
 * basic webextension api polyfill
 *
 */

function promisify (api) {
  return (params) => {
    return new Promise((resolve, reject) => {
      api(params, (res) => resolve(res))
    })
  }
}

var browser = window.browser || {}

if (typeof window.browser === 'undefined') {
  browser.storage = {
    sync: {
      get: promisify(chrome.storage.sync.get),
      set: promisify(chrome.storage.sync.set)
    }
  }
}

module.exports = browser
