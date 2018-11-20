var createSettings = require('../../settings')
var defaultSettings = {
  appBar: false
}
var settings = null

var pluginClass = 'rt-gmail-material'
var iframeClass = 'rt-gmail-material-iframe'
var appBarSelector = '.nH.bAw.nn'
var btnDisabledClass = 'aT5-aOt-I-JE'

var menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>'

var checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>'

var hideAppBarClass = 'rt-hide-appbar'
var dropdownItemActiveClass = 'rt-dropdown-item-active'

var appBar = null
var dropdownMenus = [
  {
    type: 'button',
    attr: () => {
      var appBar = settings.get('appBar')
      return {
        className: `rt-dropdown-item ${!appBar ? dropdownItemActiveClass : ''}`,
        innerHTML: `
          Hide Applications Bar
          <span class="rt-button-status">${checkIcon}</span>
        `,
        onclick: () => {
          settings.set('appBar', !settings.get('appBar'))
          setAppBar()
        }
      }
    }
  },
  {
    type: 'a',
    attr: () => {
      return {
        className: 'rt-dropdown-item',
        innerHTML: 'About RightTasks',
        href: 'http://www.righttasks.com/',
        target: '_blank'
      }
    }
  }
]

var dropdownVisibleClass = 'rt-dropdown-visible'
function toggleDropdown (dropdown, visible, toggle) {
  if (visible) {
    var toggleRect = toggle.getBoundingClientRect()
    var dropdownRect = dropdown.getBoundingClientRect()
    dropdown.style.left = `${toggleRect.right - dropdownRect.width}px`
    dropdown.style.top = `${toggleRect.top}px`

    return dropdown.classList.add(dropdownVisibleClass)
  }

  dropdown.classList.remove(dropdownVisibleClass)
}

function setAttributes (elem, attributes) {
  Object.keys(attributes).forEach((name) => {
    if (elem[name] !== attributes[name]) {
      elem[name] = attributes[name]
    }
  })
}

function addDropdown () {
  var btn = document.createElement('button')
  btn.type = 'button'
  btn.innerHTML = menuIcon
  btn.className = 'rt-button'

  var header = document.body.querySelector('.B9yICe')
  header.appendChild(btn)

  var dropdown = document.createElement('div')
  dropdown.className = 'rt-dropdown'
  document.body.appendChild(dropdown)

  var ul = document.createElement('ul')
  var buttons = []
  dropdownMenus.forEach((item) => {
    var li = document.createElement('li')
    var elem = document.createElement(item.type)
    setAttributes(elem, item.attr())
    li.appendChild(elem)
    ul.appendChild(li)

    buttons.push(elem)
  })

  dropdown.appendChild(ul)

  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    toggleDropdown(dropdown, true, btn)
  })
  document.body.addEventListener('click', () => toggleDropdown(dropdown))

  // refresh attributes
  settings.change(() => {
    buttons.forEach((btn, i) => {
      setAttributes(btn, dropdownMenus[i].attr())
    })
  })
}

function iframeStartup () {
  document.body.classList.add(iframeClass)
  addDropdown()
}

function triggerClick (element) {
  ['mousedown', 'mouseup'].forEach((event) => {
    element.dispatchEvent(new MouseEvent(event, {bubbles: true}))
  })
}

function appBarReady (mutations, observer) {
  appBar = document.querySelector(appBarSelector)
  if (!appBar) {
    return false
  }

  settings.change(setAppBar)

  var btnObserver = new MutationObserver(clickTasks)
  btnObserver.observe(appBar, {
    attributes: true,
    subtree: true
  })
  observer.disconnect()
}

function setAppBar () {
  if (settings.get('appBar')) {
    document.body.classList.remove(hideAppBarClass)
  } else {
    document.body.classList.add(hideAppBarClass)
  }
}

function clickTasks (mutations, observer) {
  var btn = appBar.querySelector('div[style*="/tasks2"]').parentNode
  if (!btn || btn.classList.contains(btnDisabledClass)) {
    return false
  }

  triggerClick(btn)
  observer.disconnect()
}

function startup () {
  document.body.classList.add(pluginClass)

  var appBarObserver = new MutationObserver(appBarReady)
  appBarObserver.observe(document.body, {childList: true})
}

function init () {
  var run = null
  if(
    window.location.hostname === 'mail.google.com'
    // new gmail
    && document.body.hasAttribute('jscontroller')
  ) {
    run = startup
  } else if (window.location.hostname === 'tasks.google.com') {
    run = iframeStartup
  }

  if (run) {
    settings = createSettings('gmail-material', defaultSettings)
    run()
  }
}

module.exports = {
  init: init
}
