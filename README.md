RightTasks for Gmail™ [![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=ghinda&url=https://github.com/ghinda/gmail-righttasks&title=gmail-righttasks&language=javascript&tags=github&category=software)
=======================================

[RightTasks for Chrome](https://chrome.google.com/webstore/detail/right-tasks-for-gmail/hgniockidojcaaolfcbbkaaakbjdebpe)

[RightTasks for Firefox](https://addons.mozilla.org/en-US/firefox/addon/righttasks-for-gmail/)

[RightTasks for Opera](https://addons.opera.com/en/extensions/details/righttasks-for-gmailtm/)

RightTasks is a browser extension that puts your Google Tasks in a sidebar in Gmail, like in Google Calendar.

This is especially useful if you keep Gmail open and want to see your tasks at all times.

You can use all the features available in the official tasks widget, such as:
* "Create a task based on the open message", which you can use from the "More > Add to Tasks" menu or with the "SHIFT + T" keyboard shortcut while viewing an email
* The "G then K" keyboard shortcut, which shifts the cursor from Gmail to Tasks.


Development
-----------

* To run the extension in Chrome, load the `/extension` folder as an unpacked extension.

* To run the extension in Firefox install `jpm` with `npm install jpm -g`, then run `jpm run` in the `/extension` folder.


Build
-----

* To build the extension for Chrome just pack the contents of the `/extension` folder as a zip file. Exclude the `package.json` file, because it's Firefox specific.

* To build the extension for Firefox, run `jpm xpi` in the `/extension` folder.


Contributors
------------

* [kenny3794](https://github.com/kenny3794)


License
-------

RightTasks is free software under the GPLv3. For more
information, see <https://www.gnu.org/copyleft/gpl.html> or the accompanying LICENSE file.

