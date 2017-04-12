	var Controller = function(data, canvas, params){
		var scope = this;

		// used for preloading
		window.loadedSymbols = window.loadedSymbols || {};
		window.loadedJS = window.loadedJS || {};

		var loader = new createjs.LoadQueue(false);

		var scaleX, scaleY;

		if(params){
			scaleX = params.scaleX;
			scaleY = params.scaleY;
		}

		var stage = new createjs.Stage(canvas);

		var symbol = null; // movieclip
		var symbolName = null;

		var symbolWidth = null; // movieclip width
		var symbolHeight = null; // movieclip height

		var labels = null;
		var startFrame = null;
		var endFrame = null;

		var rangeFinishedCB;
		var rangeLoops = 1;

		scope.loadSymbol = function(name, animationReadyCB){		
			symbolName = name;	
			loadSymbol(animationReadyCB);								
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
			
			if(typeof animationReadyCB == 'function') animationReadyCB();

			createjs.Ticker.addEventListener('tick', animate);
		}

		scope.play = function(range, loops, callback){		
			if(!symbol || !range) return;
			
			if(isNaN(+loops)) rangeLoops = 1;
			else rangeLoops = +loops;

			if(typeof callback == 'function') rangeFinishedCB = callback;
			
			scope.setRange(range);

			symbol.paused = false;
		}

		scope.pause = function(){
			if(!symbol) return;
			
			symbol.paused = !symbol.paused;
		}

		scope.setRange = function(range){
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
				else{

					if(rangeLoops > 1){
						rangeLoops--;
						symbol.gotoAndPlay(startFrame);
					}	
					// infinite loop
					else if(rangeLoops == -1){
						symbol.gotoAndPlay(startFrame);
						if(typeof rangeFinishedCB == 'function') rangeFinishedCB();
					}
					// play finished
					else{									
						symbol.paused = true;
						if(typeof rangeFinishedCB == 'function') rangeFinishedCB();
					}
				}
			}		
		}

		function loadSymbol(animationReadyCB){					
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