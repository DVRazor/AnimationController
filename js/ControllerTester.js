var ControllerTester = function(data, container){
	var scope = this;		

	var symbolList;

	var controllers = scope.controllers = [];

	var loaders = {};
	
	window.images = {};	

	createjs.Ticker.setFPS(25);

	scope.createController = function(width=300, height=300, scaleX=1, scaleY=1){

		var $animationController = $("<div class='animation-controller'></div>");		
		$animationController.css("max-width", width + 'px');
		$animationController.css("min-width", "300px");
		container.append($animationController);		

		var $canvas = $('<canvas>');
		var canvas = $canvas[0];	
			
		$canvas.attr({"width":width, "height":height});		
		$canvas.css({"width":width +'px', "height":height + 'px'});		
		
		$animationController.append($canvas);	

		var $selectSymbol, $rangeSelect, $loopsInput;
		/*
		██╗███╗   ██╗████████╗███████╗██████╗ ███████╗ █████╗  ██████╗███████╗███████╗
		██║████╗  ██║╚══██╔══╝██╔════╝██╔══██╗██╔════╝██╔══██╗██╔════╝██╔════╝██╔════╝
		██║██╔██╗ ██║   ██║   █████╗  ██████╔╝█████╗  ███████║██║     █████╗  ███████╗
		██║██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗██╔══╝  ██╔══██║██║     ██╔══╝  ╚════██║
		██║██║ ╚████║   ██║   ███████╗██║  ██║██║     ██║  ██║╚██████╗███████╗███████║
		╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝╚══════╝

		*/
			
		// SELECT SYMBOL
		var $symbolSelectionInterface = createSymbolSelectionInterface();
		$animationController.append($symbolSelectionInterface);

		// SELECT RANGE
		var $rangeSelectionInterface = createRangeSelectionInterface();
		$animationController.append($rangeSelectionInterface);		

		// ANIMATION INTERFACE

		var $animationInterface = createAnimationInterface();
		$animationController.append($animationInterface);	

		// SCALING INTERFACE

		var $scalingInterface = createScalingInterface();
		$animationController.append($scalingInterface);	

		// POSITION INTERFACE

		var $positionInterface = createPositionInterface();
		$animationController.append($positionInterface);	

		// DELETE BUTTON

		var $deleteBtn = $("<button id='delete-btn' class='delete-btn' title='Remove'>X</button>")
		$deleteBtn.on('click', function(){
			var index = controllers.indexOf(controller);
			controllers.splice(index, 1);
			$animationController.remove();
		});
		$animationController.append($deleteBtn);
 
		/* INIT CONTROLLER
		██╗███╗   ██╗██╗████████╗
		██║████╗  ██║██║╚══██╔══╝
		██║██╔██╗ ██║██║   ██║   
		██║██║╚██╗██║██║   ██║   
		██║██║ ╚████║██║   ██║   
		╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝   
		*/

		var controller = new Controller(data, canvas, scaleX, scaleY);
		scope.controllers.push(controller);
		controller.loadSymbol($selectSymbol.val(), onAnimationLoaded);

		/* CREATING FUNCTIONS
		███████╗██╗   ██╗███╗   ██╗ ██████╗███████╗
		██╔════╝██║   ██║████╗  ██║██╔════╝██╔════╝
		█████╗  ██║   ██║██╔██╗ ██║██║     ███████╗
		██╔══╝  ██║   ██║██║╚██╗██║██║     ╚════██║
		██║     ╚██████╔╝██║ ╚████║╚██████╗███████║
		╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝╚══════╝
		*/
		function createSymbolSelectionInterface(){
			$symbolSelectionInterface = $("<div class='symbol-selection'>");

			var $label = $("<label>Symbol:&nbsp</label>")
			$symbolSelectionInterface.append($label);

			$selectSymbol = $("<select class='select-dropdown' id='symbol-dropdown'></select>");

			symbolList = getSymbolList();
		
			symbolList.forEach(function(v){
				$selectSymbol.append($("<option>").attr('value', v).text(v));
			});		

			$selectSymbol.on('change', function(){
				controller.loadSymbol($selectSymbol.val());
				loadLabels(controller);
			});
			
			$symbolSelectionInterface.append($selectSymbol);				
			
			return $symbolSelectionInterface;
		}

		function createRangeSelectionInterface(){		
			$rangeSelectionInterface = $("<div class='range-selection'>");

			// select range

			var $label = $("<label>Range:&nbsp</label>")
			$rangeSelectionInterface.append($label);

			$rangeSelect = $("<select class='select-dropdown' id='range-dropdown'></select");
			// $rangeSelect.attr('data-controller-index', controllers.length);

			$rangeSelectionInterface.append($rangeSelect);			

			return $rangeSelectionInterface;
		}

		function createAnimationInterface(){
			var $animationInterface = $("<div class='animation-interface'></div>");		

			// PLAY

			var $playBtn = $("<button id='play' class='animation-btn'>Play</button>");				
			$playBtn.on("click", function(){								
				controller.play($rangeSelect.val(), $loopsInput.val(), onRangeFinished);
			});
			$animationInterface.append($playBtn);

			// PAUSE

			var $pauseBtn = $("<button id='pause' class='animation-btn'>Pause</button>");	
			$pauseBtn.on("click", function(){
				controller.pause();
			});
			$animationInterface.append($pauseBtn);

			// FLIP X

			var $flipXBtn = $("<button id='flip-x' class='animation-btn'>FlipX</button>");	
			$flipXBtn.on("click", function(){
				controller.flipX();
			});
			$animationInterface.append($flipXBtn);

			// FLIP Y

			var $flipYBtn = $("<button id='flip-y' class='animation-btn'>FlipY</button>");	
			$flipYBtn.on("click", function(){
				controller.flipY();
			});
			$animationInterface.append($flipYBtn);			


			// PLAY RANDOM

			var $playSequence = $("<button id='play-sequence' class='animation-btn'>Play sequence</button>");	
			$playSequence.on("click", function(){
				var labels = controller.getLabels();
				var array = [];
				for(var i = 0; i < 3; i++){
					var r = Math.floor(Math.random() * labels.length);
					array.push(labels[r]);
				}
				controller.play(array, $loopsInput.val(), onRangesFinished);			
			});
			$animationInterface.append($playSequence);		
			
			// LOOPS INPUT	

			var $loopsWrapper = $("<div class='loops'>");
	
			// LABEL 		

			var $labelForLoopsInput = $('<label>').text('Num of loops: ');
			$loopsWrapper.append($labelForLoopsInput);

			// INPUT

			$loopsInput = $("<input id='loops-input' class='loops-input' 'type='text' value='1'>");		
			$loopsWrapper.append($loopsInput);

			$animationInterface.append($loopsWrapper);	


			return $animationInterface;
		}		

		function createScalingInterface(){
			var $scalingInterface = $("<div class='scaling-interface'></div>");

			// SCALE X

			var $scaleXWrapper = $("<div class='scaleXWrapper'>");

			var $labelForScaleXInput = $('<label>').text('ScaleX: ');
			var $scaleXInput = $("<input id='scale-x-input' class='scale-input' 'type='text' value='1'>");	

			$scaleXWrapper.append($labelForScaleXInput);
			$scaleXWrapper.append($scaleXInput);

			// SCALE Y		

			var $scaleYWrapper = $("<div class='scaleYWrapper'>");	

			var $labelForScaleYInput = $('<label>').text('ScaleY: ');
			var $scaleYInput = $("<input id='scale-y-input' class='scale-input' 'type='text' value='1'>");	

			$scaleXWrapper.append($labelForScaleYInput);
			$scaleXWrapper.append($scaleYInput);		

			// OK BUTTON

			$okBtn = $("<button id='okBtn' class='scale-btn'>OK</button>");
			$okBtn.on('click', function(){							
				controller.setScale($scaleXInput.val(), $scaleYInput.val());			
			});
			$rangeSelectionInterface.append($okBtn);		

			$scalingInterface.append($scaleXWrapper);
			$scalingInterface.append($scaleYWrapper);
			$scalingInterface.append($okBtn);

			return $scalingInterface;
		}

		function createPositionInterface(){
			var $positionInterface = $("<div class='position-interface'></div>");

			var $positionXWrapper = $("<div class='positionXWrapper'>");

			var $labelForPositionXInput = $('<label>').text('X: ');
			var $positionXInput = $("<input id='position-x-input' class='position-input' 'type='text' value='" + canvas.width / 2 + "'>");	

			$positionXWrapper.append($labelForPositionXInput);
			$positionXWrapper.append($positionXInput);			

			var $positionYWrapper = $("<div class='positionYWrapper'>");	

			var $labelForpositionYInput = $('<label>').text('Y: ');
			var $positionYInput = $("<input id='position-y-input' class='position-input' 'type='text' value='" + canvas.height / 2 + "'>");	

			$positionXWrapper.append($labelForpositionYInput);
			$positionXWrapper.append($positionYInput);		

			$okBtn = $("<button id='okBtn' class='position-btn'>OK</button>");
			$okBtn.on('click', function(){							
				controller.setPosition($positionXInput.val(), $positionYInput.val());			
			});
			$rangeSelectionInterface.append($okBtn);		

			$positionInterface.append($positionXWrapper);
			$positionInterface.append($positionYWrapper);
			$positionInterface.append($okBtn);

			return $positionInterface;

		}
		/*
		 ██████╗ █████╗ ██╗     ██╗     ██████╗  █████╗  ██████╗██╗  ██╗███████╗
		██╔════╝██╔══██╗██║     ██║     ██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██╔════╝
		██║     ███████║██║     ██║     ██████╔╝███████║██║     █████╔╝ ███████╗
		██║     ██╔══██║██║     ██║     ██╔══██╗██╔══██║██║     ██╔═██╗ ╚════██║
		╚██████╗██║  ██║███████╗███████╗██████╔╝██║  ██║╚██████╗██║  ██╗███████║
		 ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝

		*/


		function onAnimationLoaded(){		
			console.log('animation ready');
			loadLabels(controller);
		}

		function onRangeFinished(){
			console.log('range finished');
		}
		function onRangesFinished(){
			console.log('all ranges finished');
		}

		function getSymbolList(){
			var list = [];
			for(var prop in data){
				list.push(prop);
			}
			return list;
		}

		function loadLabels(){				
			var labels = controller.getLabels();
			if(!labels) return;

			$rangeSelect.empty();

			for(var i = 0; i < labels.length; i++){

				$rangeSelect.append($("<option>").attr('value', labels[i]).text(labels[i]));
			};
		}
	}	
}