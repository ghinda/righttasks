/*
 * RightTasks Chrome Extension
 * Adds your Tasks to the right side in Gmail
 * 
 * (c) Ionut Colceriu - https://github.com/ghinda
 * 
 */

var rightTasks = function() {

	var $tasksContainer,
		$mailContainer;
	
	var position = function() {
		
		// set the widget top to match the main container top
		if($tasksContainer) {
			$tasksContainer.style.paddingTop = $mailContainer.offsetTop + 'px';
		}
		
	};
	
	// trigger click events, as binded by Gmail
	var triggerClick = function($element) {
		
		var evt1 = document.createEvent('MouseEvents');
		var evt2 = document.createEvent('MouseEvents');
		evt1.initMouseEvent('mousedown', true, true, window, 1, 1, 1, 1, 1, false, false, false, false, 0, null);
		evt2.initMouseEvent('mouseup', true, true, window, 1, 1, 1, 1, 1, false, false, false, false, 0, null);
		
		$element.dispatchEvent(evt1);
		$element.dispatchEvent(evt2);
		
	};
	
	// find the tasks container added dynamically by Gmail
	var findTasksContainer = function() {
	
		var possibleContainers = document.querySelectorAll('.AD'),
			possibleHeader,
			i;

		// find the tasks container, from all the .AD containers (the ones with the black titlebars)
		// by searching through the titles
		for(i = 0; i < possibleContainers.length; i++) {

			possibleHeader = possibleContainers[i].querySelector('table .Hp');

			if(possibleHeader && possibleHeader.innerHTML.indexOf('Tasks') !== -1) {
				$tasksContainer = possibleContainers[i];
				break;
			}

		}
		
		if($tasksContainer) {
			$tasksContainer.className += ' gmail-righttasks';
			position();

			$tasksContainer.parentNode.className += ' gmail-righttasks-container';

			var cssURL = chrome.extension.getURL('gmail-righttasks.css');

			var tasksIframe = document.getElementById('tasksiframe').contentDocument;

			// get the dom of the tasks iframe
			var getIframeDom = function() {

				var html = tasksIframe.getElementsByTagName('html')[0];

				if(html) {

					var head = tasksIframe.getElementsByTagName('head')[0];
					var cssnode = tasksIframe.createElement('link');

					cssnode.type = 'text/css';
					cssnode.rel = 'stylesheet';
					cssnode.href = cssURL;

					head.appendChild(cssnode);

					html.className += ' tasks-frame';
				}

				// check that the html elements exists and has the proper class
				if(!html || html.className.indexOf('tasks-frame') === -1) {
					setTimeout(getIframeDom, 500);
				}

			}();

		} else {
			
			setTimeout(findTasksContainer, 500);
			
		}
		
	};
	
	var init = function() {
		
		var $mailButton = document.querySelector('.aki.pp > div');
		
		// open mail menu
		triggerClick($mailButton);
		
		// close mail menu
		triggerClick($mailButton);
		
		// give it some time to render the markup
		setTimeout(function() {
			
			// get the tasks button from the mail dropdown
			var $tasksButton = document.querySelector('.aki.pp .jQjAxd [role=menuitem]:nth-child(3)');
			
			// click the tasks button
			triggerClick($tasksButton);
			
			// get the 
			findTasksContainer();
			
		}, 10);
		
		
		// get the main gmail container
		$mailContainer = document.querySelector('.AO');

	};
	
	// reveal methods
	return {
		init: init,
		position: position
	}
	
}();

// wait for the Gmail ui to load
// http://anurag-maher.blogspot.ro/2012/12/developing-google-chrome-extension-for.html
(function () {
	var head;
	var max_retry = 200;

	// Check if Gmail UI frame is ready 
	function isGmailUIFrame(doc) {
		try {
			return document.getElementsByClassName('aic').length > 0;
		} catch (e) {
			return false;
		}
	}

	// Loop to check if the Gmail UI is loaded
	var waitForGmailToLoad = function() {
		var top_frame, canvas_frame;
		try {
			top_frame = window.top.document;
			if (top_frame.getElementById('canvas_frame')) {
			}
		} catch (e) {}
		top_frame = window.document;

		if(top_frame && isGmailUIFrame(top_frame)) 
		{
			head = top_frame;
			
			// Gmail UI is loaded
			rightTasks.init();
			
			return head;
		}
		else{
			max_retry = max_retry -1;
			if(max_retry > 0)
				window.setTimeout(waitForGmailToLoad, 500);
		}
		return (head !== undefined);
	};
	waitForGmailToLoad();
}());

// reposition the widget when the page resizes
window.addEventListener('resize', function() {
	rightTasks.position();
});

