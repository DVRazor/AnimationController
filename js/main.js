$(document).ready(function() {
	 $.getJSON("assets/symbols.json", function (res) {	 	

	 	var playZone = $('.play-zone');
	 	window.AC = new AnimationController(res, playZone, onAnimationReady);	 

	 	var createBtn = $('#create');
	 	createBtn.on('click', function(){
	 		var width = $('#animation-width').val();
			var height = $('#animation-height').val();
			var scaleX = $('#animation-scale-x').val();
			var scaleY = $('#animation-scale-y').val();

	 		AC.createController(width, height, scaleX, scaleY);
	 	});

	 	var clearAllBtn = $('#clear');
	 	clearAllBtn.on('click', function(){
	 		playZone.empty();
	 	});

	 	function onAnimationReady(){
	 		console.log('animation loaded');
	 	}
	 		
	 });	 	
});