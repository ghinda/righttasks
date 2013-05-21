/*
 * RightTasks Chrome Extension
 * Adds your Tasks to the right side in Gmail
 * 
 * (c) Ionut Colceriu - https://github.com/ghinda
 * 
 */

var rightTasks = function() {

	var $body = document.body,
		$tasksContainer,
		$iframe = document.createElement('iframe'),
		$mailContainer;
		
	// set iframe details
	$iframe.src = 'https://mail.google.com/tasks/ig?pli=1';
	$iframe.className = 'gmail-righttasks';
	
	var position = function() {
		
		// set the widget top to match the main container top
		if($tasksContainer) {
			$tasksContainer.style.paddingTop = $mailContainer.offsetTop + 'px';
		}
		
	};
	
	var triggerClick = function($element) {
		
		var evt1 = document.createEvent('MouseEvents');
		var evt2 = document.createEvent('MouseEvents');
		evt1.initMouseEvent('mousedown', true, true, window, 1, 1, 1, 1, 1, false, false, false, false, 0, null);
		evt2.initMouseEvent('mouseup', true, true, window, 1, 1, 1, 1, 1, false, false, false, false, 0, null);
		
		$element.dispatchEvent(evt1);
		$element.dispatchEvent(evt2);
		
	};
	
	var findTasksContainer = function() {
	
		$tasksContainer = document.querySelector('.AD');
		
		if($tasksContainer) {
			$tasksContainer.className += ' gmail-righttasks';
			position();
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
			
			var $tasksButton = document.querySelector('.aki.pp .jQjAxd [role=menuitem]:nth-child(3)');
			
			triggerClick($tasksButton);
			
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

// wait for the gmail ui to load
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

