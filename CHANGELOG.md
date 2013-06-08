
### 1.5 (June 8, 2013)

* Check if the contents of the tasks iframe have loaded, by checking for a class on the body element inside it. This fixes the issue with the styles in the tasks iframe (that are making it's height fluid) not being applied.
* Check for the height of the top bars every 5s, to fix the issues caused by selecting a different layout (cozy, comfortable, etc.) without triggering the resize event.

### 1.4 (May 24, 2013)

* Use a different method for finding the Tasks container, by searching through the .AD containers for the. This fixes conflicts with the "New Message" and other popups.

### 1.3 (May 23, 2013)

* Fix the z-index issue that was causing the compose mail popup to be placed bellow the tasks sidebar.

### 1.2 (May 22, 2013)

* Use the default Google Tasks widget, that can be activated in Gmail without the extension from the Mail dropdown menu on the top left. The extension now triggers the Tasks widget automatically and positions it as a column on the right.
* The new behavior fixes a number of issues, and you are now able to properly add e-mails as tasks using the standard SHIFT + T shortcut, among all the other features of the official tasks widget.


### 1.0 (March 10, 2013)

* Initial Chrome extension release, using the Google Tasks iframe used by most extensions/widgets
