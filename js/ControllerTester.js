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

		var params = 
			{
				width: width,
				heigth: height,
				scaleX: scaleX,
				scaleY: scaleY
			};		

		$animationController.append($canvas);	

		var $selectSymbol, $selectDropdown, $loopsInput;
			
		
		// SELECT SYMBOL
		var $symbolSelectionInterface = createSymbolSelectionInterface();
		$animationController.append($symbolSelectionInterface);

		// SELECT RANGE
		var $rangeSelectionInterface = createRangeSelectionInterface();
		$animationController.append($rangeSelectionInterface);		

		// ANIMATION INTERFACE

		var $animationInterface = createAnimationInterface();

		$animationController.append($animationInterface);		

		// DELETE BUTTON

		var $deleteBtn = $("<button id='delete-btn' class='delete-btn'>X</button>")
		$deleteBtn.on('click', function(){
			var index = controllers.indexOf(controller);
			controllers.splice(index, 1);
			$animationController.remove();
		});
		$animationController.append($deleteBtn);	

		var controller = new Controller(data, canvas, params);
		scope.controllers.push(controller);
		controller.loadSymbol($selectSymbol.val(), onAnimationLoaded);

		// CREATE INTERFACES FUNCTIONS

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

			$selectDropdown = $("<select class='select-dropdown' id='range-dropdown'></select");
			$selectDropdown.attr('data-controller-index', controllers.length);

			$selectDropdown.on('change', function(){
				controller.setRange($selectDropdown.val());
			});

			$rangeSelectionInterface.append($selectDropdown);			

			return $rangeSelectionInterface;
		}

		function createAnimationInterface(){
			var $animationInterface = $("<div class='animation-interface'></div>");		

			// PLAY

			var $playBtn = $("<button id='play' class='animation-btn'>Play</button>");				
			$playBtn.on("click", function(){								
				controller.play($selectDropdown.val(), $loopsInput.val(), onRangeFinished);
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
	
			// LABEL FOR LOOPS INPUT			

			var $labelForLoopsInput = $('<label>').text('Num of loops: ');
			$animationInterface.append($labelForLoopsInput);

			// LOOPS NUM INPUT

			var $loopsInput = $("<input id='loops-input' class='loops-input' 'type='text' value='1'>");		
			$animationInterface.append($loopsInput);


			return $animationInterface;
		}		

		function onAnimationLoaded(){		
			console.log('animation loaded');
			loadLabels(controller);
		}

		function onRangeFinished(){
			console.log('range finished');
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

			var controllerIndex = controllers.indexOf(controller);
			var rangeDropdown = $("#range-dropdown[data-controller-index='" + controllerIndex + "']");		
			rangeDropdown.empty();

			for(var i = 0; i < labels.length; i++){
				rangeDropdown.append($("<option>").attr('value', labels[i]).text(labels[i]));
			};
		}
	}	
}