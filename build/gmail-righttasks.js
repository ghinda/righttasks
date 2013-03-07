/*
 * RightTasks Extension
 * Adds your Tasks to the right side in Gmail
 * 
 * (c) Ionut Colceriu - https://github.com/ghinda
 * 
 */

var rightTasks = function() {

	var $body = document.body,
		$iframe = document.createElement('iframe'),
		$mailContainer;
	
	// set iframe details
		$iframe.src = 'https://mail.google.com/tasks/ig?pli=1';
	$iframe.className = 'gmail-righttasks';
	
	var position = function() {
		
		// set the widget top to match the main container top
		$iframe.style.paddingTop = $mailContainer.offsetTop + 'px';
		
	};
	
	var init = function() {
		
		// get the main gmail container
		$mailContainer = document.querySelector('.AO');
		
		// position the widget
		position();
		
		// add the iframe to the body
		$body.appendChild($iframe);
	};
	
	// reveal methods
	return {
		init: init,
		position: position
	}
	
}();


// give it some time to load Gmail
setTimeout(function() {
	rightTasks.init();
}, 2000);

// reposition the widget when the page resizes
window.addEventListener('resize', function() {
	rightTasks.position();
});

