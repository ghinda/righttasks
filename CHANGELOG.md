
### 2.3 (September 5, 2013)

* Fix the overlapping tasks widget over the chat sidebar, when using the right-side-chat Labs feature.
* Fix layout conflicts with the Streak for Gmail Chrome extension.
* New functionality to minimize the tasks widget to the right side, saving the current state to Local Storage.

### 2.2 (August 15, 2013)

* Fix the overlapping tasks widget over the dropdown user menu from the top-right.

### 2.1 (August 15, 2013)

* Fix the overlapping tasks widget when composing new messages in full-screen mode.

### 2.0 (August 14, 2013)

* Fix the extension not working if Gmail was set in a language other than English.

### 1.9 (June 18, 2013)

* Prevent the ESC shortcut key from closing the tasks widget. In case the widget is closed with the ESC key from inside the widget, it will reopen.

### 1.8 (June 17, 2013)

* Add focus stealing prevention to the tasks widget, to prevent the tasks list from stealing focus on page load, and making Gmail shortcuts unusable without manually getting focus to the page.

### 1.7 (June 10, 2013)

* Fix an issues with the settings dropdown being overlapped by the tasks iframe, caused by the "Boomerang for Gmail" extension.

### 1.6 (June 9, 2013)

* Additional fixes for the fluid height styles in the tasks iframe still not being applied.

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
