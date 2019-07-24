/* globals chrome */
/*
 * basic webextension api polyfill
 *
 */

function promisify (api, method) {
  return (params) => {
    return new Promise((resolve, reject) => {
      api[method](params, (res) => {
        if (chrome && chrome.runtime && chrome.runtime.lastError) {
          return reject(chrome.runtime.lastError)
        }

        resolve(res)
      })
    })
  }
}

var browser = window.browser || {}

if (typeof window.browser === 'undefined') {
  browser.storage = {
    sync: {
      get: promisify(chrome.storage.sync, 'get'),
      set: promisify(chrome.storage.sync, 'set')
    }
  }
}

module.exports = browser
