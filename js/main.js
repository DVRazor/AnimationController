$(document).ready(function() {
	 $.getJSON("assets/symbols.json", function (res) {	 		 
	 	
	 	var playZone = $('.play-zone');
	 	var CT = window.CT = new ControllerTester(res, playZone);	 

	 	var createBtn = $('#create');
	 	createBtn.on('click', function(){
	 		var width = $('#animation-width').val();
			var height = $('#animation-height').val();
			var scaleX = $('#animation-scale-x').val();
			var scaleY = $('#animation-scale-y').val();

	 		CT.createController(width, height, scaleX, scaleY);
	 	});		

	 	var clearAllBtn = $('#clear');
	 	clearAllBtn.on('click', function(){
	 		$(".delete-btn").click();
	 	});
	 		
	 });	 	
});