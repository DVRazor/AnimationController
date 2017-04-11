var AnimationController = function(data, container, animationReadyCB, labelFinishedCB, animationFinishedCB){
	var scope = this;	

	var symbolsJson = data;

	var symbolList = getSymbolList();

	scope.controllers = [];

	var loaders = {};
	
	var loadedSymbols = {};
	var loadedJS = {};

	window.images = {};

	createjs.Ticker.setFPS(25);
	
	var Controller = function(){
		var scope = this;

		scope.scaleX = null;
		scope.scaleY = null;

		scope.stage = null;
		scope.symbol = null; // movieclip

		scope.symbolWidth = null;
		scope.symbolHeight = null;
		scope.labels = null;

		// dom objects
		scope.symbolSelector = null; 
		scope.sceneSelector = null;

		scope.rootElement = null;		

		scope.loadSymbol = function(){
			loadSymbol(scope);								
		}		

		scope.onLoad = function(e){
			var symbolName = scope.symbolSelector.val();
			scope.symbol = new lib[symbolName]();
			scope.symbol.scaleX = scope.scaleX;
			scope.symbol.scaleY = scope.scaleY;
			addSymbolToStage(scope.stage, scope.symbol);

			loadLabels(scope);

			createjs.Ticker.addEventListener('tick', scope.stage);
		}

		scope.play = function(){
			if(!scope.symbol) return;
			
			scope.symbol.paused = false;
		}

		scope.pause = function(){
			if(!scope.symbol) return;
			
			scope.symbol.paused = true;
		}

		scope.setScene = function(){
			if(!scope.symbol) return;

			var scene = scope.sceneSelector.val();			
			var startFrame = scope.labels[scene][0];
			scope.symbol.gotoAndPlay(startFrame);
		}

		scope.getLabels = function(){
			return scope.labels;
		}
	}

	scope.createController = function(width=300, height=300, scaleX=1, scaleY=1){			

		var $animationController = $("<div class='animation-controller'></div>");
		$animationController.css("max-width", width);
		container.append($animationController);

		var controller = new Controller();
		controller.rootElement = $animationController;
		controller.scaleX = scaleX;
		controller.scaleY = scaleY;

		scope.controllers.push(controller);

		var $canvas = $('<canvas>');
		var canvas = $canvas[0];	
		// debugger;	
		$canvas.attr({"width":width, "height":height});		
		$canvas.css({"width":width +'px', "height":height + 'px'});

		$animationController.append($canvas);	
		
		var stage = new createjs.Stage(canvas);
		controller.stage = stage;

		// SELECT SYMBOL
		var $symbolSelectionInterface = createSymbolSelectionInterface(controller);
		$animationController.append($symbolSelectionInterface);

		// SELECT SCENE
		var $sceneSelectionInterface = createSceneSelectionInterface(controller);
		$animationController.append($sceneSelectionInterface);

		// ANIMATION INTERFACE

		$animationInterface = $("<div class='animation-interface'></div>");		

		$playBtn = $("<button id='play' class='animation-btn'>Play</button>");				
		$playBtn.on("click", function(){
			controller.play();
		});
		$animationInterface.append($playBtn);

		$pauseBtn = $("<button id='pause' class='animation-btn'>Pause</button>");	
		$pauseBtn.on("click", function(){
			controller.pause();
		});
		$animationInterface.append($pauseBtn);

		$animationController.append($animationInterface);		
	}

	function getSymbolList(){
		var list = [];
		for(var prop in symbolsJson){
			list.push(prop);
		}
		return list;
	}

	function createSymbolSelectionInterface(controller){
		$symbolSelectionInterface = $("<div class='symbol-selection'>");
		// $symbolSelectionInterface.css({"margin" : "5px auto"});		

		var $select = $("<select class='select-dropdown'></select")
		// .css( {"margin-right" : "10px", "width" : "120px"});
		controller.symbolSelector = $select;

		symbolList.forEach(function(v){
			$select.append($("<option>").attr('value', v).text(v));
		});
		
		$symbolSelectionInterface.append($select);		
		$loadBtn = $("<button id='load' class='select-btn'>Load</button>");		
		$loadBtn.on('click', function(){							
			controller.loadSymbol();
		});
		$symbolSelectionInterface.append($loadBtn);

		controller.loadBtn = $loadBtn;

		return $symbolSelectionInterface;
	}

	function createSceneSelectionInterface(controller){
		$sceneSelectionInterface = $("<div class='scene-selection'>");
		// $sceneSelectionInterface.css({"margin" : "5px auto", "padding-top" : "10px", "border-top" : "solid 1px grey"});		

		var $select = $("<select class='select-dropdown'></select")
		// .css( {"margin-right" : "10px", "width" : "120px"});
		// symbolList.forEach(function(v){
		// 	$select.append($("<option>").attr('value', v).text(v));
		// });		
		$sceneSelectionInterface.append($select);		

		controller.sceneSelector = $select;

		$okBtn = $("<button id='okBtn' class='select-btn'>OK</button>");
		$okBtn.on('click', function(){							
			controller.setScene();			
		});
		$sceneSelectionInterface.append($okBtn);

		return $sceneSelectionInterface;
	}

	function createSymbol($select){
		var val = $select.val();
		// if symbol was already loaded
		if(loadedSymbols[val]){
			onLoadedCB(loadedSymbols[val]);
		}	
	}

	function addSymbolToStage(stage, symbol){
		symbol.gotoAndStop(0);
		stage.removeAllChildren();
		stage.addChild(symbol);		
		stage.update();
	}

	function loadLabels(controller){
		if(!controller.labels) return;

		controller.sceneSelector.empty();

		for(var label in controller.labels){
			controller.sceneSelector.append($("<option>").attr('value', label).text(label));
		};
	}

	function handleFileLoad(evt){						
		if (evt.item.type == "image"){			
			images[evt.item.id] = evt.result; 			
		}
		if (evt.item.type == "javascript"){			
			loadedJS[evt.item.id] = evt.result; 			
		}
	}


	function loadSymbol(controller){
		var symbolName = controller.symbolSelector.val();

		var symbolJson = symbolsJson[symbolName];
		controller.symbolWidth = symbolJson.width;
		controller.symbolHeight = symbolJson.height;
		controller.labels = symbolJson.labels;		

		var hasNewFiles = false;

		// if symbol is ready
		if(loadedSymbols[symbolName]){			
			controller.onLoad();
		}	
		else{
			loaders[symbolName] = new createjs.LoadQueue(false);
			loaders[symbolName].id = symbolName;
			loaders[symbolName].addEventListener("complete", controller.onLoad);

			loaders[symbolName].addEventListener("fileload", handleFileLoad);

			for(var file in symbolJson.images){							
				var image = symbolJson.images[file];

				//if image has not been loaded yet				
				if(!images[image.id]){
					hasNewFiles = true;
					loaders[symbolName].loadFile({id: image.id, src: symbolJson.path + image.src});
				}
			}		
			
			// check if js file is already loaded			
			if(!loadedJS[symbolJson.jsFile]){		
				hasNewFiles = true;		
				loaders[symbolName].loadFile({id: symbolJson.jsFile, src: symbolJson.path + symbolJson.jsFile});	
			}
			// if no new files have been loaded
			if(!hasNewFiles){	
				controller.onLoad();										
			}		
		}
	}
}