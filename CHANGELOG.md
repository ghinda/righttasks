## [3.2.0] - 2020-05-02

* Add support for Gmail May 2024.
* Fix issues with blocking the Quick Settings button.
* Upgrade to Manifest v3.

## [3.1.3] - 2020-06-15

* Fix issues with the menu button not showing up.
* Fix issues with the Gmail AppBar still taking up space when hidden.

## [3.1.2] - 2019-07-24

* Fix issues with saving settings (Chrome extension API polyfill).
* Fix issues with the task list not toggling on-off on certain accounts.

## [3.1.1] - 2019-07-24

* Fix issues with scrolling the task list.

## [3.1.0] - 2019-03-03

* Allow enlarging the tasks sidebar up to 600px.

## [3.0.1] - 2018-12-19

* Fix issues with covering up add-task and he first task, when having lots of tasks or on small screens. 
* Fix issues with sometimes not loading the css in the tasks iframe.

## [3.0.0] - 2018-11-26

* Added support for the new Gmail: 
* Hide the Applications Bar from the top right options dropdown.
* Toggle the tasks sidebar on/off by clicking the gray separator.
* Resize the sidebar by dragging the separator.
* Tweaks for a cleaner tasks layout.

## [2.6.8] - 2017-10-10

* Fix extra right-side padding in the new Gmail. RightTasks does not run in the new Gmail.

## [2.6.7] - 2017-07-29

* Fix broken task list because of changed markup in Google Tasks.

## [2.6.6] - 2017-06-19

* Fix missing scrollbars in the Completed Tasks view.

## [2.6.5] - 2017-06-19

* Fix missing scrollbars on the tasks list.

## [2.6.4] - 2017-06-14

* WebExtensionify the Firefox add-on to be compatible with multiprocess.

## [2.6.3] - 2015-06-30

* Fix layout issues when using the Multiple Inboxes labs feature.
* Reduce padding in the chat widget when using the Right-Side Chat labs feature.

## [2.6.2] - 2015-06-03

* Fix positioning issues with the notifications shown at the bottom of the tasks sidebar (eg. when deleting tasks).


## [2.6.1] - 2015-05-26

* Removed the 5s interval that set the sidebar position. It's no longer needed because the top-bar, containing the Settings buttons, does not change height anymore when changing the `Display density` (comfortable, cozy, compact).


## [2.6.0] - 2015-02-19

* Switch the license to GPLv3.
* Support for Firefox.
* Folder structure changes to be able to build all the extensions from the same codebase.

## [2.5] - 2014-11-25

* Don't trigger the extension in Gmail pop-ups.
* Fix maximize button not taking up the whole height, when the task list is minimized.
* Fix issues with the layout when using the right-side-chat Labs feature, and minimizing the task list.

## [2.4] - 2014-07-20

* Fix issue with the tasks list not taking up the full height.
* Fix scroll and height issues in the "Completed Tasks" view.

## [2.3] - 2013-09-05

* Fix the overlapping tasks widget over the chat sidebar, when using the right-side-chat Labs feature.
* Fix layout conflicts with the Streak for Gmail Chrome extension.
* New functionality to minimize the tasks widget to the right side, saving the current state to Local Storage.

## [2.2] - 2013-08-15

* Fix the overlapping tasks widget over the dropdown user menu from the top-right.

## [2.1] - 2013-08-15

* Fix the overlapping tasks widget when composing new messages in full-screen mode.

## [2.0] - 2013-08-14

* Fix the extension not working if Gmail was set in a language other than English.

### [1.9] - 2013-06-18

* Prevent the ESC shortcut key from closing the tasks widget. In case the widget is closed with the ESC key from inside the widget, it will reopen.

## [1.8] - 2013-06-17

* Add focus stealing prevention to the tasks widget, to prevent the tasks list from stealing focus on page load, and making Gmail shortcuts unusable without manually getting focus to the page.

## [1.7] - 2013-06-10

* Fix an issues with the settings dropdown being overlapped by the tasks iframe, caused by the "Boomerang for Gmail" extension.

## [1.6] - 2013-06-09

* Additional fixes for the fluid height styles in the tasks iframe still not being applied.

## [1.5] - 2013-06-08

* Check if the contents of the tasks iframe have loaded, by checking for a class on the body element inside it. This fixes the issue with the styles in the tasks iframe (that are making it's height fluid) not being applied.
* Check for the height of the top bars every 5s, to fix the issues caused by selecting a different layout (cozy, comfortable, etc.) without triggering the resize event.

## [1.4] - 2013-05-24

* Use a different method for finding the Tasks container, by searching through the .AD containers for the. This fixes conflicts with the "New Message" and other popups.

## [1.3] - 2013-05-23

* Fix the z-index issue that was causing the compose mail popup to be placed bellow the tasks sidebar.

## [1.2] - 2013-05-22

* Use the default Google Tasks widget, that can be activated in Gmail without the extension from the Mail dropdown menu on the top left. The extension now triggers the Tasks widget automatically and positions it as a column on the right.
* The new behavior fixes a number of issues, and you are now able to properly add e-mails as tasks using the standard SHIFT + T shortcut, among all the other features of the official tasks widget.

## [1.0] - 2013-03-10

* Initial Chrome extension release, using the Google Tasks iframe used by most extensions/widgets
