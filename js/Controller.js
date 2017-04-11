	var Controller = function(rootElement, scaleX=1, scaleY=1){
		var scope = this;

		scope.scaleX = scaleX;
		scope.scaleY = scaleY;

		scope.stage = null;
		scope.symbol = null; // movieclip
		// dom objects
		scope.symbolSelector = null; 
		scope.sceneSelector = null;

		scope.rootElement = rootElement;		

		scope.loadSymbol = function(){
			loadSymbol(scope);								
		}		

		scope.onLoad = function(e){
			// handleComplete(e);
			var symbolName = scope.symbolSelector.val();
			scope.symbol = new lib[symbolName]();
			scope.symbol.scaleX = scope.scaleX;
			scope.symbol.scaleY = scope.scaleY;
			addSymbolToStage(scope.stage, scope.symbol);
		}
	}