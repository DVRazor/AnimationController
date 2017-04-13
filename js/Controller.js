	var Controller = function(data, canvas, scaleX, scaleY){
		var scope = this;

		// used for preloading
		window.loadedSymbols = window.loadedSymbols || {};
		window.loadedJS = window.loadedJS || {};

		var loader = new createjs.LoadQueue(false);

		var scaleX = scaleX;
		var scaleY = scaleY;		

		var stage = new createjs.Stage(canvas);

		var symbol = null; // current movieclip
		var symbolName = null; // current movieclip name

		var symbolWidth = null; // movieclip width
		var symbolHeight = null; // movieclip height

		var labels = null;
		var startFrame = null;
		var endFrame = null;

		var rangeFinishedCB; // callback on range finished
		var rangeLoops = 1; // num of times to play ranges
		var ranges = []; // ranges to play
		var currentRange = 0; // currently playing range

		scope.loadSymbol = function(name, animationReadyCB){		
			symbolName = name;	
			loadSymbol(animationReadyCB);								
		}				

		scope.play = function(range, loops, callback){		
			if(!symbol || !range) return;

			resetRanges();
			
			if(!loops) rangeLoops = 1;
			else rangeLoops = +loops;

			if(typeof callback == 'function') rangeFinishedCB = callback;			

			if(Array.isArray(range)){
				ranges = range;
			}
			else{
				ranges.push(range);
			}
			
			setRange(ranges[0]);

			symbol.paused = false;

			console.log(ranges);
		}

		scope.pause = function(){
			if(!symbol || endFrame === symbol.currentFrame) return;
			
			symbol.paused = !symbol.paused;
		}

		scope.getLabels = function(){				
			var arr = [];
			for(var prop in labels){
				arr.push(prop);
			}
			return arr;
		}

		scope.flipX = function(){
			if(!symbol || !symbol.scaleX) return;
			symbol.scaleX = -symbol.scaleX;
			stage.update();			
		}

		scope.flipY = function(){
			if(!symbol || !symbol.scaleY) return;
			symbol.scaleY = -symbol.scaleY;
			stage.update();			
		}

		scope.setScale = function(x, y){
			symbol.scaleX = scaleX = x;
			symbol.scaleY = scaleY = y;
			stage.update();
		}

		scope.setPosition = function(x,y){
			symbol.x =  x;
			symbol.y =  y;
			stage.update();
		}

		var onLoad = function(animationReadyCB){			
			symbol = new lib[symbolName]();
			symbol.scaleX = scaleX;
			symbol.scaleY = scaleY;
			symbol.regX = symbolWidth / 2;
			symbol.regY = symbolHeight / 2;
			symbol.x = canvas.width / 2;
			symbol.y = canvas.height / 2;

			symbol.paused = true;

			addSymbolToStage();

			resetRanges();
			
			if(typeof animationReadyCB == 'function') animationReadyCB();

			createjs.Ticker.addEventListener('tick', animate);
		}

		function animate(){
			if(symbol.paused) return;
			updateRange();			
		}

		function updateRange(){						
			if(startFrame !== null && endFrame !== null){				
				// if current frame is within range limits
				if(symbol.currentFrame >= startFrame && symbol.currentFrame < endFrame){
					stage.update();
				}
				else if(currentRange < ranges.length - 1){					
					currentRange++;
					setRange(ranges[currentRange]);
				}
				else{
					if(rangeLoops > 1){
						rangeLoops--;
						currentRange = 0;
						// symbol.gotoAndPlay(startFrame);
						setRange(ranges[currentRange]);
					}	
					// infinite loop
					else if(rangeLoops == -1){
						// symbol.gotoAndPlay(startFrame);
						currentRange = 0;
						setRange(ranges[currentRange]);
						if(typeof rangeFinishedCB == 'function') rangeFinishedCB();
					}
					// play finished
					else{		
						rangeLoops = 1;
						symbol.paused = true;
						if(typeof rangeFinishedCB == 'function') rangeFinishedCB();
					}
				}
			}		
		}

		function setRange(range){
			if(!symbol || !range) return;
			
			startFrame = labels[range][0];
			endFrame = labels[range][1];	

			if(symbol.paused){
				symbol.gotoAndStop(startFrame);
				stage.update();
			}
			else{				
				symbol.gotoAndPlay(startFrame);				
			}
		}

		function resetRanges(){
			currentRange = 0;
			ranges = [];
			rangeLoops = 1;
			rangeFinishedCB = null;
		}

		function loadSymbol(animationReadyCB){		
			resetRanges();

			var symbolJson = data[symbolName];
			symbolWidth = symbolJson.width;
			symbolHeight = symbolJson.height;
			labels = symbolJson.labels;		

			var hasNewFiles = false;

			// if symbol is ready
			if(loadedSymbols[symbolName]){			
				onLoad(animationReadyCB);
			}	
			else{				
				loader.id = symbolName;
				loader.addEventListener("complete", onLoad.bind(scope, animationReadyCB));

				loader.addEventListener("fileload", handleFileLoad);

				for(var file in symbolJson.images){							
					var image = symbolJson.images[file];

					//if image has not been loaded yet				
					if(!images[image.id]){
						hasNewFiles = true;
						loader.loadFile({id: image.id, src: symbolJson.path + image.src});
					}
				}		
				
				// check if js file is already loaded			
				if(!loadedJS[symbolJson.jsFile]){		
					hasNewFiles = true;		
					loader.loadFile({id: symbolJson.jsFile, src: symbolJson.path + symbolJson.jsFile});	
				}
				// if no new files have been loaded
				if(!hasNewFiles){	
					onLoad(animationReadyCB);										
				}		
			}
		}

		function handleFileLoad(evt){						
			if (evt.item.type == "image"){			
				images[evt.item.id] = evt.result; 			
			}
			if (evt.item.type == "javascript"){			
				loadedJS[evt.item.id] = evt.result; 			
			}
		}

		function addSymbolToStage(){
			symbol.gotoAndStop(0);
			stage.removeAllChildren();
			stage.addChild(symbol);		
			stage.update();
		}
	}