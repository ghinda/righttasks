function init () {
  if(
    window.location.hostname !== 'mail.google.com'
    // don't run in gmail pop-ups
    || document.body.className.indexOf('xE') !== -1
    // or in the old gmail
    || !document.body.hasAttribute('jscontroller')
  ) {
    return false
  }

  console.log('start gmail material')
}

module.exports = {
  init: init
}
