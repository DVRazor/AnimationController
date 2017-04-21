(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.players = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.LeftPlayer();
	this.instance.setTransform(15,27.2);

	this.instance_1 = new lib.RightPlayer();
	this.instance_1.setTransform(258,28.3);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(73.5,110.2,365.6,204.1);


// symbols:
(lib._1_ShoeLRed = function() {
	this.initialize(img._1_ShoeLRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,25);


(lib._1_ShoeRRed = function() {
	this.initialize(img._1_ShoeRRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,25);


(lib._2_HandL1 = function() {
	this.initialize(img._2_HandL1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,58);


(lib._2_HandL1_Red = function() {
	this.initialize(img._2_HandL1_Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,58);


(lib._2_HandL2 = function() {
	this.initialize(img._2_HandL2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,19);


(lib._2_HandL3 = function() {
	this.initialize(img._2_HandL3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,21);


(lib._2_HandR1 = function() {
	this.initialize(img._2_HandR1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,50);


(lib._2_HandR1_Red = function() {
	this.initialize(img._2_HandR1_Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,50);


(lib._2_HandR2 = function() {
	this.initialize(img._2_HandR2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,36);


(lib._2_HandR3 = function() {
	this.initialize(img._2_HandR3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,25);


(lib._2_Head = function() {
	this.initialize(img._2_Head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,41);


(lib._2_LegL1 = function() {
	this.initialize(img._2_LegL1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,38);


(lib._2_LegL2 = function() {
	this.initialize(img._2_LegL2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,68);


(lib._2_LegR1 = function() {
	this.initialize(img._2_LegR1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,39);


(lib._2_LegR2 = function() {
	this.initialize(img._2_LegR2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,45);


(lib._2_ShoeL = function() {
	this.initialize(img._2_ShoeL);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,25);


(lib._2_ShoeL_White = function() {
	this.initialize(img._2_ShoeL_White);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,26);


(lib._2_ShoeR = function() {
	this.initialize(img._2_ShoeR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,23);


(lib._2_ShoeR_White = function() {
	this.initialize(img._2_ShoeR_White);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,29);


(lib._2_Torso = function() {
	this.initialize(img._2_Torso);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,69);


(lib._2_Torso_Red = function() {
	this.initialize(img._2_Torso_Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,69);


(lib._3_HandL1 = function() {
	this.initialize(img._3_HandL1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,51);


(lib._3_HandL1Red = function() {
	this.initialize(img._3_HandL1Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,51);


(lib._3_HandL2 = function() {
	this.initialize(img._3_HandL2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,37);


(lib._3_HandL3 = function() {
	this.initialize(img._3_HandL3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,26);


(lib._3_HandR1 = function() {
	this.initialize(img._3_HandR1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,46);


(lib._3_HandR1Red = function() {
	this.initialize(img._3_HandR1Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,46);


(lib._3_HandR2 = function() {
	this.initialize(img._3_HandR2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,46);


(lib._3_HandR3 = function() {
	this.initialize(img._3_HandR3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,26);


(lib._3_Head = function() {
	this.initialize(img._3_Head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,40);


(lib._3_LegL1 = function() {
	this.initialize(img._3_LegL1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,63);


(lib._3_LegL2 = function() {
	this.initialize(img._3_LegL2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,80);


(lib._3_LegR1 = function() {
	this.initialize(img._3_LegR1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,64);


(lib._3_LegR2 = function() {
	this.initialize(img._3_LegR2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,76);


(lib._3_ShoeL = function() {
	this.initialize(img._3_ShoeL);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,24);


(lib._3_ShoeLRed = function() {
	this.initialize(img._3_ShoeLRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,21);


(lib._3_ShoeR = function() {
	this.initialize(img._3_ShoeR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,24);


(lib._3_ShoeRRed = function() {
	this.initialize(img._3_ShoeRRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,23);


(lib._3_Torso = function() {
	this.initialize(img._3_Torso);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,73);


(lib._3_TorsoRed = function() {
	this.initialize(img._3_TorsoRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,73);


(lib._5_HandL1 = function() {
	this.initialize(img._5_HandL1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,33);


(lib._5_HandL1_Red = function() {
	this.initialize(img._5_HandL1_Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,33);


(lib._5_HandL2 = function() {
	this.initialize(img._5_HandL2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,30);


(lib._5_HandL3 = function() {
	this.initialize(img._5_HandL3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,19);


(lib._5_HandR1 = function() {
	this.initialize(img._5_HandR1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,36);


(lib._5_HandR1_Red = function() {
	this.initialize(img._5_HandR1_Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,36);


(lib._5_HandR2 = function() {
	this.initialize(img._5_HandR2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,40);


(lib._5_HandR3 = function() {
	this.initialize(img._5_HandR3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,18);


(lib._5_Head = function() {
	this.initialize(img._5_Head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,38);


(lib._5_LegL1 = function() {
	this.initialize(img._5_LegL1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,75);


(lib._5_LegL2 = function() {
	this.initialize(img._5_LegL2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,57);


(lib._5_LegR1 = function() {
	this.initialize(img._5_LegR1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,79);


(lib._5_LegR2 = function() {
	this.initialize(img._5_LegR2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,65);


(lib._5_Neck = function() {
	this.initialize(img._5_Neck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,22);


(lib._5_ShoeL = function() {
	this.initialize(img._5_ShoeL);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,28);


(lib._5_ShoeL_White = function() {
	this.initialize(img._5_ShoeL_White);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,24);


(lib._5_ShoeR = function() {
	this.initialize(img._5_ShoeR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,24);


(lib._5_ShoeR_White = function() {
	this.initialize(img._5_ShoeR_White);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,21);


(lib._5_Torso = function() {
	this.initialize(img._5_Torso);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,92);


(lib._5_Torso_Red = function() {
	this.initialize(img._5_Torso_Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,92);


(lib._6_HandL1 = function() {
	this.initialize(img._6_HandL1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,40);


(lib._6_HandL1Red = function() {
	this.initialize(img._6_HandL1Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,40);


(lib._6_HandL2 = function() {
	this.initialize(img._6_HandL2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,34);


(lib._6_HandL3Down = function() {
	this.initialize(img._6_HandL3Down);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,18);


(lib._6_HandL3Up = function() {
	this.initialize(img._6_HandL3Up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,15);


(lib._6_HandR1 = function() {
	this.initialize(img._6_HandR1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,40);


(lib._6_HandR1Red = function() {
	this.initialize(img._6_HandR1Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,40);


(lib._6_HandR2 = function() {
	this.initialize(img._6_HandR2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,29);


(lib._6_HandR3 = function() {
	this.initialize(img._6_HandR3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,18);


(lib._6_Head = function() {
	this.initialize(img._6_Head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,39);


(lib._6_LegL1 = function() {
	this.initialize(img._6_LegL1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,80);


(lib._6_LegL2 = function() {
	this.initialize(img._6_LegL2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,66);


(lib._6_LegR1 = function() {
	this.initialize(img._6_LegR1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,69);


(lib._6_LegR2 = function() {
	this.initialize(img._6_LegR2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,63);


(lib._6_Neck = function() {
	this.initialize(img._6_Neck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,27);


(lib._6_ShoeL = function() {
	this.initialize(img._6_ShoeL);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,26);


(lib._6_ShoeR = function() {
	this.initialize(img._6_ShoeR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,24);


(lib._6_Torso1 = function() {
	this.initialize(img._6_Torso1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,42);


(lib._6_Torso1Red = function() {
	this.initialize(img._6_Torso1Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,42);


(lib._6_Torso2 = function() {
	this.initialize(img._6_Torso2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,46);


(lib._6_Torso2Red = function() {
	this.initialize(img._6_Torso2Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,46);


(lib._6_Torso3 = function() {
	this.initialize(img._6_Torso3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,65);


(lib._6_Torso3Red = function() {
	this.initialize(img._6_Torso3Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,65);


(lib.Ball = function() {
	this.initialize(img.Ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.Sit_Bedro_L = function() {
	this.initialize(img.Sit_Bedro_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,60);


(lib.Sit_Bedro_R = function() {
	this.initialize(img.Sit_Bedro_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,67);


(lib.Sit_Golen_L = function() {
	this.initialize(img.Sit_Golen_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,53);


(lib.Sit_Golen_R = function() {
	this.initialize(img.Sit_Golen_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,58);


(lib.Sit_Golova = function() {
	this.initialize(img.Sit_Golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,48);


(lib.Sit_Mayka = function() {
	this.initialize(img.Sit_Mayka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,88);


(lib.Sit_Mayka_Red = function() {
	this.initialize(img.Sit_Mayka_Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,64);


(lib.Sit_Plecho_L = function() {
	this.initialize(img.Sit_Plecho_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,31);


(lib.Sit_Plecho_R = function() {
	this.initialize(img.Sit_Plecho_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,14);


(lib.Sit_Predpleche_L = function() {
	this.initialize(img.Sit_Predpleche_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,52);


(lib.Sit_Predpleche_R = function() {
	this.initialize(img.Sit_Predpleche_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,44);


(lib.Sit_Rukav_L = function() {
	this.initialize(img.Sit_Rukav_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,28);


(lib.Sit_Rukav_L_Red = function() {
	this.initialize(img.Sit_Rukav_L_Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,30);


(lib.Sit_Rukav_R = function() {
	this.initialize(img.Sit_Rukav_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,25);


(lib.Sit_Rukav_R_Red = function() {
	this.initialize(img.Sit_Rukav_R_Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,23);


(lib.Sit_Stopa_L = function() {
	this.initialize(img.Sit_Stopa_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,23);


(lib.Sit_Stopa_R = function() {
	this.initialize(img.Sit_Stopa_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,24);


(lib.Sit_Symbol_Stopa_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Sit_Stopa_R();
	this.instance.setTransform(-19.9,-11.9);

	this.instance_1 = new lib._1_ShoeLRed();
	this.instance_1.setTransform(-8.9,-11.2,1.255,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-11.9,40,24);


(lib.Sit_Symbol_Stopa_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Sit_Stopa_L();
	this.instance.setTransform(-18.4,-11.4);

	this.instance_1 = new lib._1_ShoeRRed();
	this.instance_1.setTransform(-12.5,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-11.4,37,23);


(lib.Sit_Symbol_Rukav_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Sit_Rukav_R();
	this.instance.setTransform(-13.9,-12.4);

	this.instance_1 = new lib.Sit_Rukav_R_Red();
	this.instance_1.setTransform(-13.9,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-12.4,28,25);


(lib.Sit_Symbol_Rukav_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Sit_Rukav_L();
	this.instance.setTransform(-16.4,-13.9);

	this.instance_1 = new lib.Sit_Rukav_L_Red();
	this.instance_1.setTransform(-16.4,-13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-13.9,33,28);


(lib.Sit_Symbol_Predpleche_R = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sit_Predpleche_R();
	this.instance.setTransform(-20.9,-21.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9,-21.9,42,44);


(lib.Sit_Symbol_Predpleche_L = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sit_Predpleche_L();
	this.instance.setTransform(-18.4,-25.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.4,-25.9,37,52);


(lib.Sit_Symbol_Plecho_R = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sit_Plecho_R();
	this.instance.setTransform(-13.4,-7.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,-7.9,27,14);


(lib.Sit_Symbol_Plecho_L = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sit_Plecho_L();
	this.instance.setTransform(-13.9,-15.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.9,-15.4,28,31);


(lib.Sit_Symbol_Mayka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Sit_Mayka();
	this.instance.setTransform(-37.4,-43.9);

	this.instance_1 = new lib.Sit_Mayka_Red();
	this.instance_1.setTransform(-32.4,-24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.4,-43.9,75,88);


(lib.Sit_Symbol_Golova = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sit_Golova();
	this.instance.setTransform(-19.9,-23.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.9,-23.9,40,48);


(lib.Sit_Symbol_Golen_R = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sit_Golen_R();
	this.instance.setTransform(-19.4,-28.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.4,-28.9,39,58);


(lib.Sit_Symbol_Golen_L = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sit_Golen_L();
	this.instance.setTransform(-16.4,-26.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.4,-26.4,33,53);


(lib.Sit_Symbol_Bedro_R = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sit_Bedro_R();
	this.instance.setTransform(-30.9,-33.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.9,-33.4,62,67);


(lib.Sit_Symbol_Bedro_L = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sit_Bedro_L();
	this.instance.setTransform(-19.4,-29.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.4,-29.9,39,60);


(lib._6_Torso3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6_Torso3();
	this.instance.setTransform(-27.9,-32.4);

	this.instance_1 = new lib._6_Torso3Red();
	this.instance_1.setTransform(-27.9,-32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-32.4,56,65);


(lib._6_Torso2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6_Torso2();
	this.instance.setTransform(-24.4,-22.9);

	this.instance_1 = new lib._6_Torso2Red();
	this.instance_1.setTransform(-24.4,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-22.9,49,46);


(lib._6_Torso1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6_Torso1();
	this.instance.setTransform(-25.9,-20.9);

	this.instance_1 = new lib._6_Torso1Red();
	this.instance_1.setTransform(-25.9,-20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-20.9,52,42);


(lib._6_ShoeR_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6_ShoeR();
	this.instance.setTransform(-17.9,-11.9);

	this.instance_1 = new lib._3_ShoeRRed();
	this.instance_1.setTransform(-17.7,-12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-11.9,36,24);


(lib._6_ShoeL_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6_ShoeL();
	this.instance.setTransform(-13.4,-12.9);

	this.instance_1 = new lib._3_ShoeLRed();
	this.instance_1.setTransform(-9.7,-7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-12.9,27,26);


(lib._6_Neck_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._6_Neck();
	this.instance.setTransform(-13.4,-13.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.4,27,27);


(lib._6_LegR2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._6_LegR2();
	this.instance.setTransform(-9.4,-31.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.4,-31.4,19,63);


(lib._6_LegR1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._6_LegR1();
	this.instance.setTransform(-15.9,-34.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.9,-34.4,32,69);


(lib._6_LegL2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._6_LegL2();
	this.instance.setTransform(-10.4,-32.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.4,-32.9,21,66);


(lib._6_LegL1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._6_LegL1();
	this.instance.setTransform(-22.4,-39.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.4,-39.9,45,80);


(lib._6_Head_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._6_Head();
	this.instance.setTransform(-14.4,-19.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.4,-19.4,29,39);


(lib._6_HandR3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._6_HandR3();
	this.instance.setTransform(-5.9,-8.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,-8.9,12,18);


(lib._6_HandR2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._6_HandR2();
	this.instance.setTransform(-6.4,-14.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.4,-14.4,13,29);


(lib._6_HandR1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6_HandR1();
	this.instance.setTransform(-8.9,-19.9);

	this.instance_1 = new lib._6_HandR1Red();
	this.instance_1.setTransform(-8.9,-19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-19.9,18,40);


(lib._6_HandL3Up_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._6_HandL3Up();
	this.instance.setTransform(-6.9,-7.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-7.4,14,15);


(lib._6_HandL3Down_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._6_HandL3Down();
	this.instance.setTransform(-6.9,-8.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-8.9,14,18);


(lib._6_HandL2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._6_HandL2();
	this.instance.setTransform(-20.4,-16.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.4,-16.9,41,34);


(lib._6_HandL1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6_HandL1();
	this.instance.setTransform(-21.9,-19.9);

	this.instance_1 = new lib._6_HandL1Red();
	this.instance_1.setTransform(-21.9,-19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-19.9,44,40);


(lib._5_Torso_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5_Torso();
	this.instance.setTransform(-32.4,-45.9);

	this.instance_1 = new lib._5_Torso_Red();
	this.instance_1.setTransform(-32.4,-45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-45.9,65,92);


(lib._5_ShoeR_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5_ShoeR();
	this.instance.setTransform(-16.9,-11.9);

	this.instance_1 = new lib._5_ShoeR_White();
	this.instance_1.setTransform(-16.9,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-11.9,34,24);


(lib._5_ShoeL_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5_ShoeL();
	this.instance.setTransform(-13.4,-13.9);

	this.instance_1 = new lib._5_ShoeL_White();
	this.instance_1.setTransform(-13.4,-13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.9,27,28);


(lib._5_Neck_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._5_Neck();
	this.instance.setTransform(-9.9,-10.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.9,-10.9,20,22);


(lib._5_LegR2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._5_LegR2();
	this.instance.setTransform(-11.4,-32.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.4,-32.4,23,65);


(lib._5_LegR1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._5_LegR1();
	this.instance.setTransform(-15.9,-39.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.9,-39.4,32,79);


(lib._5_LegL2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._5_LegL2();
	this.instance.setTransform(-10.4,-28.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.4,-28.4,21,57);


(lib._5_LegL1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._5_LegL1();
	this.instance.setTransform(-17.4,-37.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.4,-37.4,35,75);


(lib._5_Head_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._5_Head();
	this.instance.setTransform(-14.4,-18.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.4,-18.9,29,38);


(lib._5_HandR3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._5_HandR3();
	this.instance.setTransform(-9.9,-8.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.9,-8.9,20,18);


(lib._5_HandR2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._5_HandR2();
	this.instance.setTransform(-14.9,-19.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,-19.9,30,40);


(lib._5_HandR1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5_HandR1();
	this.instance.setTransform(-23.9,-17.9);

	this.instance_1 = new lib._5_HandR1_Red();
	this.instance_1.setTransform(-23.9,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-17.9,48,36);


(lib._5_HandL3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._5_HandL3();
	this.instance.setTransform(-10.9,-9.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.9,-9.4,22,19);


(lib._5_HandL2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._5_HandL2();
	this.instance.setTransform(-18.4,-14.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.4,-14.9,37,30);


(lib._5_HandL1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5_HandL1();
	this.instance.setTransform(-24.9,-16.4);

	this.instance_1 = new lib._5_HandL1_Red();
	this.instance_1.setTransform(-24.9,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-16.4,50,33);


(lib._3_Torso_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3_Torso();
	this.instance.setTransform(-40.4,-36.4);

	this.instance_1 = new lib._3_TorsoRed();
	this.instance_1.setTransform(-40.4,-36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,-36.4,81,73);


(lib._3_ShoeR_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3_ShoeR();
	this.instance.setTransform(-19.9,-11.9);

	this.instance_1 = new lib._3_ShoeRRed();
	this.instance_1.setTransform(-17.7,-10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-11.9,40,24);


(lib._3_ShoeL_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3_ShoeL();
	this.instance.setTransform(-13.9,-11.9);

	this.instance_1 = new lib._3_ShoeLRed();
	this.instance_1.setTransform(-7.9,-10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-11.9,28,24);


(lib._3_LegR2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3_LegR2();
	this.instance.setTransform(-10.9,-37.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.9,-37.9,22,76);


(lib._3_LegR1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3_LegR1();
	this.instance.setTransform(-20.9,-31.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9,-31.9,42,64);


(lib._3_LegL2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3_LegL2();
	this.instance.setTransform(-11.9,-39.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.9,-39.9,24,80);


(lib._3_LegL1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3_LegL1();
	this.instance.setTransform(-15.9,-31.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.9,-31.4,32,63);


(lib._3_Head_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3_Head();
	this.instance.setTransform(-15.9,-19.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.9,-19.9,32,40);


(lib._3_HandR3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3_HandR3();
	this.instance.setTransform(-11.9,-12.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.9,-12.9,24,26);


(lib._3_HandR2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3_HandR2();
	this.instance.setTransform(-10.4,-22.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.4,-22.9,21,46);


(lib._3_HandR1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3_HandR1();
	this.instance.setTransform(-11.4,-22.9);

	this.instance_1 = new lib._3_HandR1Red();
	this.instance_1.setTransform(-11.4,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-22.9,23,46);


(lib._3_HandL3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3_HandL3();
	this.instance.setTransform(-11.9,-12.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.9,-12.9,24,26);


(lib._3_HandL2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3_HandL2();
	this.instance.setTransform(-7.4,-18.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.4,-18.4,15,37);


(lib._3_HandL1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3_HandL1();
	this.instance.setTransform(-11.4,-25.4);

	this.instance_1 = new lib._3_HandL1Red();
	this.instance_1.setTransform(-11.4,-25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-25.4,23,51);


(lib._2_Torso_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2_Torso();
	this.instance.setTransform(-35.4,-34.4);

	this.instance_1 = new lib._2_Torso_Red();
	this.instance_1.setTransform(-35.4,-34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-34.4,71,69);


(lib._2_ShoeR_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2_ShoeR();
	this.instance.setTransform(-12.9,-11.4);

	this.instance_1 = new lib._2_ShoeR_White();
	this.instance_1.setTransform(-12.9,-11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,-11.4,26,23);


(lib._2_ShoeL_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2_ShoeL();
	this.instance.setTransform(-17.9,-12.4);

	this.instance_1 = new lib._2_ShoeL_White();
	this.instance_1.setTransform(-18.4,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-12.4,36,25);


(lib._2_LegR2_1 = function() {
	this.initialize();

	// 3_LegR2.png
	this.instance = new lib._3_LegR2();
	this.instance.setTransform(-25.1,-9.4,0.954,0.759,-46.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.1,-24.7,56.5,54.8);


(lib._2_LegR1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2_LegR1();
	this.instance.setTransform(-23.9,-19.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.9,-19.4,48,39);


(lib._2_LegL2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2_LegL2();
	this.instance.setTransform(-10.4,-33.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.4,-33.9,21,68);


(lib._2_LegL1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2_LegL1();
	this.instance.setTransform(-23.4,-18.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.4,-18.9,47,38);


(lib._2_Head_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2_Head();
	this.instance.setTransform(-16.4,-20.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.4,-20.4,33,41);


(lib._2_HandR3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2_HandR3();
	this.instance.setTransform(-8.9,-12.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.9,-12.4,18,25);


(lib._2_HandR2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2_HandR2();
	this.instance.setTransform(-11.9,-17.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.9,-17.9,24,36);


(lib._2_HandR1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2_HandR1();
	this.instance.setTransform(-10.4,-24.9);

	this.instance_1 = new lib._2_HandR1_Red();
	this.instance_1.setTransform(-10.4,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-24.9,21,50);


(lib._2_HandL3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2_HandL3();
	this.instance.setTransform(-10.9,-10.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.9,-10.4,22,21);


(lib._2_HandL2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2_HandL2();
	this.instance.setTransform(-21.4,-9.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.4,-9.4,43,19);


(lib._2_HandL1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2_HandL1();
	this.instance.setTransform(-12.9,-28.9);

	this.instance_1 = new lib._2_HandL1_Red();
	this.instance_1.setTransform(-12.9,-28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,-28.9,26,58);


(lib.RightPlayer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{naklToUp:0,upToNakl:9,naklToSit:19,sitToNakl:41,cycle:62,stop:9,"stop":19,"stop":41,"stop":62,"stop":204});

	// Layer 398
	this.instance = new lib.Ball();
	this.instance.setTransform(146,249);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(205));

	// 6_Head
	this.instance_1 = new lib._6_Head_1("single",0);
	this.instance_1.setTransform(115.7,76.9,1.009,1.047,0,-22.6,-16.9,-1,15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(167).to({startPosition:0,_off:false},0).to({regX:-1,scaleX:1,scaleY:1.01,skewX:-7.3,skewY:-5.3,x:117.3,y:58.3},2).to({regX:-0.8,scaleX:1,scaleY:1,skewX:18.3,skewY:17.6,x:127.8,y:51.1},2).to({regX:-1,regY:15.1,scaleX:1,scaleY:1,skewX:32.9,skewY:31.8,x:135.4,y:52.8},2).wait(1).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:16.3,skewY:15.8,x:126.7,y:51},3,cjs.Ease.get(-0.99)).to({regX:-0.8,regY:15,scaleX:1,scaleY:1,skewX:0,skewY:0,x:118.1,y:49},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:18.1,skewY:17.6,x:129.3,y:51.8},3,cjs.Ease.get(-0.99)).to({regX:-1,regY:15.1,scaleX:1,scaleY:1,skewX:36.4,skewY:35.3,x:140.4,y:54.5},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:15.8,skewY:15.3,x:128,y:51.3},3,cjs.Ease.get(-0.99)).to({regX:-0.8,scaleX:1,scaleY:1.01,skewX:-5.3,skewY:-3.9,x:117.6,y:56.1},2).to({regX:-1,regY:15,scaleX:1.01,scaleY:1.05,skewX:-35.2,skewY:-29.5,x:115.7,y:76.9},3).to({_off:true},1).wait(5));

	// 6_Neck
	this.instance_2 = new lib._6_Neck_1("single",0);
	this.instance_2.setTransform(115.2,73.3,1.027,1.051,0,-28.7,-15.7,-0.4,6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.01,scaleY:1.02,skewX:-9.3,skewY:-5.1,x:116.5,y:64.7},2).to({scaleX:1,scaleY:1.01,skewX:13,skewY:7.5,x:124.4,y:62.2},2).to({scaleY:1.01,skewX:23.6,skewY:13.6,x:130.1,y:63.5},2).wait(1).to({startPosition:0},0).to({scaleY:1.01,skewX:11.8,skewY:6.8,x:123.6,y:62},3,cjs.Ease.get(-0.99)).to({scaleY:1,skewX:0,skewY:0,x:117.1,y:60.5},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({regX:-0.4,scaleY:1.01,skewX:13.5,skewY:8.5,x:125.8,y:62.7},3,cjs.Ease.get(-0.99)).to({regX:-0.3,scaleY:1.01,skewX:27.1,skewY:17.1,x:134.6,y:64.9},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({scaleY:1.01,skewX:11.8,skewY:7.3,x:124.7,y:62.4},3,cjs.Ease.get(-0.99)).to({scaleX:1.01,scaleY:1.01,skewX:-6.9,skewY:-3.6,x:116.6,y:63.7},2).to({scaleX:1.03,scaleY:1.05,skewX:-28.6,skewY:-15.6,x:115.2,y:73.3},3).to({_off:true},1).wait(5));

	// 6_HandL3Up
	this.instance_3 = new lib._6_HandL3Up_1("single",0);
	this.instance_3.setTransform(166.8,133,1.05,1.002,0,-4.7,-1.9,8.5,-4.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.02,scaleY:1,skewX:-1.3,skewY:-0.3,x:150,y:123.4},2).to({scaleX:1,scaleY:1,skewX:11.8,skewY:11,x:140.9,y:122.5},2).to({scaleX:1,scaleY:1,skewX:21.2,skewY:20.1,x:140.3,y:125.6},2).wait(1).to({startPosition:0},0).to({regX:8.4,scaleX:1,scaleY:1,skewX:10.5,skewY:10,x:140.8,y:122.1},3,cjs.Ease.get(-0.99)).to({regX:8.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:141.5,y:118.6},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({regX:8.6,scaleX:1,scaleY:1,skewX:12.3,skewY:11.8,x:141.3,y:123},3,cjs.Ease.get(-0.99)).to({regX:8.4,scaleX:1,scaleY:1,skewX:24.6,skewY:23.6,x:140.8,y:127.4},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:10.8,skewY:10.3,x:141.1,y:122.5},3,cjs.Ease.get(-0.99)).to({regX:8.5,scaleX:1.01,scaleY:1,skewX:-0.9,skewY:-0.3,x:147.9,y:122.2},2).to({scaleX:1.05,scaleY:1,skewX:-4.6,skewY:-1.8,x:166.8,y:133},3).to({_off:true},1).wait(5));

	// 6_HandL2
	this.instance_4 = new lib._6_HandL2_1("single",0);
	this.instance_4.setTransform(170.7,95,1.05,1.002,0,-45.2,-42.4,13.4,-12.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.02,scaleY:1,skewX:-14.8,skewY:-13.9,x:170.9,y:94.4},2).to({regX:13.5,scaleX:1.01,skewX:8,skewY:13.5,x:171.8,y:105.7},2).to({scaleX:1.01,skewX:14.7,skewY:24.4,x:172.4,y:114.9},2).wait(1).to({startPosition:0},0).to({regY:-12.9,scaleX:1.01,skewX:7.3,skewY:12.1,x:171.7,y:104.4},3,cjs.Ease.get(-0.99)).to({regY:-12.8,scaleX:1,skewX:0,skewY:0,x:171,y:94.1},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({scaleX:1.01,skewX:9,skewY:13.8,x:172.3,y:106.4},3,cjs.Ease.get(-0.99)).to({scaleX:1.01,skewX:18.2,skewY:27.8,x:173.6,y:118.8},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({regX:13.4,regY:-12.9,scaleX:1.01,skewX:7.8,skewY:12.1,x:172.2,y:104.9},3,cjs.Ease.get(-0.99)).to({regX:13.6,regY:-12.8,scaleX:1.01,skewX:-11.1,skewY:-10.3,x:171,y:94.3},2).to({regX:13.4,scaleX:1.05,scaleY:1,skewX:-45.1,skewY:-42.3,x:170.7,y:95},3).to({_off:true},1).wait(5));

	// 6_HandL1
	this.instance_5 = new lib._6_HandL1_1("single",0);
	this.instance_5.setTransform(138.8,74.2,1.064,0.995,0,2.3,-4.4,-17,-10);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.02,scaleY:1,skewX:0.8,skewY:-1.1,x:139,y:70.1},2).to({regX:-16.8,regY:-9.8,scaleX:1,scaleY:1,skewX:8,skewY:12.8,x:145,y:72.5},2).to({regX:-16.9,regY:-9.9,scaleX:1.01,skewX:14.7,skewY:23.2,x:149.6,y:76},2).wait(1).to({startPosition:0},0).to({regX:-16.8,scaleX:1,skewX:7.3,skewY:11.5,x:144.3,y:72},3,cjs.Ease.get(-0.99)).to({scaleX:1,skewX:0,skewY:0,x:139.1,y:68},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({regX:-16.7,regY:-9.8,scaleX:1,skewX:9,skewY:13.3,x:146.2,y:73.3},3,cjs.Ease.get(-0.99)).to({regX:-16.9,regY:-9.9,scaleX:1.01,skewX:18.2,skewY:26.6,x:153.1,y:78.5},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({scaleX:1,skewX:7.8,skewY:11.5,x:145.3,y:72.6},3,cjs.Ease.get(-0.99)).to({regX:-16.7,regY:-9.8,scaleX:1.02,scaleY:1,skewX:0.5,skewY:-0.8,x:139.2,y:69.6},2).to({regX:-16.9,regY:-9.9,scaleX:1.06,scaleY:1,skewX:2.3,skewY:-4.3,x:138.8,y:74.2},3).to({_off:true},1).wait(5));

	// 6_Torso3
	this.instance_6 = new lib._6_Torso3_1("single",0);
	this.instance_6.setTransform(128,117.2,1.027,0.917,0,-20.7,-15.7,-5.8,22.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.01,scaleY:0.97,skewX:-6.6,skewY:-5.1,x:118.8,y:112.8},2).to({regX:-5.8,scaleX:1,scaleY:1,skewX:8,skewY:7.5,x:114.3,y:110.9},2).to({regY:21.9,skewX:14.7,skewY:13.6,x:114.5,y:111.2},2).wait(1).to({startPosition:0},0).to({skewX:7.3,skewY:6.8,x:114.4,y:110.8},3,cjs.Ease.get(-0.99)).to({regY:22.1,skewX:0,skewY:0,x:114.1,y:110.6},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({skewX:9,skewY:8.5,x:115.1,y:111.1},3,cjs.Ease.get(-0.99)).to({regX:-6,regY:21.9,skewX:18.2,skewY:17.1,x:115.8,y:111.4},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({regX:-5.9,skewX:7.8,skewY:7.3,x:114.9,y:111},3,cjs.Ease.get(-0.99)).to({regX:-5.8,regY:22.1,scaleX:1.01,scaleY:0.98,skewX:-4.9,skewY:-3.6,x:117.6,y:112.3},2).to({regX:-5.7,scaleX:1.03,scaleY:0.92,skewX:-20.6,skewY:-15.6,x:128,y:117.2},3).to({_off:true},1).wait(5));

	// 6_Torso2
	this.instance_7 = new lib._6_Torso2_1("single",0);
	this.instance_7.setTransform(130.6,135.3,1.038,0.952,0,-14,-9,-2.4,16.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.01,scaleY:0.98,skewX:-4.3,skewY:-2.8,x:119,y:133.5},2).to({scaleX:1,scaleY:1,skewX:2.5,skewY:2,x:111.8,y:132.5},2).to({skewX:4.7,skewY:3.6,x:110.7,y:132.6},2).wait(1).to({startPosition:0},0).to({skewX:2.3,skewY:1.8,x:111.9,y:132.5},3,cjs.Ease.get(-0.99)).to({skewX:0,skewY:0,x:113.1},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({skewX:4,skewY:3.5,x:112,y:132.6},3,cjs.Ease.get(-0.99)).to({regY:16.6,skewX:8.2,skewY:7.1,x:110.9,y:132.7},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({regY:16.5,skewX:3.5,skewY:3,x:112.1,y:132.5},3,cjs.Ease.get(-0.99)).to({scaleX:1.01,scaleY:0.99,skewX:-3.3,skewY:-2.1,x:117.5,y:133.2},2).to({scaleX:1.04,scaleY:0.95,skewX:-13.9,skewY:-8.9,x:130.6,y:135.3},3).to({_off:true},1).wait(5));

	// 6_Torso1
	this.instance_8 = new lib._6_Torso1_1("single",0);
	this.instance_8.setTransform(128,146.2,1.038,0.865,0,-2.8,-9,-2.9,6.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.01,scaleY:0.96,skewX:-0.6,skewY:-2.8,x:116.7,y:145.1},2).to({scaleX:1,scaleY:1,skewX:0.8,skewY:0.1,x:109.5,y:144.5},2).to({skewX:1.5,skewY:0.4,x:108.2},2).wait(1).to({startPosition:0},0).to({skewX:0.8,skewY:0.1,x:109.6},3,cjs.Ease.get(-0.99)).to({skewX:0,skewY:0,x:111.1},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({skewX:2.5,skewY:1.8,x:109.4},3,cjs.Ease.get(-0.99)).to({skewX:5,skewY:3.9,x:107.7,y:144.4},3,cjs.Ease.get(1)).wait(3).to({skewY:3.9},0).to({skewX:2,skewY:1.6,x:109.5},3,cjs.Ease.get(-0.99)).to({regX:-2.9,scaleX:1.01,scaleY:0.97,skewX:-0.4,skewY:-2.1,x:115.2,y:145},2).to({regX:-2.8,scaleX:1.04,scaleY:0.87,skewX:-2.7,skewY:-8.9,x:128,y:146.2},3).to({_off:true},1).wait(5));

	// 6_HandL3Down
	this.instance_9 = new lib._6_HandL3Down_1("single",0);
	this.instance_9.setTransform(167,133.5,1.05,1.002,0,-4.7,-1.9,4.6,-5.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(167).to({startPosition:0,_off:false},0).to({regX:4.5,scaleX:1.02,scaleY:1,skewX:-1.3,skewY:-0.3,x:149.9,y:123.9},2).to({scaleX:1,scaleY:1,skewX:8,skewY:7.5,x:140.2,y:123},2).to({regY:-5.4,skewX:14.7,skewY:13.6,x:139.1,y:126},2).wait(1).to({startPosition:0},0).to({regY:-5.3,skewX:7.3,skewY:6.8,x:140.3,y:122.6},3,cjs.Ease.get(-0.99)).to({skewX:0,skewY:0,x:141.6,y:119.1},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({skewX:9,skewY:8.5,x:140.6,y:123.4},3,cjs.Ease.get(-0.99)).to({regX:4.4,skewX:18.2,skewY:17.1,x:139.6,y:127.8},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({regX:4.5,regY:-5.4,skewX:7.8,skewY:7.3,x:140.8,y:122.8},3,cjs.Ease.get(-0.99)).to({regY:-5.3,scaleX:1.01,scaleY:1,skewX:-0.9,skewY:-0.3,x:147.9,y:122.7},2).to({regX:4.6,scaleX:1.05,scaleY:1,skewX:-4.6,skewY:-1.8,x:167,y:133.5},3).to({_off:true},1).wait(5));

	// 6_LegL1
	this.instance_10 = new lib._6_LegL1_1("single",0);
	this.instance_10.setTransform(141.1,145.1,1,1,16.5,0,0,-1.4,-27.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(167).to({startPosition:0,_off:false},0).to({rotation:5.3,x:126.5,y:144.8},2).to({rotation:0,skewX:0.5,x:117.3,y:144.6},2).to({skewX:1.1,x:115.9},2).wait(1).to({startPosition:0},0).to({skewX:0.5,x:117.5},3,cjs.Ease.get(-0.99)).to({skewX:0,x:119.1},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({skewX:0.5,x:117.5},3,cjs.Ease.get(-0.99)).to({skewX:1.1,x:115.9},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({skewX:0.3,x:117.7},3,cjs.Ease.get(-0.99)).to({regY:-27.2,rotation:4,skewX:0,x:124.6,y:144.8},2).to({regY:-27.3,rotation:16.5,x:141.1,y:145.1},3).to({_off:true},1).wait(5));

	// 6_ShoeL
	this.instance_11 = new lib._6_ShoeL_1("single",0);
	this.instance_11.setTransform(142,258.1,1,1,0,0,0,3.5,-6.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(167).to({startPosition:0,_off:false},0).to({startPosition:0},2).to({startPosition:0},2).to({startPosition:0},2).wait(1).to({startPosition:0},0).to({startPosition:0},3,cjs.Ease.get(-0.99)).to({startPosition:0},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({startPosition:0},3,cjs.Ease.get(-0.99)).to({startPosition:0},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({startPosition:0},3,cjs.Ease.get(-0.99)).to({startPosition:0},2).to({startPosition:0},3).to({_off:true},1).wait(5));

	// 6_LegL2
	this.instance_12 = new lib._6_LegL2_1("single",0);
	this.instance_12.setTransform(140.3,204.1,1,1.002,0,3.9,0,-3.4,-27.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(167).to({startPosition:0,_off:false},0).to({regY:-27.9,scaleY:1,skewX:1.3,x:137.5,y:204},2).to({regX:-3.4,regY:-27.7,scaleY:1,skewX:-2.8,x:132.8,y:204.1},2).to({regX:-3.3,regY:-27.8,scaleY:1,skewX:-5.3,x:130.3},2).wait(1).to({startPosition:0},0).to({scaleY:1,skewX:-2.4,x:133.2,y:204},3,cjs.Ease.get(-0.99)).to({scaleY:1,skewX:0,x:136.1,y:204.1},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({scaleY:1,skewX:-2.4,x:133.2,y:204},3,cjs.Ease.get(-0.99)).to({scaleY:1,skewX:-5.3,x:130.3,y:204.1},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({regY:-27.7,scaleY:1,skewX:-2.1,x:133.6,y:204.2},3,cjs.Ease.get(-0.99)).to({regY:-27.9,scaleY:1,skewX:0.8,x:137.2,y:204},2).to({regY:-27.8,scaleY:1,skewX:3.9,x:140.3,y:204.1},3).to({_off:true},1).wait(5));

	// 6_LegR1
	this.instance_13 = new lib._6_LegR1_1("single",0);
	this.instance_13.setTransform(117,145.2,1.064,1,18,0,0,1,-23.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.02,rotation:5.8,x:107.8,y:145.1},2).to({regY:-23.3,scaleX:1,rotation:0,skewX:0.5,x:101.2},2).to({skewX:1.1,x:99.7},2).wait(1).to({startPosition:0},0).to({skewX:0.5,x:101.4},3,cjs.Ease.get(-0.99)).to({skewX:0,x:103},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({skewX:0.5,x:101.4},3,cjs.Ease.get(-0.99)).to({skewX:1.1,x:99.7},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({skewX:0.3,x:101.5},3,cjs.Ease.get(-0.99)).to({regX:1.1,regY:-23.2,scaleX:1.02,rotation:4.3,skewX:0,x:106.5,y:145.2},2).to({regX:1,regY:-23.4,scaleX:1.06,rotation:18,x:117},3).to({_off:true},1).wait(5));

	// 6_ShoeR
	this.instance_14 = new lib._6_ShoeR_1("single",0);
	this.instance_14.setTransform(105.3,249.1,1,1,0,0,0,7,-5.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(167).to({startPosition:0,_off:false},0).to({startPosition:0},2).to({startPosition:0},2).to({startPosition:0},2).wait(1).to({startPosition:0},0).to({startPosition:0},3,cjs.Ease.get(-0.99)).to({startPosition:0},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({startPosition:0},3,cjs.Ease.get(-0.99)).to({startPosition:0},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({startPosition:0},3,cjs.Ease.get(-0.99)).to({startPosition:0},2).to({startPosition:0},3).to({_off:true},1).wait(5));

	// 6_LegR2
	this.instance_15 = new lib._6_LegR2_1("single",0);
	this.instance_15.setTransform(100.6,198.5,1.095,1,-2.1,0,0,-0.9,-25);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(167).to({startPosition:0,_off:false},0).to({regY:-24.8,scaleX:1.03,rotation:-0.4,x:101.9,y:199},2).to({regY:-24.9,scaleX:1,scaleY:1,rotation:0,skewX:-1.6,x:100.3,y:199.1},2).to({regX:-0.9,regY:-24.8,scaleY:1,skewX:-3.4,x:98.4},2).wait(1).to({startPosition:0},0).to({regY:-24.9,scaleY:1,skewX:-1.6,x:100.6,y:199},3,cjs.Ease.get(-0.99)).to({regX:-0.8,regY:-24.8,scaleY:1,skewX:0,x:102.6,y:199.1},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({regY:-24.9,scaleY:1,skewX:-1.6,x:100.6,y:199},3,cjs.Ease.get(-0.99)).to({regX:-0.9,regY:-24.8,scaleY:1,skewX:-3.4,x:98.4,y:199.1},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({regY:-24.9,scaleY:1,skewX:-1.3,x:100.8,y:199},3,cjs.Ease.get(-0.99)).to({regX:-0.8,regY:-24.8,scaleX:1.02,scaleY:1,rotation:-0.3,skewX:0,x:102.2},2).to({regY:-24.9,scaleX:1.1,rotation:-2,x:100.6,y:198.5},3).to({_off:true},1).wait(5));

	// 6_HandR3
	this.instance_16 = new lib._6_HandR3_1("single",0);
	this.instance_16.setTransform(101.5,132.6,1.045,1.009,0,-8.6,-4,1.6,-6.4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.01,scaleY:1,skewX:-2.6,skewY:-1.1,x:98.2,y:123.2},2).to({regX:1.5,scaleX:1,scaleY:1,skewX:5.8,skewY:5.3,x:95.9,y:117.2},2).to({skewX:10.7,skewY:9.6,x:95.5,y:116.1},2).wait(1).to({startPosition:0},0).to({skewX:5.3,skewY:4.8,x:96.1,y:117.4},3,cjs.Ease.get(-0.99)).to({skewX:0,skewY:0,x:96.5,y:118.6},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({skewX:7,skewY:6.5,x:96.6,y:116.9},3,cjs.Ease.get(-0.99)).to({skewX:14.2,skewY:13.1,x:96.7,y:115.3},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({skewX:6.1,skewY:5.6,x:96.6,y:117.2},3,cjs.Ease.get(-0.99)).to({scaleX:1.01,scaleY:1,skewX:-1.8,skewY:-0.8,x:97.7,y:122.1},2).to({regX:1.6,scaleX:1.05,scaleY:1.01,skewX:-8.5,skewY:-3.9,x:101.5,y:132.6},3).to({_off:true},1).wait(5));

	// 6_HandR2
	this.instance_17 = new lib._6_HandR2_1("single",0);
	this.instance_17.setTransform(102.3,111.6,1.066,0.987,0,11.2,13.6,-1,-10.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.02,scaleY:1,skewX:3.6,skewY:4.5,x:95.9,y:103.5},2).to({regX:-0.8,scaleX:1,scaleY:1,skewX:12.8,skewY:12.3,x:96.6,y:98.5},2).to({scaleX:1,scaleY:1,skewX:23.4,skewY:22.3,x:99.8,y:97.6},2).wait(1).to({startPosition:0},0).to({regY:-10.9,scaleX:1,scaleY:1,skewX:11.6,skewY:11,x:96.3,y:98.5},3,cjs.Ease.get(-0.99)).to({regY:-10.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:92.6,y:99.6},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({regX:-0.9,scaleX:1,scaleY:1,skewX:13.3,skewY:12.8,x:97.4,y:98.3},3,cjs.Ease.get(-0.99)).to({regX:-0.8,regY:-10.9,scaleX:1,scaleY:1,skewX:26.9,skewY:25.8,x:102.2,y:97},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:11.8,skewY:11.3,x:96.8,y:98.4},3,cjs.Ease.get(-0.99)).to({regY:-10.8,scaleX:1.02,scaleY:1,skewX:2.8,skewY:3.3,x:95,y:102.6},2).to({regX:-0.9,scaleX:1.07,scaleY:0.99,skewX:11.2,skewY:13.6,x:102.3,y:111.6},3).to({_off:true},1).wait(5));

	// 6_HandR1
	this.instance_18 = new lib._6_HandR1_1("single",0);
	this.instance_18.setTransform(98.9,82.7,1.027,0.899,0,-20.7,-15.7,3.6,-16);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(167).to({startPosition:0,_off:false},0).to({regX:3.5,scaleX:1.01,scaleY:0.97,skewX:-6.6,skewY:-5.1,x:99.2,y:72.2},2).to({scaleX:1,scaleY:1,skewX:4.8,skewY:4.3,x:106.2,y:66.2},2).to({skewX:9,skewY:7.9,x:111.4,y:65.7},2).wait(1).to({startPosition:0},0).to({regX:3.6,skewX:4.5,skewY:3.8,x:105.6,y:66.3},3,cjs.Ease.get(-0.99)).to({regX:3.5,skewX:0,skewY:0,x:99.5,y:67},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({skewX:6.1,skewY:5.6,x:107.6,y:66.4},3,cjs.Ease.get(-0.99)).to({regY:-15.8,skewX:12.5,skewY:11.4,x:115.7,y:65.9},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({regX:3.6,skewX:5.3,skewY:4.8,x:106.6,y:66.5},3,cjs.Ease.get(-0.99)).to({regX:3.5,regY:-15.9,scaleX:1.01,scaleY:0.97,skewX:-4.9,skewY:-3.6,x:99.3,y:70.9},2).to({regX:3.6,scaleX:1.03,scaleY:0.9,skewX:-20.6,skewY:-15.6,x:98.9,y:82.7},3).to({_off:true},1).wait(5));

	// 3_Head
	this.instance_19 = new lib._3_Head_1("single",0);
	this.instance_19.setTransform(104.9,107.5,1,1,0,0,0,8,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({scaleX:1,scaleY:1,rotation:23.8,x:111.8,y:82.9},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({rotation:40.5,y:82.8,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:104.9,y:107.5},5,cjs.Ease.get(1)).to({regX:8.1,regY:5.6,rotation:6.4,x:100.1,y:121.5},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({regX:8,regY:5.5,scaleY:1.01,rotation:0,skewX:6.4,skewY:6.5,y:119.4,_off:false},0).to({scaleY:1,skewX:0,skewY:0,x:104.9,y:107.5},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:10.9,x:111.8,y:82.8},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({x:109.8,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:104.9,y:107.5},4,cjs.Ease.get(1)).wait(1));

	// 3_HandL3
	this.instance_20 = new lib._3_HandL3_1("single",0);
	this.instance_20.setTransform(137,167.1,1,1,0,0,0,-5.9,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({regX:-5.9,scaleX:1,scaleY:1,rotation:30.6,x:182.2,y:142.9},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({rotation:-43.4,x:182.8,y:141.7,_off:false},0).to({regX:-5.8,scaleX:1,scaleY:1,rotation:0,x:137,y:167.1},5,cjs.Ease.get(1)).to({scaleX:0.87,scaleY:0.86,skewX:35.1,skewY:39.6,x:125.5,y:180.4},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({scaleX:0.87,scaleY:0.87,skewX:34.7,skewY:40,y:179.2,_off:false},0).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:137,y:167.1},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({regY:-8.9,scaleX:1,scaleY:1,rotation:50.4,x:171.6,y:145.3},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({regY:-8.8,scaleX:1,scaleY:1,rotation:0,x:137,y:167.1},4,cjs.Ease.get(1)).wait(1));

	// 3_HandL2
	this.instance_21 = new lib._3_HandL2_1("single",0);
	this.instance_21.setTransform(134.5,139.6,1,1,0,0,0,0,-12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleX:1,scaleY:1.03,rotation:-21,x:170.3,y:114.6},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:134.5,y:139.6},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:24,x:134,y:155.9},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({scaleX:1,scaleY:1.01,rotation:0,skewX:23.7,skewY:24.3,y:154.3,_off:false},0).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:134.5,y:139.6},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({regY:-12.4,scaleX:1,scaleY:1.03,rotation:-1.2,x:169.9,y:114.6},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({regY:-12.3,scaleX:1,scaleY:1,rotation:0,x:134.5,y:139.6},4,cjs.Ease.get(1)).wait(1));

	// 3_HandL1
	this.instance_22 = new lib._3_HandL1_1("single",0);
	this.instance_22.setTransform(128.1,107.1,1,1,0,0,0,-1.4,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({regX:-1.4,scaleX:1,scaleY:1,rotation:-39.2,x:140.9,y:90.6},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:0,_off:false},0).to({regX:-1.3,scaleX:1,scaleY:1,rotation:0,x:128.1,y:107.1},5,cjs.Ease.get(1)).to({regY:-14.4,rotation:-5.1,x:124,y:121.1},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({scaleY:1.01,rotation:0,skewX:-5,skewY:-5.1,y:119,_off:false},0).to({regY:-14.3,scaleY:1,skewX:0,skewY:0,x:128.1,y:107.1},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({regX:-1.4,scaleX:1,scaleY:1.15,rotation:-35.7,x:139.5,y:84.6},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({regX:-1.3,scaleX:1,scaleY:1,rotation:0,x:128.1,y:107.1},4,cjs.Ease.get(1)).wait(1));

	// 3_Torso
	this.instance_23 = new lib._3_Torso_1("single",0);
	this.instance_23.setTransform(130,137.5,1,1,0,0,0,11.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({scaleX:0.96,scaleY:1.21,skewX:9.5,skewY:2.5,x:128.3,y:133.8},4,cjs.Ease.get(-0.99)).to({regX:11.6,regY:19.1,scaleY:1.34,skewX:17.9,x:125.2,alpha:0.391},1).to({_off:true},1).wait(7).to({regX:11.7,regY:18.9,scaleX:0.89,scaleY:1.32,skewX:20,x:125.1,y:132.6,_off:false},0).to({regX:11.5,regY:19,scaleX:0.96,scaleY:1.21,skewX:9.5,x:128.3,y:133.8,alpha:1},1,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:130,y:137.5},5,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:1.01,skewX:-9.3,skewY:-5.1,x:131,y:151},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({regY:18.9,scaleY:1.02,skewX:-9.2,skewY:-5.2,y:149.2,_off:false},0).to({regY:19,scaleX:1,scaleY:1,skewX:0,skewY:0,x:130,y:137.5},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({regX:11.6,regY:19.1,scaleX:0.96,scaleY:1.3,skewX:9.5,skewY:2.5,x:128.6,y:132.4},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({regX:11.5,regY:19,scaleX:1,scaleY:1,skewX:0,skewY:0,x:130,y:137.5},4,cjs.Ease.get(1)).wait(1));

	// 3_HandR3
	this.instance_24 = new lib._3_HandR3_1("single",0);
	this.instance_24.setTransform(104,168.6,1,1,0,0,0,1,-10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({scaleX:1,scaleY:1,rotation:-6.2,x:59.8,y:151.8},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({rotation:60.6,x:49.8,y:148.7,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:104,y:168.6},5,cjs.Ease.get(1)).to({scaleX:0.87,scaleY:1,rotation:-9.6,x:99,y:178},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({scaleY:1.01,rotation:0,skewX:-9.5,skewY:-9.8,y:176.7,_off:false},0).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:104,y:168.6},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({regX:1.1,regY:-10.2,scaleX:0.65,scaleY:1,skewX:11.1,skewY:-2,x:91,y:153.3},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({regX:1,regY:-10.3,scaleX:1,scaleY:1,skewX:0,skewY:0,x:104,y:168.6},4,cjs.Ease.get(1)).wait(1));

	// 3_HandR2
	this.instance_25 = new lib._3_HandR2_1("single",0);
	this.instance_25.setTransform(95.6,135.6,1,1,0,0,0,-3.9,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({scaleX:1,scaleY:1,rotation:35.4,x:72.1,y:117.3},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({rotation:50.6,y:117.4,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:95.6,y:135.6},5,cjs.Ease.get(1)).to({regY:-15.4,scaleX:1,scaleY:0.7,skewX:-4.3,skewY:-12.1,x:88.9,y:157.5},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({scaleX:1,scaleY:0.71,skewY:-12.3,y:156,_off:false},0).to({regY:-15.3,scaleY:1,skewX:0,skewY:0,x:95.6,y:135.6},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:15.2,x:92.2,y:121.8},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:95.6,y:135.6},4,cjs.Ease.get(1)).wait(1));

	// 3_HandR1
	this.instance_26 = new lib._3_HandR1_1("single",0);
	this.instance_26.setTransform(86.6,102.6,1,1,0,0,0,-2.9,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({regX:-2.9,scaleX:1,scaleY:1,rotation:54.9,x:94.1,y:89},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:0,_off:false},0).to({regX:-2.8,scaleX:1,scaleY:1,rotation:0,x:86.6,y:102.6},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:9.5,x:85.2,y:124.3},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({regY:-14.4,scaleX:1,scaleY:1.01,rotation:0,skewX:9.4,skewY:9.7,y:122.2,_off:false},0).to({regY:-14.3,scaleY:1,skewX:0,skewY:0,x:86.6,y:102.6},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:18.2,x:94.2,y:89},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:86.6,y:102.6},4,cjs.Ease.get(1)).wait(1));

	// 3_ShoeR
	this.instance_27 = new lib._3_ShoeR_1("single",0);
	this.instance_27.setTransform(99.9,258.6,1,1,0,0,0,7,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({scaleX:0.96,scaleY:1.08,rotation:10.2,x:104.3,y:253.3},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:99.9,y:258.6},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,rotation:-28.9,x:110.7,y:246.5},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({rotation:-0.1,x:100.6,y:257.8,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:99.9,y:258.6},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({scaleX:0.96,scaleY:1.08,rotation:10.2,x:104.3,y:253.3},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:99.9,y:258.6},4,cjs.Ease.get(1)).wait(1));

	// 3_ShoeL
	this.instance_28 = new lib._3_ShoeL_1("single",0);
	this.instance_28.setTransform(147,257.6,1,1,0,0,0,5,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({scaleX:0.89,x:145.8,y:257.2},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:0,_off:false},0).to({scaleX:1,x:147,y:257.6},5,cjs.Ease.get(1)).to({scaleY:1,skewX:5.3,x:128.7,y:257.3},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({scaleY:1,skewX:0,x:147,y:257.6,_off:false},0).to({startPosition:0},4).wait(101).to({startPosition:0},0).to({scaleX:0.89,x:145.8,y:257.2},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({scaleX:1,x:147,y:257.6},4,cjs.Ease.get(1)).wait(1));

	// 3_LegL1
	this.instance_29 = new lib._3_LegL1_1("single",0);
	this.instance_29.setTransform(146.5,142,1,1,0,0,0,1.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({rotation:0.8,x:144.4,y:142.9},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:0,_off:false},0).to({rotation:0,x:146.5,y:142},5,cjs.Ease.get(1)).to({regY:-24.3,scaleX:0.96,scaleY:0.99,rotation:13.8,x:148.1,y:154.2},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({regY:-24.4,scaleX:0.96,scaleY:1,rotation:0,skewX:13.6,skewY:14,y:152.6,_off:false},0).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:146.5,y:142},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({rotation:0.8,x:144.4,y:142.9},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({rotation:0,x:146.5,y:142},4,cjs.Ease.get(1)).wait(1));

	// 3_LegL2
	this.instance_30 = new lib._3_LegL2_1("single",0);
	this.instance_30.setTransform(145.2,191.6,1,1,0,0,0,-1.9,-27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({regX:-1.7,scaleY:1.05,rotation:-1.1,x:142.2,y:192},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:0,_off:false},0).to({regX:-1.8,scaleY:1,rotation:0,x:145.2,y:191.6},5,cjs.Ease.get(1)).to({regY:-27.4,scaleX:1,scaleY:0.95,skewX:6.8,skewY:1.5,x:133.6,y:197.2},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({regY:-27.3,scaleX:1,scaleY:0.96,skewX:-5.6,skewY:-11.1,x:133.7,y:196.2,_off:false},0).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:145.2,y:191.6},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({regX:-1.7,scaleY:1.05,rotation:-1.1,x:142.2,y:192},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({regX:-1.8,scaleY:1,rotation:0,x:145.2,y:191.6},4,cjs.Ease.get(1)).wait(1));

	// 3_LegR1
	this.instance_31 = new lib._3_LegR1_1("single",0);
	this.instance_31.setTransform(118.5,142.5,1,1,0,0,0,6.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({regY:-27.3,rotation:3.5},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:0,_off:false},0).to({regY:-27.4,rotation:0},5,cjs.Ease.get(1)).to({regY:-27.3,scaleX:0.9,scaleY:0.82,rotation:13.5,x:122.7,y:159.6},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({scaleX:0.9,scaleY:0.83,rotation:0,skewX:13.3,skewY:13.7,y:158.1,_off:false},0).to({regY:-27.4,scaleX:1,scaleY:1,skewX:0,skewY:0,x:118.5,y:142.5},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({regY:-27.3,rotation:3.5},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({regY:-27.4,rotation:0},4,cjs.Ease.get(1)).wait(1));

	// 3_LegR2
	this.instance_32 = new lib._3_LegR2_1("single",0);
	this.instance_32.setTransform(103,195.6,1,1,0,0,0,1,-29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({scaleY:0.95,rotation:-7.5,x:99.9,y:195.7},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:0,_off:false},0).to({scaleY:1,rotation:0,x:103,y:195.6},5,cjs.Ease.get(1)).to({regX:1.1,scaleX:1,scaleY:0.84,rotation:-17.1,x:100.9,y:196.9},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({regX:1,scaleY:1.02,rotation:0,skewX:-2.6,skewY:-2.7,x:101.3,y:195.6,_off:false},0).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:103},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({scaleY:0.95,rotation:-7.5,x:99.9,y:195.7},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({scaleY:1,rotation:0,x:103,y:195.6},4,cjs.Ease.get(1)).wait(1));

	// Symbol_Golova
	this.instance_33 = new lib.Sit_Symbol_Golova("single",0);
	this.instance_33.setTransform(102,156.1,0.866,0.988,0,-13.8,-9.5);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(33).to({startPosition:0,_off:false},0).to({scaleX:0.88,scaleY:1,skewX:-6.7,skewY:-4.6,x:107,y:159},1).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:114.2,y:163.5},2).to({scaleX:0.9,scaleY:0.98,skewX:8.1,skewY:9,x:116.7,y:165.5},1).to({scaleX:0.89,scaleY:1,skewX:0,skewY:0,x:112,y:162},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:-27.4,skewY:-26.5,x:94.6,y:175.2},3).to({scaleX:0.9,scaleY:0.99,skewX:-18.1,skewY:-18.7,x:98.9,y:170.2},1).to({scaleX:0.88,scaleY:1,skewX:-11.2,skewY:-9.1,x:102,y:162.8},2).to({scaleX:0.86,scaleY:1.01,skewX:-17.6,skewY:-9.5,x:93.3,y:156.1},1).to({_off:true},1).wait(156));

	// Symbol_Predpleche_R
	this.instance_34 = new lib.Sit_Symbol_Predpleche_R("single",0);
	this.instance_34.setTransform(89.2,190.8,0.835,0.986,0,-12.4,-8.1);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(33).to({startPosition:0,_off:false},0).to({scaleX:0.86,scaleY:0.99,skewX:-6.1,skewY:-3.8,x:89.3,y:194.2},1).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:91.1,y:198.6},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:91.6,y:199},1).to({scaleX:0.89,scaleY:1,skewX:0,x:89.6,y:197.6},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:-12.3,skewY:-13.2,x:81.6,y:211.6},3).to({scaleX:0.9,scaleY:0.99,skewX:-8.3,skewY:-9,x:83.7,y:206.6},1).to({scaleX:0.86,scaleY:0.99,skewX:-6.1,skewY:-3.8,x:89.3,y:194.2},2).to({scaleX:0.83,scaleY:1,skewX:-16.3,skewY:-8,x:83,y:190.8},1).to({_off:true},1).wait(156));

	// Symbol_Predpleche_L
	this.instance_35 = new lib.Sit_Symbol_Predpleche_L("single",0);
	this.instance_35.setTransform(119.1,184.3,0.885,0.968,0,-5.9,-2.2);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(33).to({startPosition:0,_off:false},0).to({scaleX:0.89,scaleY:0.98,skewX:-2.7,skewY:-0.9,x:121.8,y:188.9},1).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:126.3,y:194.5},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:126.9,y:194.8},1).to({scaleX:0.89,scaleY:1,skewX:0,x:124.4,y:193.3},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:-12.3,skewY:-13.2,x:115,y:199.4},3).to({scaleX:0.9,scaleY:0.99,skewX:-8.3,skewY:-9,x:117.8,y:196.9},1).to({scaleX:0.89,scaleY:0.98,skewX:-7.2,skewY:-5.4,x:119,y:191.4},2).to({scaleX:0.88,scaleY:0.98,skewX:-10,skewY:-2.1,x:112.4,y:184.3},1).to({_off:true},1).wait(156));

	// Symbol_Rukav_R
	this.instance_36 = new lib.Sit_Symbol_Rukav_R("single",0);
	this.instance_36.setTransform(88.4,173.9,0.864,0.989,0,-14.2,-10.1);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(33).to({startPosition:0,_off:false},0).to({scaleX:0.88,scaleY:1,skewX:-6.9,skewY:-4.9,x:91.2,y:176.7},1).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:95.8,y:180.8},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:96.4,y:181.3},1).to({scaleX:0.89,scaleY:1,skewX:0,x:94,y:179.5},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:-12.3,skewY:-13.2,x:82.2,y:193.3},3).to({scaleX:0.9,scaleY:0.99,skewX:-8.3,skewY:-9,x:85.6,y:188.2},1).to({scaleX:0.88,scaleY:1,skewX:-11.4,skewY:-9.4,x:87.6,y:181.7},2).to({scaleX:0.85,scaleY:1.01,skewX:-18,skewY:-10.1,x:81,y:173.9},1).to({_off:true},1).wait(156));

	// Symbol_Plecho_R
	this.instance_37 = new lib.Sit_Symbol_Plecho_R("single",0);
	this.instance_37.setTransform(85.4,187.8,0.863,1.028,0,-16,-15.1);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(33).to({startPosition:0,_off:false},0).to({scaleX:0.87,scaleY:1.02,skewX:-7.8,skewY:-7.4,x:85.8,y:191.6},1).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:87.7,y:196.5},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:88.2,y:196.9},1).to({scaleX:0.89,scaleY:1,skewX:0,x:86.2,y:195.4},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:-12.3,skewY:-13.2,x:77.8,y:210.4},3).to({scaleX:0.9,scaleY:0.99,skewX:-8.3,skewY:-9,x:80,y:205},1).to({scaleX:0.87,scaleY:1.02,skewX:-12.3,skewY:-11.9,x:83.3,y:196.9},2).to({scaleX:0.85,scaleY:1.05,skewX:-19.8,skewY:-15.3,x:79,y:187.8},1).to({_off:true},1).wait(156));

	// Symbol_Plecho_L
	this.instance_38 = new lib.Sit_Symbol_Plecho_L("single",0);
	this.instance_38.setTransform(134.5,191,0.888,1.007,0,-5.3,0);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(33).to({startPosition:0,_off:false},0).to({scaleY:1,skewX:-2.5,x:137.6,y:196.3},1).to({scaleX:0.9,scaleY:0.99,skewX:0.7,x:142.6,y:202.6},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:143.3,y:203},1).to({scaleX:0.89,scaleY:1,skewX:0,x:140.5,y:201.6},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:-12.3,skewY:-13.2,x:132.8,y:203.5},3).to({scaleX:0.9,scaleY:0.99,skewX:-8.3,skewY:-9,x:135.2,y:202.3},1).to({scaleX:0.89,scaleY:1,skewX:-7,skewY:-4.3,x:135.3,y:197.6},2).to({scaleY:1.02,skewX:-9.3,skewY:0,x:128.4,y:191},1).to({_off:true},1).wait(156));

	// Symbol_Stopa_R
	this.instance_39 = new lib.Sit_Symbol_Stopa_R("single",0);
	this.instance_39.setTransform(117.7,260,0.898,0.992,0,-2.1,-6.7);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(33).to({startPosition:0,_off:false},0).to({scaleX:0.89,scaleY:1,skewX:-0.9,skewY:-3.2,x:118.5,y:259},1).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:120.5,y:258.3},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:120.9,y:258.4},1).to({scaleX:0.89,scaleY:1,skewX:0,x:119.4,y:258.1},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:1,x:120.9,y:258.4},3).to({scaleX:0.9,scaleY:0.99,skewX:0.7,x:120.5,y:258.3},1).to({scaleX:0.89,scaleY:1,skewX:-0.9,skewY:-3.2,x:118.5,y:259},2).to({scaleX:0.89,scaleY:1,skewX:-6.3,skewY:-6.6,x:116.8,y:260},1).to({_off:true},1).wait(156));

	// Symbol_Stopa_L
	this.instance_40 = new lib.Sit_Symbol_Stopa_L("single",0);
	this.instance_40.setTransform(74.9,258.3,0.901,0.988,0,-3.9,-8.9);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(33).to({startPosition:0,_off:false},0).to({scaleX:0.89,scaleY:0.99,skewX:-1.8,skewY:-4.3,x:64.1,y:259.9},1).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:53.8,y:261.7},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:53.9},1).to({scaleX:0.89,scaleY:1,skewX:0,x:53.4,y:261.5},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:1,x:53.9,y:261.7},3).to({scaleX:0.9,scaleY:0.99,skewX:0.7,x:53.8},1).to({scaleX:0.89,scaleY:0.99,skewX:-1.8,skewY:-4.3,x:64.1,y:259.9},2).to({scaleX:0.89,scaleY:1,skewX:-8,skewY:-8.9,x:73.7,y:258.3},1).to({_off:true},1).wait(156));

	// Symbol_Rukav_L
	this.instance_41 = new lib.Sit_Symbol_Rukav_L("single",0);
	this.instance_41.setTransform(129.1,170,0.888,0.968,0,-5.9,0);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(33).to({startPosition:0,_off:false},0).to({scaleY:0.98,skewX:-2.7,x:133.3,y:174.8},1).to({scaleX:0.9,scaleY:0.99,skewX:0.7,x:139.8,y:180.8},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:140.5,y:181.3},1).to({scaleX:0.89,scaleY:1,skewX:0,x:137.6,y:179.5},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:-12.3,skewY:-13.2,x:125.1,y:183.1},3).to({scaleX:0.9,scaleY:0.99,skewX:-8.3,skewY:-9,x:129,y:181.2},1).to({scaleX:0.89,scaleY:0.98,skewX:-7.2,skewY:-4.3,x:129.4,y:176.5},2).to({scaleY:0.98,skewX:-10,skewY:0,x:121.4,y:170},1).to({_off:true},1).wait(156));

	// Symbol_Golen_R
	this.instance_42 = new lib.Sit_Symbol_Golen_R("single",0);
	this.instance_42.setTransform(83.3,237.1,0.941,0.944,0,-25.3,-31.1);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(33).to({startPosition:0,_off:false},0).to({scaleX:0.91,scaleY:0.98,skewX:-12.3,skewY:-15.5,x:78.1,y:237.2},1).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:73.7,y:237.8},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:74,y:238},1).to({scaleX:0.89,scaleY:1,skewX:0,x:72.9,y:237.3},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:1,x:74,y:238},3).to({scaleX:0.9,scaleY:0.99,skewX:0.7,x:73.7,y:237.8},1).to({scaleX:0.91,scaleY:0.98,skewX:-12.3,skewY:-15.5,x:78.1,y:237.2},2).to({scaleX:0.91,scaleY:0.97,skewX:-28.5,skewY:-32.2,x:80.6,y:237.1},1).to({_off:true},1).wait(156));

	// Symbol_Golen_L
	this.instance_43 = new lib.Sit_Symbol_Golen_L("single",0);
	this.instance_43.setTransform(124.3,238.1,0.829,1.112,0,-9.9,-15.6,0,-0.1);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(33).to({startPosition:0,_off:false},0).to({scaleX:0.86,scaleY:1.06,skewX:-4.7,skewY:-7.7,x:128.8,y:237.6},1).to({regY:0,scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:134.7,y:237.5},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:135.2,y:237.7},1).to({scaleX:0.89,scaleY:1,skewX:0,x:133.2,y:237},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:1,x:135.2,y:237.7},3).to({scaleX:0.9,scaleY:0.99,skewX:0.7,x:134.7,y:237.5},1).to({regY:0,scaleX:0.86,scaleY:1.06,skewX:-4.7,skewY:-7.7,x:128.8,y:237.6},2).to({scaleX:0.81,scaleY:1.13,skewX:-13.9,skewY:-15.8,x:121.6,y:238.1},1).to({_off:true},1).wait(156));

	// Symbol_Bedro_R
	this.instance_44 = new lib.Sit_Symbol_Bedro_R("single",0);
	this.instance_44.setTransform(105.5,225.8,0.833,0.721,0,-15.1,-22);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(33).to({startPosition:0,_off:false},0).to({scaleX:0.86,scaleY:0.86,skewX:-7.4,skewY:-10.8,x:104.6,y:232.6},1).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:104.8,y:239.9},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:105.2,y:240},1).to({scaleX:0.89,scaleY:1,skewX:0,x:103.6,y:239.4},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:1,x:105.2,y:240},3).to({scaleX:0.9,scaleY:0.99,skewX:0.7,x:104.8,y:239.9},1).to({scaleX:0.86,scaleY:0.86,skewX:-7.4,skewY:-10.8,x:104.6,y:232.6},2).to({scaleX:0.81,scaleY:0.74,skewX:-18.9,skewY:-22.5,x:101.9,y:225.8},1).to({_off:true},1).wait(156));

	// Symbol_Bedro_L
	this.instance_45 = new lib.Sit_Symbol_Bedro_L("single",0);
	this.instance_45.setTransform(134.2,223.5,0.922,0.769,0,-48.4,-38.5);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(33).to({startPosition:0,_off:false},0).to({scaleX:0.9,scaleY:0.89,skewX:-23.1,skewY:-19.4,x:138.2,y:232.6},1).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:143.9,y:242.2},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:144.4,y:242.4},1).to({scaleX:0.89,scaleY:1,skewX:0,x:142.3,y:241.8},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:1,x:144.4,y:242.4},3).to({scaleX:0.9,scaleY:0.99,skewX:0.7,x:143.9,y:242.2},1).to({scaleX:0.9,scaleY:0.89,skewX:-23.1,skewY:-19.4,x:138.2,y:232.6},2).to({scaleX:0.89,scaleY:0.8,skewX:-50.1,skewY:-40.1,x:130.5,y:223.5},1).to({_off:true},1).wait(156));

	// Symbol_Mayka
	this.instance_46 = new lib.Sit_Symbol_Mayka("single",0);
	this.instance_46.setTransform(119.1,195.9,0.819,0.987,0,-12.9,-8.6);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(33).to({startPosition:0,_off:false},0).to({scaleX:0.85,scaleY:1,skewX:-6.3,skewY:-4.1,x:121.6,y:202.6},1).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:125.9,y:210.2},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:126.4,y:210.5},1).to({scaleX:0.89,scaleY:1,skewX:0,x:124.1,y:209.3},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:-12.3,skewY:-13.2,x:118.2,y:214.8},3).to({scaleX:0.9,scaleY:0.99,skewX:-8.3,skewY:-9,x:119.9,y:212.4},1).to({scaleX:0.85,scaleY:1,skewX:-10.7,skewY:-8.5,x:119.8,y:205.1},2).to({scaleX:0.81,scaleY:1,skewX:-16.8,skewY:-8.6,x:113.3,y:195.9},1).to({_off:true},1).wait(156));

	// 2_HandL3
	this.instance_47 = new lib._2_HandL3_1("single",0);
	this.instance_47.setTransform(117.4,187.5,0.999,0.999,-21.2,0,0,9,-7.9);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(24).to({startPosition:0,_off:false},0).to({rotation:-5.1,x:102.9,y:192.1},3).to({regX:9.1,scaleX:0.98,scaleY:1.02,rotation:0,skewX:24.8,skewY:23.3,x:100.5,y:187.6},2).to({scaleX:0.93,scaleY:1.08,skewX:99.1,skewY:93.3,x:107.8,y:169.5},3).to({_off:true},1).wait(16).to({scaleY:1.1,skewX:99,skewY:86.5,x:95.1,_off:false},0).to({regY:-7.9,scaleX:1.05,scaleY:0.96,skewX:14.8,skewY:21.6,x:82.6,y:187.5},3).to({regX:9,regY:-7.8,scaleX:0.99,scaleY:1.02,skewX:-11.5,skewY:-5.1,x:93,y:192.1},2).to({scaleX:1.01,scaleY:1.08,skewX:-19.5,skewY:-22.8,x:117.4,y:179.3},3).to({_off:true},1).wait(147));

	// 2_HandL2
	this.instance_48 = new lib._2_HandL2_1("single",0);
	this.instance_48.setTransform(134.1,167.5,0.998,0.998,-33,0,0,16.4,-4.9);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(24).to({startPosition:0,_off:false},0).to({regX:16.5,scaleX:1,scaleY:1,rotation:-8.1,x:130.7,y:180.3},3).to({scaleX:1.01,scaleY:1.02,rotation:0,skewX:16.5,skewY:13.8,x:131.6,y:187.3},2).to({regX:16.6,regY:-4.7,scaleX:1.03,scaleY:1.09,skewX:66.1,skewY:55.9,x:137.5,y:195.3},3).to({_off:true},1).wait(16).to({regY:-4.8,scaleX:1.09,scaleY:1.05,skewX:64.9,skewY:51.5,x:127.9,_off:false},0).to({regX:16.5,scaleX:1.05,scaleY:0.99,skewX:5.6,skewY:13.2,x:113.6,y:187.3},3).to({scaleX:0.98,scaleY:1.02,skewX:-14.4,skewY:-8.2,x:119.5,y:180.3},2).to({regX:16.4,scaleX:1.03,scaleY:1.06,skewX:-30.7,skewY:-35.2,x:134.1,y:157.5},3).to({_off:true},1).wait(147));

	// 2_HandR3
	this.instance_49 = new lib._2_HandR3_1("single",0);
	this.instance_49.setTransform(93.5,186.8,1.098,1.098,-22.9,0,0,0.5,-9.5);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(24).to({startPosition:0,_off:false},0).to({scaleX:1.02,scaleY:1.02,rotation:-5.4,x:99.5,y:195.2},3).to({regY:-9.3,scaleX:1.01,scaleY:0.99,rotation:0,skewX:41.8,skewY:44.1,x:99,y:190.7},2).to({regY:-9.4,scaleX:1.05,scaleY:0.96,skewX:167.1,skewY:176.5,x:91.6,y:168.5},3).to({_off:true},1).wait(16).to({scaleX:1.04,scaleY:1,skewX:160.8,skewY:176.4,x:78.8,_off:false},0).to({regX:0.6,scaleX:1.12,scaleY:0.9,skewX:34.9,skewY:39.1,x:81.9,y:190.7},3).to({regX:0.5,scaleX:1.01,scaleY:1.04,skewX:-11.8,skewY:-5.4,x:90,y:195.2},2).to({scaleX:1.11,scaleY:1.18,skewX:-21,skewY:-24.6,x:93.5,y:178.4},3).to({_off:true},1).wait(147));

	// 2_HandR2
	this.instance_50 = new lib._2_HandR2_1("single",0);
	this.instance_50.setTransform(83.7,172.6,1,0.851,-14.3,0,0,-3.8,-13.4);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(24).to({startPosition:0,_off:false},0).to({scaleY:0.96,rotation:-3.3,x:88.5,y:172.7},3).to({regX:-3.8,scaleX:1.02,scaleY:0.98,rotation:0,skewX:-32.6,skewY:-34.4,x:88.2,y:177.9},2).to({regX:-4,regY:-13.4,scaleX:1.07,scaleY:0.94,skewX:-131,skewY:-138.2,x:82,y:193.8},3).to({_off:true},1).wait(16).to({regX:-3.9,scaleX:1.14,scaleY:0.88,skewX:-134.1,skewY:-141.1,x:72,y:193.7,_off:false},0).to({regX:-3.8,regY:-13.3,scaleX:0.92,scaleY:1.08,skewX:-39.9,skewY:-38.4,x:68.4,y:177.9},3).to({scaleX:0.99,scaleY:0.98,skewX:-9.9,skewY:-3.4,x:76.3,y:172.7},2).to({regX:-3.7,regY:-13.4,scaleX:1.01,scaleY:0.92,skewX:-13,skewY:-15.5,x:83.7,y:163},3).to({_off:true},1).wait(147));

	// 2_Head
	this.instance_51 = new lib._2_Head_1("single",0);
	this.instance_51.setTransform(97.3,135.8,1,1,-6.9,0,0,8.1,9.5);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(24).to({startPosition:0,_off:false},0).to({regY:9.6,rotation:-22.1,x:105,y:136},3).to({regX:8,regY:9.5,scaleX:1.01,scaleY:0.99,rotation:0,skewX:-2.6,skewY:-0.3,x:105.7,y:141.2},2).to({regX:8.1,scaleX:1.05,scaleY:0.96,skewX:-0.5,skewY:8.4,x:100.4,y:157},3).to({_off:true},1).wait(16).to({regX:8.2,regY:9.4,scaleX:1.07,scaleY:0.97,skewX:-7.2,skewY:8.2,x:86.3,y:156.9,_off:false},0).to({regX:8,regY:9.5,scaleX:1.01,scaleY:1.02,skewX:-13.7,skewY:-0.3,x:78.7,y:141.2},3).to({regX:8.1,scaleX:0.96,scaleY:1.05,skewX:-27.5,skewY:-23,x:88.5,y:135.9},2).to({regY:9.6,scaleX:1,scaleY:1.09,skewX:-6.2,skewY:-7.4,x:97.3,y:123},3).to({_off:true},1).wait(147));

	// 2_HandL1
	this.instance_52 = new lib._2_HandL1_1("single",0);
	this.instance_52.setTransform(118.5,132.5,1,1,-22.7,0,0,-0.9,-16);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(24).to({startPosition:0,_off:false},0).to({rotation:-5.3,x:124.9,y:141.2},3).to({regX:-0.9,scaleX:1.01,scaleY:0.98,rotation:0,skewX:-3.8,skewY:-1.3,x:126.9,y:148.5},2).to({regX:-0.8,regY:-15.8,scaleX:1.04,scaleY:0.9,skewX:-16.3,skewY:-6.5,x:126.4,y:161.8},3).to({_off:true},1).wait(16).to({scaleX:1.03,scaleY:0.93,skewX:-22.3,skewY:-6.6,x:112.7,_off:false},0).to({regX:-0.9,regY:-15.9,scaleX:1,scaleY:1.01,skewX:-14.9,skewY:-1.4,x:101.2,y:148.5},3).to({regX:-0.8,scaleX:0.99,scaleY:1.02,skewX:-11.8,skewY:-5.4,x:109.1,y:141.2},2).to({scaleX:1.01,scaleY:1.08,skewX:-20.8,skewY:-24.4,x:118.5,y:119.3},3).to({_off:true},1).wait(147));

	// 2_Torso
	this.instance_53 = new lib._2_Torso_1("single",0);
	this.instance_53.setTransform(131.8,162.2,1,1,-15.9,0,0,7.5,20);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(24).to({startPosition:0,_off:false},0).to({rotation:-3.6,x:132.7,y:172.1},3).to({regY:19.9,scaleX:1.04,scaleY:1.04,rotation:0,skewX:-0.6,skewY:-0.4,y:182.3},2).to({scaleX:1.16,scaleY:1.14,skewX:-3.8,skewY:-2.8,x:131.4,y:202.9},3).to({_off:true},1).wait(16).to({scaleX:1.15,scaleY:1.16,skewX:-10.4,x:122.7,_off:false},0).to({scaleX:1.04,scaleY:1.06,skewX:-11.8,skewY:-0.4,x:113.8,y:182.3},3).to({regY:20,scaleX:0.99,scaleY:1.01,skewX:-10.1,skewY:-3.6,x:120.4,y:172.1},2).to({regY:20.1,scaleX:1.01,scaleY:1.08,skewX:-14.5,skewY:-17.1,x:131.8,y:151.7},3).to({_off:true},1).wait(147));

	// 2_ShoeL
	this.instance_54 = new lib._2_ShoeL_1("single",0);
	this.instance_54.setTransform(124.5,259.8,0.934,0.925,0,0.6,-4.2,5.5,-4.4);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(24).to({startPosition:0,_off:false},0).to({regY:-4.4,scaleX:0.98,scaleY:0.98,skewX:0,skewY:-0.8,x:120.1,y:260.8},3).to({regY:-4.3,scaleX:1,scaleY:1,skewX:1,skewY:0,x:119.7},2).to({scaleY:1,skewX:4.6,x:123.3,y:259.8},3).to({_off:true},1).wait(16).to({scaleY:1,skewX:-2,x:121.3,_off:false},0).to({scaleY:1.02,skewX:-10,x:116.4,y:260.8},3).to({regY:-4.4,scaleX:0.98,scaleY:0.99,skewX:-6.4,skewY:-0.8,x:118.1},2).to({regY:-4.3,scaleX:0.93,scaleY:0.93,skewX:0.6,skewY:-4.1,x:147.9,y:259.3},3).to({_off:true},1).wait(147));

	// 2_LegL1
	this.instance_55 = new lib._2_LegL1_1("single",0);
	this.instance_55.setTransform(151.4,164,1.103,1.103,-20.4,0,0,16.1,-11);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(24).to({startPosition:0,_off:false},0).to({regY:-10.8,scaleX:1.03,scaleY:1.03,rotation:-4.8,x:153.1,y:176.8},3).to({regX:16,scaleX:1,scaleY:1,rotation:0,skewX:4.1,skewY:3.1,x:154.2,y:187.9},2).to({scaleX:0.98,scaleY:1.02,skewX:17,skewY:12.9,x:156.1,y:208.3},3).to({_off:true},1).wait(16).to({scaleX:1.01,scaleY:0.99,skewX:10.6,skewY:12.5,x:147.9,_off:false},0).to({regX:16.1,scaleY:1.01,skewX:-7.1,skewY:3,x:136.4,y:187.9},3).to({scaleX:1.01,scaleY:1.04,skewX:-11.3,skewY:-4.9,x:141.4,y:176.8},2).to({regY:-10.9,scaleX:1.12,scaleY:1.19,skewX:-18.8,skewY:-22,x:151.4,y:153.7},3).to({_off:true},1).wait(147));

	// 2_LegL2
	this.instance_56 = new lib._2_LegL2_1("single",0);
	this.instance_56.setTransform(128.1,197.4,1.128,1.025,0,-1,-2.4,0,-26.9);
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(24).to({startPosition:0,_off:false},0).to({regY:-26.7,scaleX:1.03,scaleY:1.01,skewX:-0.1,skewY:-0.3,x:124.7,y:200.3},3).to({regY:-26.8,scaleX:1.08,scaleY:0.94,skewX:-3.8,skewY:-4.8,x:121.9,y:206.1},2).to({regX:0.1,scaleX:1.33,scaleY:0.77,skewX:-16.6,skewY:-20.1,x:117.2,y:221},3).to({_off:true},1).wait(16).to({scaleX:1.28,scaleY:0.79,skewX:-22.6,skewY:-21,x:110.6,_off:false},0).to({regX:0,scaleX:1.06,scaleY:0.97,skewX:-14.9,skewY:-4.9,x:107.8,y:206.1},3).to({regY:-26.7,scaleX:1.03,scaleY:1.01,skewX:-6.7,skewY:-0.3,x:115.7,y:200.3},2).to({regY:-26.8,scaleX:1.14,scaleY:1.11,skewX:-17.2,skewY:-21.7,x:128.1,y:190.1},3).to({_off:true},1).wait(147));

	// 2_LegR2
	this.instance_57 = new lib._2_LegR2_1("single",0);
	this.instance_57.setTransform(102.4,203.2,0.937,1.065,0,17,4.1,-11.4,-13.6);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(24).to({startPosition:0,_off:false},0).to({regY:-13.4,scaleX:0.98,scaleY:1.02,skewX:4.3,skewY:1,x:103.3,y:208.4},3).to({regY:-13.3,scaleX:1.03,scaleY:0.98,skewX:6.6,skewY:2.8,x:98.8,y:211.9},2).to({regX:-11.2,scaleX:1.13,scaleY:0.93,skewX:26.9,skewY:11.1,x:84.3,y:217},3).to({_off:true},1).wait(16).to({regX:-11.3,scaleX:1.31,scaleY:0.89,skewX:35.9,skewY:25.5,x:77.1,_off:false},0).to({regX:-12.4,regY:-14.1,scaleX:1.04,scaleY:0.98,skewX:28.2,skewY:35.7,x:85.2,y:210.5},3).to({regX:-11.2,regY:-13.5,scaleX:0.99,scaleY:1.15,skewX:31.8,skewY:35.9,x:93.7,y:209},2).to({regX:-11.4,regY:-13.3,scaleX:1.11,scaleY:1.33,skewX:35.9,skewY:47.1,x:103.2,y:196.6},3).to({_off:true},1).wait(147));

	// 2_ShoeR
	this.instance_58 = new lib._2_ShoeR_1("single",0);
	this.instance_58.setTransform(122.5,236.1,1.099,1.099,-21.1,0,0,3,-8.3);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(24).to({startPosition:0,_off:false},0).to({scaleX:1.02,scaleY:1.02,rotation:-5.1,x:131.8,y:239},3).to({regY:-8.3,scaleX:1.02,scaleY:1.03,rotation:0,skewX:4.8,skewY:3.8,x:127.4,y:241.9},2).to({regY:-8.2,scaleX:1.09,scaleY:1.14,skewX:19.5,skewY:15.6,x:104.5,y:247.2},3).to({_off:true},1).wait(16).to({scaleX:1.13,scaleY:1.1,skewX:13.3,skewY:15.1,x:97.5,y:256.2,_off:false},0).to({regX:3.1,scaleX:1.1,scaleY:1.1,rotation:29.8,skewX:0,skewY:0,x:103.4,y:259.2},8).to({_off:true},1).wait(147));

	// 2_LegR1
	this.instance_59 = new lib._2_LegR1_1("single",0);
	this.instance_59.setTransform(130.4,168.6,1.072,1.16,0,-10.2,-14.4,17.9,-11);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(24).to({startPosition:0,_off:false},0).to({scaleX:1.02,scaleY:1.04,skewX:-2.3,skewY:-3.3,x:134.6,y:182.9},3).to({regX:18,regY:-10.8,scaleX:1.03,skewX:9.6,skewY:9.3,x:134.9,y:195.4},2).to({scaleX:1.14,scaleY:1.16,skewX:38.8,skewY:37.5,x:131.1,y:218.9},3).to({_off:true},1).wait(16).to({scaleX:1.21,scaleY:1.1,skewX:34.4,skewY:35.1,x:124.2,_off:false},0).to({scaleX:1.07,scaleY:1.03,skewX:-1.5,skewY:9,x:118.5,y:195.4},3).to({regX:17.9,regY:-10.9,scaleX:1.01,scaleY:1.05,skewX:-8.9,skewY:-3.4,x:123.6,y:182.9},2).to({scaleX:1.08,scaleY:1.26,skewX:-9.3,skewY:-15.6,x:130.4,y:158.7},3).to({_off:true},1).wait(147));

	// 2_HandR1
	this.instance_60 = new lib._2_HandR1_1("single",0);
	this.instance_60.setTransform(81.5,135.8,0.999,0.999,-10.4,0,0,2,-19.5);
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(24).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:-2.3,x:91.3,y:135.5},3).to({scaleX:1.02,scaleY:0.99,rotation:0,skewX:-1.1,skewY:0.6,x:92.1,y:141.5},2).to({regY:-19.2,scaleX:1.07,scaleY:0.95,skewX:-4.9,skewY:2.8,x:84.3,y:159.8},3).to({_off:true},1).wait(16).to({scaleX:1.07,scaleY:0.96,skewX:-11.5,x:70.4,_off:false},0).to({regX:1.9,regY:-19.4,scaleX:1.02,scaleY:1.01,skewX:-12.2,skewY:0.6,x:64.9,y:141.5},3).to({regX:2,scaleX:1,scaleY:1.01,skewX:-8.9,skewY:-2.3,x:74.8,y:135.5},2).to({regY:-19.5,scaleX:1,scaleY:1.09,skewX:-9.5,skewY:-11.2,x:81.5,y:122.8},3).to({_off:true},1).wait(147));

	// 5_Head
	this.instance_61 = new lib._5_Head_1("single",0);
	this.instance_61.setTransform(114.4,71.8,0.999,0.999,-0.2,0,0,-1.4,13);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(5).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:127.1,y:60},4,cjs.Ease.get(1)).to({regX:-1.4,regY:13.1,scaleX:1,scaleY:1,rotation:11.7,x:114.4,y:71.9},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_Neck
	this.instance_62 = new lib._5_Neck_1("single",0);
	this.instance_62.setTransform(119.3,77.2,0.999,0.999,-18.9,0,0,0.1,3);
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(5).to({startPosition:0,_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:0,x:127,y:68},4,cjs.Ease.get(1)).to({regX:0.1,scaleX:1,scaleY:1,rotation:-18.8,x:119.3,y:77.2},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_Torso
	this.instance_63 = new lib._5_Torso_1("single",0);
	this.instance_63.setTransform(126.7,135,0.96,0.877,0,-10.6,-4.4,-2.5,29.5);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(5).to({startPosition:0,_off:false},0).to({regX:-2.3,scaleX:1,scaleY:1,skewX:0,skewY:0,x:126.1,y:135.5},4,cjs.Ease.get(1)).to({regX:-2.4,scaleX:0.96,scaleY:0.88,skewX:-10.5,skewY:-4.3,x:126.7,y:135},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_HandL1
	this.instance_64 = new lib._5_HandL1_1("single",0);
	this.instance_64.setTransform(144.8,82,0.999,0.999,26.3,0,0,-16.4,4.4);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(5).to({startPosition:0,_off:false},0).to({regY:4.5,scaleX:1,scaleY:1,rotation:0,x:153.6,y:72},4,cjs.Ease.get(1)).to({regX:-16.4,regY:4.4,scaleX:0.87,scaleY:1,skewX:26.3,skewY:37.4,x:144.8,y:81.9},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_HandL2
	this.instance_65 = new lib._5_HandL2_1("single",0);
	this.instance_65.setTransform(185.1,85,0.998,0.998,52.7,0,0,-9.9,7);
	this.instance_65._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(5).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:188.6,y:57},4,cjs.Ease.get(1)).to({scaleX:0.62,scaleY:1,rotation:22.4,x:178.1,y:85.9},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_HandL3
	this.instance_66 = new lib._5_HandL3_1("single",0);
	this.instance_66.setTransform(216.2,92.3,0.999,0.999,59.7,0,0,-7.5,5);
	this.instance_66._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(5).to({startPosition:0,_off:false},0).to({regX:-7.3,scaleX:1,scaleY:1,rotation:0,x:213.6,y:36.5},4,cjs.Ease.get(1)).to({regX:-7.5,scaleX:1,scaleY:1,rotation:-18.6,x:201.7,y:72.9},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_HandR1
	this.instance_67 = new lib._5_HandR1_1("single",0);
	this.instance_67.setTransform(92.5,85.3,0.999,0.999,-57.8,0,0,12.1,6.5);
	this.instance_67._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(5).to({startPosition:0,_off:false},0).to({regX:12,scaleX:1,scaleY:1,rotation:0,x:104,y:68.5},4,cjs.Ease.get(1)).to({regX:12.1,scaleX:1,scaleY:1,rotation:-57.7,x:92.5,y:85.3},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_HandR2
	this.instance_68 = new lib._5_HandR2_1("single",0);
	this.instance_68.setTransform(60.6,101.5,0.999,0.999,-63.3,0,0,8.1,12.6);
	this.instance_68._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(5).to({startPosition:0,_off:false},0).to({regX:8,scaleX:1,scaleY:1,rotation:0,x:72,y:48.6},4,cjs.Ease.get(1)).to({regX:8.1,regY:12.5,scaleX:1,scaleY:1,rotation:-44.5,x:60.6,y:101.4},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_HandR3
	this.instance_69 = new lib._5_HandR3_1("single",0);
	this.instance_69.setTransform(26.1,106.5,0.998,0.998,-36.2,0,0,7,5);
	this.instance_69._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(5).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:51,y:18},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:32.9,x:26.1,y:95},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_ShoeR
	this.instance_70 = new lib._5_ShoeR_1("single",0);
	this.instance_70.setTransform(116.6,258.7,0.85,1,0,-12.1,-30.7,3.5,-5.9);
	this.instance_70._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(5).to({startPosition:0,_off:false},0).to({scaleX:1,skewX:0,skewY:0,x:120.5,y:263.1},4,cjs.Ease.get(1)).to({scaleX:0.85,skewX:-12,skewY:-30.6,x:116.6,y:258.7},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_ShoeL
	this.instance_71 = new lib._5_ShoeL_1("single",0);
	this.instance_71.setTransform(137.2,255.3,0.695,1,0,0,0,-3.5,-9.9);
	this.instance_71._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(5).to({startPosition:0,_off:false},0).to({regX:-3.3,scaleX:1,x:132.1,y:256.1},4,cjs.Ease.get(1)).to({regX:-3.4,scaleX:0.7,x:137.2,y:255.3},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_LegL1
	this.instance_72 = new lib._5_LegL1_1("single",0);
	this.instance_72.setTransform(140.6,153.1,1,1,-0.7,0,0,1.1,-25.5);
	this.instance_72._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(5).to({startPosition:0,_off:false},0).to({regX:1,rotation:0,x:137.5,y:153},4,cjs.Ease.get(1)).to({regX:1.1,rotation:-0.6,x:140.6,y:153.1},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_LegL2
	this.instance_73 = new lib._5_LegL2_1("single",0);
	this.instance_73.setTransform(142,210.4,1,1,-1.4,0,0,1.1,-20.9);
	this.instance_73._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(5).to({startPosition:0,_off:false},0).to({regX:1,rotation:0,x:138.5,y:210.6},4,cjs.Ease.get(1)).to({regX:1.1,rotation:-1.3,x:142,y:210.4},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_LegR1
	this.instance_74 = new lib._5_LegR1_1("single",0);
	this.instance_74.setTransform(113.6,151.9,1,1,6,0,0,-1.5,-22.1);
	this.instance_74._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(5).to({startPosition:0,_off:false},0).to({regX:-1.3,regY:-21.9,rotation:0,x:111.6,y:152.5},4,cjs.Ease.get(1)).to({regX:-1.4,regY:-22,rotation:6,x:113.6,y:151.9},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_LegR2
	this.instance_75 = new lib._5_LegR2_1("single",0);
	this.instance_75.setTransform(107.2,206.5,1,1,1.1,0,0,-2.9,-23.4);
	this.instance_75._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(5).to({startPosition:0,_off:false},0).to({rotation:0,x:110.6,y:210.1},4,cjs.Ease.get(1)).to({rotation:1.1,x:107.2,y:206.5},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72.9,82,108.1,202.1);


(lib.LeftPlayer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"naklToUp":0,"upToNakl":9,"naklToSit":19,"sitToNakl":41,"cycle":62,"stop":9,"stop":19,"stop":41,"stop":62,"stop":204});

	// Ball
	this.instance = new lib.Ball();
	this.instance.setTransform(58.5,252.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(205));

	// 6_Head
	this.instance_1 = new lib._6_Head_1("synched",0,false);
	this.instance_1.setTransform(117.2,78,1.009,1.047,0,-22.6,-16.9,-1,15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(167).to({startPosition:0,_off:false},0).to({regX:-1,scaleX:1,scaleY:1.01,skewX:-7.3,skewY:-5.3,x:118.8,y:59.4},2).to({regX:-0.8,scaleX:1,scaleY:1,skewX:18.3,skewY:17.6,x:129.3,y:52.2},2).to({regX:-1,regY:15.1,scaleX:1,scaleY:1,skewX:32.9,skewY:31.8,x:136.9,y:53.9},2).wait(1).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:16.3,skewY:15.8,x:128.2,y:52.1},3,cjs.Ease.get(-0.99)).to({regX:-0.8,regY:15,scaleX:1,scaleY:1,skewX:0,skewY:0,x:119.6,y:50.1},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:18.1,skewY:17.6,x:130.8,y:52.9},3,cjs.Ease.get(-0.99)).to({regX:-1,regY:15.1,scaleX:1,scaleY:1,skewX:36.4,skewY:35.3,x:141.9,y:55.6},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:15.8,skewY:15.3,x:129.5,y:52.4},3,cjs.Ease.get(-0.99)).to({regX:-0.8,scaleX:1,scaleY:1.01,skewX:-5.3,skewY:-3.9,x:119.1,y:57.2},2).to({regX:-1,regY:15,scaleX:1.01,scaleY:1.05,skewX:-35.2,skewY:-29.5,x:117.2,y:78},3).to({_off:true},1).wait(5));

	// 6_HandL3Up
	this.instance_2 = new lib._6_HandL3Up_1("synched",0,false);
	this.instance_2.setTransform(168.3,134.1,1.05,1.002,0,-4.7,-1.9,8.5,-4.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.02,scaleY:1,skewX:-1.3,skewY:-0.3,x:151.5,y:124.5},2).to({scaleX:1,scaleY:1,skewX:11.8,skewY:11,x:142.4,y:123.6},2).to({scaleX:1,scaleY:1,skewX:21.2,skewY:20.1,x:141.8,y:126.7},2).wait(1).to({startPosition:0},0).to({regX:8.4,scaleX:1,scaleY:1,skewX:10.5,skewY:10,x:142.3,y:123.2},3,cjs.Ease.get(-0.99)).to({regX:8.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:143,y:119.7},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({regX:8.6,scaleX:1,scaleY:1,skewX:12.3,skewY:11.8,x:142.8,y:124.1},3,cjs.Ease.get(-0.99)).to({regX:8.4,scaleX:1,scaleY:1,skewX:24.6,skewY:23.6,x:142.3,y:128.5},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:10.8,skewY:10.3,x:142.6,y:123.6},3,cjs.Ease.get(-0.99)).to({regX:8.5,scaleX:1.01,scaleY:1,skewX:-0.9,skewY:-0.3,x:149.4,y:123.3},2).to({scaleX:1.05,scaleY:1,skewX:-4.6,skewY:-1.8,x:168.3,y:134.1},3).to({_off:true},1).wait(5));

	// 6_HandL2
	this.instance_3 = new lib._6_HandL2_1("synched",0,false);
	this.instance_3.setTransform(172.2,96.1,1.05,1.002,0,-45.2,-42.4,13.4,-12.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.02,scaleY:1,skewX:-14.8,skewY:-13.9,x:172.4,y:95.5},2).to({regX:13.5,scaleX:1.01,skewX:8,skewY:13.5,x:173.3,y:106.8},2).to({scaleX:1.01,skewX:14.7,skewY:24.4,x:173.9,y:116},2).wait(1).to({startPosition:0},0).to({regY:-12.9,scaleX:1.01,skewX:7.3,skewY:12.1,x:173.2,y:105.5},3,cjs.Ease.get(-0.99)).to({regY:-12.8,scaleX:1,skewX:0,skewY:0,x:172.5,y:95.2},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({scaleX:1.01,skewX:9,skewY:13.8,x:173.8,y:107.5},3,cjs.Ease.get(-0.99)).to({scaleX:1.01,skewX:18.2,skewY:27.8,x:175.1,y:119.9},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({regX:13.4,regY:-12.9,scaleX:1.01,skewX:7.8,skewY:12.1,x:173.7,y:106},3,cjs.Ease.get(-0.99)).to({regX:13.6,regY:-12.8,scaleX:1.01,skewX:-11.1,skewY:-10.3,x:172.5,y:95.4},2).to({regX:13.4,scaleX:1.05,scaleY:1,skewX:-45.1,skewY:-42.3,x:172.2,y:96.1},3).to({_off:true},1).wait(5));

	// 6_HandL1
	this.instance_4 = new lib._6_HandL1_1("synched",1,false);
	this.instance_4.setTransform(140.3,75.3,1.064,0.995,0,2.3,-4.4,-17,-10);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(167).to({startPosition:1,_off:false},0).to({scaleX:1.02,scaleY:1,skewX:0.8,skewY:-1.1,x:140.5,y:71.2},2).to({regX:-16.8,regY:-9.8,scaleX:1,scaleY:1,skewX:8,skewY:12.8,x:146.5,y:73.6},2).to({regX:-16.9,regY:-9.9,scaleX:1.01,skewX:14.7,skewY:23.2,x:151.1,y:77.1},2).wait(1).to({startPosition:1},0).to({regX:-16.8,scaleX:1,skewX:7.3,skewY:11.5,x:145.8,y:73.1},3,cjs.Ease.get(-0.99)).to({scaleX:1,skewX:0,skewY:0,x:140.6,y:69.1},3,cjs.Ease.get(1)).wait(2).to({startPosition:1},0).to({regX:-16.7,regY:-9.8,scaleX:1,skewX:9,skewY:13.3,x:147.7,y:74.4},3,cjs.Ease.get(-0.99)).to({regX:-16.9,regY:-9.9,scaleX:1.01,skewX:18.2,skewY:26.6,x:154.6,y:79.6},3,cjs.Ease.get(1)).wait(3).to({startPosition:1},0).to({scaleX:1,skewX:7.8,skewY:11.5,x:146.8,y:73.7},3,cjs.Ease.get(-0.99)).to({regX:-16.7,regY:-9.8,scaleX:1.02,scaleY:1,skewX:0.5,skewY:-0.8,x:140.7,y:70.7},2).to({regX:-16.9,regY:-9.9,scaleX:1.06,scaleY:1,skewX:2.3,skewY:-4.3,x:140.3,y:75.3},3).to({_off:true},1).wait(5));

	// 6_Torso3
	this.instance_5 = new lib._6_Torso3_1("synched",1,false);
	this.instance_5.setTransform(129.5,118.3,1.027,0.917,0,-20.7,-15.7,-5.8,22.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(167).to({startPosition:1,_off:false},0).to({scaleX:1.01,scaleY:0.97,skewX:-6.6,skewY:-5.1,x:120.3,y:113.9},2).to({regX:-5.8,scaleX:1,scaleY:1,skewX:8,skewY:7.5,x:115.8,y:112},2).to({regY:21.9,skewX:14.7,skewY:13.6,x:116,y:112.3},2).wait(1).to({startPosition:1},0).to({skewX:7.3,skewY:6.8,x:115.9,y:111.9},3,cjs.Ease.get(-0.99)).to({regY:22.1,skewX:0,skewY:0,x:115.6,y:111.7},3,cjs.Ease.get(1)).wait(2).to({startPosition:1},0).to({skewX:9,skewY:8.5,x:116.6,y:112.2},3,cjs.Ease.get(-0.99)).to({regX:-6,regY:21.9,skewX:18.2,skewY:17.1,x:117.3,y:112.5},3,cjs.Ease.get(1)).wait(3).to({startPosition:1},0).to({regX:-5.9,skewX:7.8,skewY:7.3,x:116.4,y:112.1},3,cjs.Ease.get(-0.99)).to({regX:-5.8,regY:22.1,scaleX:1.01,scaleY:0.98,skewX:-4.9,skewY:-3.6,x:119.1,y:113.4},2).to({regX:-5.7,scaleX:1.03,scaleY:0.92,skewX:-20.6,skewY:-15.6,x:129.5,y:118.3},3).to({_off:true},1).wait(5));

	// 6_Neck
	this.instance_6 = new lib._6_Neck_1("synched",0,false);
	this.instance_6.setTransform(116.7,74.4,1.027,1.051,0,-28.7,-15.7,-0.4,6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.01,scaleY:1.02,skewX:-9.3,skewY:-5.1,x:118,y:65.8},2).to({scaleX:1,scaleY:1.01,skewX:13,skewY:7.5,x:125.9,y:63.3},2).to({scaleY:1.01,skewX:23.6,skewY:13.6,x:131.6,y:64.6},2).wait(1).to({startPosition:0},0).to({scaleY:1.01,skewX:11.8,skewY:6.8,x:125.1,y:63.1},3,cjs.Ease.get(-0.99)).to({scaleY:1,skewX:0,skewY:0,x:118.6,y:61.6},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({regX:-0.4,scaleY:1.01,skewX:13.5,skewY:8.5,x:127.3,y:63.8},3,cjs.Ease.get(-0.99)).to({regX:-0.3,scaleY:1.01,skewX:27.1,skewY:17.1,x:136.1,y:66},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({scaleY:1.01,skewX:11.8,skewY:7.3,x:126.2,y:63.5},3,cjs.Ease.get(-0.99)).to({scaleX:1.01,scaleY:1.01,skewX:-6.9,skewY:-3.6,x:118.1,y:64.8},2).to({scaleX:1.03,scaleY:1.05,skewX:-28.6,skewY:-15.6,x:116.7,y:74.4},3).to({_off:true},1).wait(5));

	// 6_Torso2
	this.instance_7 = new lib._6_Torso2_1("synched",1,false);
	this.instance_7.setTransform(132.1,136.4,1.038,0.952,0,-14,-9,-2.4,16.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(167).to({startPosition:1,_off:false},0).to({scaleX:1.01,scaleY:0.98,skewX:-4.3,skewY:-2.8,x:120.5,y:134.6},2).to({scaleX:1,scaleY:1,skewX:2.5,skewY:2,x:113.3,y:133.6},2).to({skewX:4.7,skewY:3.6,x:112.2,y:133.7},2).wait(1).to({startPosition:1},0).to({skewX:2.3,skewY:1.8,x:113.4,y:133.6},3,cjs.Ease.get(-0.99)).to({skewX:0,skewY:0,x:114.6},3,cjs.Ease.get(1)).wait(2).to({startPosition:1},0).to({skewX:4,skewY:3.5,x:113.5,y:133.7},3,cjs.Ease.get(-0.99)).to({regY:16.6,skewX:8.2,skewY:7.1,x:112.4,y:133.8},3,cjs.Ease.get(1)).wait(3).to({startPosition:1},0).to({regY:16.5,skewX:3.5,skewY:3,x:113.6,y:133.6},3,cjs.Ease.get(-0.99)).to({scaleX:1.01,scaleY:0.99,skewX:-3.3,skewY:-2.1,x:119,y:134.3},2).to({scaleX:1.04,scaleY:0.95,skewX:-13.9,skewY:-8.9,x:132.1,y:136.4},3).to({_off:true},1).wait(5));

	// 6_Torso1
	this.instance_8 = new lib._6_Torso1_1("synched",1,false);
	this.instance_8.setTransform(129.5,147.3,1.038,0.865,0,-2.8,-9,-2.9,6.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(167).to({startPosition:1,_off:false},0).to({scaleX:1.01,scaleY:0.96,skewX:-0.6,skewY:-2.8,x:118.2,y:146.2},2).to({scaleX:1,scaleY:1,skewX:0.8,skewY:0.1,x:111,y:145.6},2).to({skewX:1.5,skewY:0.4,x:109.7},2).wait(1).to({startPosition:1},0).to({skewX:0.8,skewY:0.1,x:111.1},3,cjs.Ease.get(-0.99)).to({skewX:0,skewY:0,x:112.6},3,cjs.Ease.get(1)).wait(2).to({startPosition:1},0).to({skewX:2.5,skewY:1.8,x:110.9},3,cjs.Ease.get(-0.99)).to({skewX:5,skewY:3.9,x:109.2,y:145.5},3,cjs.Ease.get(1)).wait(3).to({skewY:3.9},0).to({skewX:2,skewY:1.6,x:111},3,cjs.Ease.get(-0.99)).to({regX:-2.9,scaleX:1.01,scaleY:0.97,skewX:-0.4,skewY:-2.1,x:116.7,y:146.1},2).to({regX:-2.8,scaleX:1.04,scaleY:0.87,skewX:-2.7,skewY:-8.9,x:129.5,y:147.3},3).to({_off:true},1).wait(5));

	// 6_HandL3Down
	this.instance_9 = new lib._6_HandL3Down_1("synched",0,false);
	this.instance_9.setTransform(168.5,134.6,1.05,1.002,0,-4.7,-1.9,4.6,-5.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(167).to({startPosition:0,_off:false},0).to({regX:4.5,scaleX:1.02,scaleY:1,skewX:-1.3,skewY:-0.3,x:151.4,y:125},2).to({scaleX:1,scaleY:1,skewX:8,skewY:7.5,x:141.7,y:124.1},2).to({regY:-5.4,skewX:14.7,skewY:13.6,x:140.6,y:127.1},2).wait(1).to({startPosition:0},0).to({regY:-5.3,skewX:7.3,skewY:6.8,x:141.8,y:123.7},3,cjs.Ease.get(-0.99)).to({skewX:0,skewY:0,x:143.1,y:120.2},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({skewX:9,skewY:8.5,x:142.1,y:124.5},3,cjs.Ease.get(-0.99)).to({regX:4.4,skewX:18.2,skewY:17.1,x:141.1,y:128.9},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({regX:4.5,regY:-5.4,skewX:7.8,skewY:7.3,x:142.3,y:123.9},3,cjs.Ease.get(-0.99)).to({regY:-5.3,scaleX:1.01,scaleY:1,skewX:-0.9,skewY:-0.3,x:149.4,y:123.8},2).to({regX:4.6,scaleX:1.05,scaleY:1,skewX:-4.6,skewY:-1.8,x:168.5,y:134.6},3).to({_off:true},1).wait(5));

	// 6_LegL1
	this.instance_10 = new lib._6_LegL1_1("synched",0,false);
	this.instance_10.setTransform(142.6,146.2,1,1,16.5,0,0,-1.4,-27.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(167).to({startPosition:0,_off:false},0).to({rotation:5.3,x:128,y:145.9},2).to({rotation:0,skewX:0.5,x:118.8,y:145.7},2).to({skewX:1.1,x:117.4},2).wait(1).to({startPosition:0},0).to({skewX:0.5,x:119},3,cjs.Ease.get(-0.99)).to({skewX:0,x:120.6},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({skewX:0.5,x:119},3,cjs.Ease.get(-0.99)).to({skewX:1.1,x:117.4},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({skewX:0.3,x:119.2},3,cjs.Ease.get(-0.99)).to({regY:-27.2,rotation:4,skewX:0,x:126.1,y:145.9},2).to({regY:-27.3,rotation:16.5,x:142.6,y:146.2},3).to({_off:true},1).wait(5));

	// 6_ShoeL
	this.instance_11 = new lib._6_ShoeL_1("synched",1,false);
	this.instance_11.setTransform(143.5,259.2,1,1,0,0,0,3.5,-6.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(167).to({startPosition:1,_off:false},0).to({startPosition:1},2).to({startPosition:1},2).to({startPosition:1},2).wait(1).to({startPosition:1},0).to({startPosition:1},3,cjs.Ease.get(-0.99)).to({startPosition:1},3,cjs.Ease.get(1)).wait(2).to({startPosition:1},0).to({startPosition:1},3,cjs.Ease.get(-0.99)).to({startPosition:1},3,cjs.Ease.get(1)).wait(3).to({startPosition:1},0).to({startPosition:1},3,cjs.Ease.get(-0.99)).to({startPosition:1},2).to({startPosition:1},3).to({_off:true},1).wait(5));

	// 6_LegL2
	this.instance_12 = new lib._6_LegL2_1("synched",0,false);
	this.instance_12.setTransform(141.8,205.2,1,1.002,0,3.9,0,-3.4,-27.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(167).to({startPosition:0,_off:false},0).to({regY:-27.9,scaleY:1,skewX:1.3,x:139,y:205.1},2).to({regX:-3.4,regY:-27.7,scaleY:1,skewX:-2.8,x:134.3,y:205.2},2).to({regX:-3.3,regY:-27.8,scaleY:1,skewX:-5.3,x:131.8},2).wait(1).to({startPosition:0},0).to({scaleY:1,skewX:-2.4,x:134.7,y:205.1},3,cjs.Ease.get(-0.99)).to({scaleY:1,skewX:0,x:137.6,y:205.2},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({scaleY:1,skewX:-2.4,x:134.7,y:205.1},3,cjs.Ease.get(-0.99)).to({scaleY:1,skewX:-5.3,x:131.8,y:205.2},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({regY:-27.7,scaleY:1,skewX:-2.1,x:135.1,y:205.3},3,cjs.Ease.get(-0.99)).to({regY:-27.9,scaleY:1,skewX:0.8,x:138.7,y:205.1},2).to({regY:-27.8,scaleY:1,skewX:3.9,x:141.8,y:205.2},3).to({_off:true},1).wait(5));

	// 6_LegR1
	this.instance_13 = new lib._6_LegR1_1("synched",0,false);
	this.instance_13.setTransform(118.5,146.3,1.064,1,18,0,0,1,-23.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.02,rotation:5.8,x:109.3,y:146.2},2).to({regY:-23.3,scaleX:1,rotation:0,skewX:0.5,x:102.7},2).to({skewX:1.1,x:101.2},2).wait(1).to({startPosition:0},0).to({skewX:0.5,x:102.9},3,cjs.Ease.get(-0.99)).to({skewX:0,x:104.5},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({skewX:0.5,x:102.9},3,cjs.Ease.get(-0.99)).to({skewX:1.1,x:101.2},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({skewX:0.3,x:103},3,cjs.Ease.get(-0.99)).to({regX:1.1,regY:-23.2,scaleX:1.02,rotation:4.3,skewX:0,x:108,y:146.3},2).to({regX:1,regY:-23.4,scaleX:1.06,rotation:18,x:118.5},3).to({_off:true},1).wait(5));

	// 6_ShoeR
	this.instance_14 = new lib._6_ShoeR_1("synched",1,false);
	this.instance_14.setTransform(106.8,250.2,1,1,0,0,0,7,-5.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(167).to({startPosition:1,_off:false},0).to({startPosition:1},2).to({startPosition:1},2).to({startPosition:1},2).wait(1).to({startPosition:1},0).to({startPosition:1},3,cjs.Ease.get(-0.99)).to({startPosition:1},3,cjs.Ease.get(1)).wait(2).to({startPosition:1},0).to({startPosition:1},3,cjs.Ease.get(-0.99)).to({startPosition:1},3,cjs.Ease.get(1)).wait(3).to({startPosition:1},0).to({startPosition:1},3,cjs.Ease.get(-0.99)).to({startPosition:1},2).to({startPosition:1},3).to({_off:true},1).wait(5));

	// 6_LegR2
	this.instance_15 = new lib._6_LegR2_1("synched",0,false);
	this.instance_15.setTransform(102.1,199.6,1.095,1,-2.1,0,0,-0.9,-25);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(167).to({startPosition:0,_off:false},0).to({regY:-24.8,scaleX:1.03,rotation:-0.4,x:103.4,y:200.1},2).to({regY:-24.9,scaleX:1,scaleY:1,rotation:0,skewX:-1.6,x:101.8,y:200.2},2).to({regX:-0.9,regY:-24.8,scaleY:1,skewX:-3.4,x:99.9},2).wait(1).to({startPosition:0},0).to({regY:-24.9,scaleY:1,skewX:-1.6,x:102.1,y:200.1},3,cjs.Ease.get(-0.99)).to({regX:-0.8,regY:-24.8,scaleY:1,skewX:0,x:104.1,y:200.2},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({regY:-24.9,scaleY:1,skewX:-1.6,x:102.1,y:200.1},3,cjs.Ease.get(-0.99)).to({regX:-0.9,regY:-24.8,scaleY:1,skewX:-3.4,x:99.9,y:200.2},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({regY:-24.9,scaleY:1,skewX:-1.3,x:102.3,y:200.1},3,cjs.Ease.get(-0.99)).to({regX:-0.8,regY:-24.8,scaleX:1.02,scaleY:1,rotation:-0.3,skewX:0,x:103.7},2).to({regY:-24.9,scaleX:1.1,rotation:-2,x:102.1,y:199.6},3).to({_off:true},1).wait(5));

	// 6_HandR3
	this.instance_16 = new lib._6_HandR3_1("synched",0,false);
	this.instance_16.setTransform(103,133.7,1.045,1.009,0,-8.6,-4,1.6,-6.4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.01,scaleY:1,skewX:-2.6,skewY:-1.1,x:99.7,y:124.3},2).to({regX:1.5,scaleX:1,scaleY:1,skewX:5.8,skewY:5.3,x:97.4,y:118.3},2).to({skewX:10.7,skewY:9.6,x:97,y:117.2},2).wait(1).to({startPosition:0},0).to({skewX:5.3,skewY:4.8,x:97.6,y:118.5},3,cjs.Ease.get(-0.99)).to({skewX:0,skewY:0,x:98,y:119.7},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({skewX:7,skewY:6.5,x:98.1,y:118},3,cjs.Ease.get(-0.99)).to({skewX:14.2,skewY:13.1,x:98.2,y:116.4},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({skewX:6.1,skewY:5.6,x:98.1,y:118.3},3,cjs.Ease.get(-0.99)).to({scaleX:1.01,scaleY:1,skewX:-1.8,skewY:-0.8,x:99.2,y:123.2},2).to({regX:1.6,scaleX:1.05,scaleY:1.01,skewX:-8.5,skewY:-3.9,x:103,y:133.7},3).to({_off:true},1).wait(5));

	// 6_HandR2
	this.instance_17 = new lib._6_HandR2_1("synched",0,false);
	this.instance_17.setTransform(103.8,112.7,1.066,0.987,0,11.2,13.6,-1,-10.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(167).to({startPosition:0,_off:false},0).to({scaleX:1.02,scaleY:1,skewX:3.6,skewY:4.5,x:97.4,y:104.6},2).to({regX:-0.8,scaleX:1,scaleY:1,skewX:12.8,skewY:12.3,x:98.1,y:99.6},2).to({scaleX:1,scaleY:1,skewX:23.4,skewY:22.3,x:101.3,y:98.7},2).wait(1).to({startPosition:0},0).to({regY:-10.9,scaleX:1,scaleY:1,skewX:11.6,skewY:11,x:97.8,y:99.6},3,cjs.Ease.get(-0.99)).to({regY:-10.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:94.1,y:100.7},3,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({regX:-0.9,scaleX:1,scaleY:1,skewX:13.3,skewY:12.8,x:98.9,y:99.4},3,cjs.Ease.get(-0.99)).to({regX:-0.8,regY:-10.9,scaleX:1,scaleY:1,skewX:26.9,skewY:25.8,x:103.7,y:98.1},3,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:11.8,skewY:11.3,x:98.3,y:99.5},3,cjs.Ease.get(-0.99)).to({regY:-10.8,scaleX:1.02,scaleY:1,skewX:2.8,skewY:3.3,x:96.5,y:103.7},2).to({regX:-0.9,scaleX:1.07,scaleY:0.99,skewX:11.2,skewY:13.6,x:103.8,y:112.7},3).to({_off:true},1).wait(5));

	// 6_HandR1
	this.instance_18 = new lib._6_HandR1_1("synched",1,false);
	this.instance_18.setTransform(100.4,83.8,1.027,0.899,0,-20.7,-15.7,3.6,-16);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(167).to({startPosition:1,_off:false},0).to({regX:3.5,scaleX:1.01,scaleY:0.97,skewX:-6.6,skewY:-5.1,x:100.7,y:73.3},2).to({scaleX:1,scaleY:1,skewX:4.8,skewY:4.3,x:107.7,y:67.3},2).to({skewX:9,skewY:7.9,x:112.9,y:66.8},2).wait(1).to({startPosition:1},0).to({regX:3.6,skewX:4.5,skewY:3.8,x:107.1,y:67.4},3,cjs.Ease.get(-0.99)).to({regX:3.5,skewX:0,skewY:0,x:101,y:68.1},3,cjs.Ease.get(1)).wait(2).to({startPosition:1},0).to({skewX:6.1,skewY:5.6,x:109.1,y:67.5},3,cjs.Ease.get(-0.99)).to({regY:-15.8,skewX:12.5,skewY:11.4,x:117.2,y:67},3,cjs.Ease.get(1)).wait(3).to({startPosition:1},0).to({regX:3.6,skewX:5.3,skewY:4.8,x:108.1,y:67.6},3,cjs.Ease.get(-0.99)).to({regX:3.5,regY:-15.9,scaleX:1.01,scaleY:0.97,skewX:-4.9,skewY:-3.6,x:100.8,y:72},2).to({regX:3.6,scaleX:1.03,scaleY:0.9,skewX:-20.6,skewY:-15.6,x:100.4,y:83.8},3).to({_off:true},1).wait(5));

	// 3_Head
	this.instance_19 = new lib._3_Head_1("synched",0,false);
	this.instance_19.setTransform(106.4,108.6,1,1,0,0,0,8,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({scaleX:1,scaleY:1,rotation:23.8,x:113.3,y:84},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({rotation:40.5,y:83.9,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:106.4,y:108.6},5,cjs.Ease.get(1)).to({scaleY:1.01,skewX:6.4,skewY:6.5,x:101.6,y:120.5},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({startPosition:0,_off:false},0).to({scaleY:1,skewX:0,skewY:0,x:106.4,y:108.6},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:10.9,x:113.3,y:83.9},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({x:111.3,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:106.4,y:108.6},4,cjs.Ease.get(1)).wait(1));

	// 3_HandL3
	this.instance_20 = new lib._3_HandL3_1("synched",0,false);
	this.instance_20.setTransform(138.5,168.2,1,1,0,0,0,-5.9,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({regX:-5.9,scaleX:1,scaleY:1,rotation:30.6,x:183.7,y:144},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({rotation:-43.4,x:184.3,y:142.8,_off:false},0).to({regX:-5.8,scaleX:1,scaleY:1,rotation:0,x:138.5,y:168.2},5,cjs.Ease.get(1)).to({scaleX:0.87,scaleY:0.87,skewX:34.7,skewY:40,x:127,y:180.3},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:138.5,y:168.2},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({regY:-8.9,scaleX:1,scaleY:1,rotation:50.4,x:173.1,y:146.4},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({regY:-8.8,scaleX:1,scaleY:1,rotation:0,x:138.5,y:168.2},4,cjs.Ease.get(1)).wait(1));

	// 3_HandL2
	this.instance_21 = new lib._3_HandL2_1("synched",0,false);
	this.instance_21.setTransform(136,140.7,1,1,0,0,0,0,-12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleX:1,scaleY:1.03,rotation:-21,x:171.8,y:115.7},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:136,y:140.7},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1.01,skewX:23.7,skewY:24.3,x:135.5,y:155.4},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:136,y:140.7},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({regY:-12.4,scaleX:1,scaleY:1.03,rotation:-1.2,x:171.4,y:115.7},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({regY:-12.3,scaleX:1,scaleY:1,rotation:0,x:136,y:140.7},4,cjs.Ease.get(1)).wait(1));

	// 3_HandL1
	this.instance_22 = new lib._3_HandL1_1("synched",1,false);
	this.instance_22.setTransform(129.6,108.2,1,1,0,0,0,-1.4,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({regX:-1.4,scaleX:1,scaleY:1,rotation:-39.2,x:142.4,y:91.7},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:1,_off:false},0).to({regX:-1.3,scaleX:1,scaleY:1,rotation:0,x:129.6,y:108.2},5,cjs.Ease.get(1)).to({regY:-14.4,scaleY:1.01,skewX:-5,skewY:-5.1,x:125.5,y:120.1},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({startPosition:1,_off:false},0).to({regY:-14.3,scaleY:1,skewX:0,skewY:0,x:129.6,y:108.2},4,cjs.Ease.get(1)).wait(101).to({startPosition:1},0).to({regX:-1.4,scaleX:1,scaleY:1.15,rotation:-35.7,x:141,y:85.7},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:1,_off:false},0).to({regX:-1.3,scaleX:1,scaleY:1,rotation:0,x:129.6,y:108.2},4,cjs.Ease.get(1)).wait(1));

	// 3_Torso
	this.instance_23 = new lib._3_Torso_1("synched",1,false);
	this.instance_23.setTransform(131.5,138.6,1,1,0,0,0,11.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({scaleX:0.96,scaleY:1.21,skewX:9.5,skewY:2.5,x:129.8,y:134.9},4,cjs.Ease.get(-0.99)).to({regX:11.6,regY:19.1,scaleY:1.34,skewX:17.9,x:126.7,alpha:0.391},1).to({_off:true},1).wait(7).to({regX:11.7,regY:18.9,scaleX:0.89,scaleY:1.32,skewX:20,x:126.6,y:133.7,_off:false},0).to({regX:11.5,regY:19,scaleX:0.96,scaleY:1.21,skewX:9.5,x:129.8,y:134.9,alpha:1},1,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:131.5,y:138.6},5,cjs.Ease.get(1)).to({regY:18.9,scaleX:0.97,scaleY:1.02,skewX:-9.2,skewY:-5.2,x:132.5,y:150.3},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({startPosition:1,_off:false},0).to({regY:19,scaleX:1,scaleY:1,skewX:0,skewY:0,x:131.5,y:138.6},4,cjs.Ease.get(1)).wait(101).to({startPosition:1},0).to({regX:11.6,regY:19.1,scaleX:0.96,scaleY:1.3,skewX:9.5,skewY:2.5,x:130.1,y:133.5},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:1,_off:false},0).to({regX:11.5,regY:19,scaleX:1,scaleY:1,skewX:0,skewY:0,x:131.5,y:138.6},4,cjs.Ease.get(1)).wait(1));

	// 3_HandR3
	this.instance_24 = new lib._3_HandR3_1("synched",0,false);
	this.instance_24.setTransform(105.5,169.7,1,1,0,0,0,1,-10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({scaleX:1,scaleY:1,rotation:-6.2,x:61.3,y:152.9},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({rotation:60.6,x:51.3,y:149.8,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:105.5,y:169.7},5,cjs.Ease.get(1)).to({scaleX:0.87,scaleY:1.01,skewX:-9.5,skewY:-9.8,x:100.5,y:177.8},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:105.5,y:169.7},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({regX:1.1,regY:-10.2,scaleX:0.65,scaleY:1,skewX:11.1,skewY:-2,x:92.5,y:154.4},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({regX:1,regY:-10.3,scaleX:1,scaleY:1,skewX:0,skewY:0,x:105.5,y:169.7},4,cjs.Ease.get(1)).wait(1));

	// 3_HandR2
	this.instance_25 = new lib._3_HandR2_1("synched",0,false);
	this.instance_25.setTransform(97.1,136.7,1,1,0,0,0,-3.9,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({scaleX:1,scaleY:1,rotation:35.4,x:73.6,y:118.4},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({rotation:50.6,y:118.5,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:97.1,y:136.7},5,cjs.Ease.get(1)).to({regY:-15.4,scaleY:0.71,skewX:-4.3,skewY:-12.3,x:90.4,y:157.1},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({startPosition:0,_off:false},0).to({regY:-15.3,scaleY:1,skewX:0,skewY:0,x:97.1,y:136.7},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:15.2,x:93.7,y:122.9},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:97.1,y:136.7},4,cjs.Ease.get(1)).wait(1));

	// 3_HandR1
	this.instance_26 = new lib._3_HandR1_1("synched",1,false);
	this.instance_26.setTransform(88.1,103.7,1,1,0,0,0,-2.9,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({regX:-2.9,scaleX:1,scaleY:1,rotation:54.9,x:95.6,y:90.1},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:1,_off:false},0).to({regX:-2.8,scaleX:1,scaleY:1,rotation:0,x:88.1,y:103.7},5,cjs.Ease.get(1)).to({regY:-14.4,scaleY:1.01,skewX:9.4,skewY:9.7,x:86.7,y:123.3},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({startPosition:1,_off:false},0).to({regY:-14.3,scaleY:1,skewX:0,skewY:0,x:88.1,y:103.7},4,cjs.Ease.get(1)).wait(101).to({startPosition:1},0).to({scaleX:1,scaleY:1,rotation:18.2,x:95.7,y:90.1},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:1,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:88.1,y:103.7},4,cjs.Ease.get(1)).wait(1));

	// 3_ShoeR
	this.instance_27 = new lib._3_ShoeR_1("synched",1,false);
	this.instance_27.setTransform(101.4,259.7,1,1,0,0,0,7,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({scaleX:0.96,scaleY:1.08,rotation:10.2,x:105.8,y:254.4},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:1,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:101.4,y:259.7},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,rotation:-0.1,x:102.1,y:258.9},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({startPosition:1,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:101.4,y:259.7},4,cjs.Ease.get(1)).wait(101).to({startPosition:1},0).to({scaleX:0.96,scaleY:1.08,rotation:10.2,x:105.8,y:254.4},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:1,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:101.4,y:259.7},4,cjs.Ease.get(1)).wait(1));

	// 3_ShoeL
	this.instance_28 = new lib._3_ShoeL_1("synched",1,false);
	this.instance_28.setTransform(148.5,258.7,1,1,0,0,0,5,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({scaleX:0.89,x:147.3,y:258.3},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:1,_off:false},0).to({scaleX:1,x:148.5,y:258.7},5,cjs.Ease.get(1)).to({startPosition:1},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({startPosition:1,_off:false},0).to({startPosition:1},4).wait(101).to({startPosition:1},0).to({scaleX:0.89,x:147.3,y:258.3},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:1,_off:false},0).to({scaleX:1,x:148.5,y:258.7},4,cjs.Ease.get(1)).wait(1));

	// 3_LegL1
	this.instance_29 = new lib._3_LegL1_1("synched",0,false);
	this.instance_29.setTransform(148,143.1,1,1,0,0,0,1.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({rotation:0.8,x:145.9,y:144},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:0,_off:false},0).to({rotation:0,x:148,y:143.1},5,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:1,skewX:13.6,skewY:14,x:149.6,y:153.7},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:148,y:143.1},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({rotation:0.8,x:145.9,y:144},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({rotation:0,x:148,y:143.1},4,cjs.Ease.get(1)).wait(1));

	// 3_LegL2
	this.instance_30 = new lib._3_LegL2_1("synched",0,false);
	this.instance_30.setTransform(146.7,192.7,1,1,0,0,0,-1.9,-27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({regX:-1.7,scaleY:1.05,rotation:-1.1,x:143.7,y:193.1},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:0,_off:false},0).to({regX:-1.8,scaleY:1,rotation:0,x:146.7,y:192.7},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:0.96,skewX:-5.6,skewY:-11.1,x:135.2,y:197.3},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:146.7,y:192.7},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({regX:-1.7,scaleY:1.05,rotation:-1.1,x:143.7,y:193.1},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({regX:-1.8,scaleY:1,rotation:0,x:146.7,y:192.7},4,cjs.Ease.get(1)).wait(1));

	// 3_LegR1
	this.instance_31 = new lib._3_LegR1_1("synched",0,false);
	this.instance_31.setTransform(120,143.6,1,1,0,0,0,6.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({regY:-27.3,rotation:3.5},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:0,_off:false},0).to({regY:-27.4,rotation:0},5,cjs.Ease.get(1)).to({regY:-27.3,scaleX:0.9,scaleY:0.83,skewX:13.3,skewY:13.7,x:124.2,y:159.2},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({startPosition:0,_off:false},0).to({regY:-27.4,scaleX:1,scaleY:1,skewX:0,skewY:0,x:120,y:143.6},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({regY:-27.3,rotation:3.5},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({regY:-27.4,rotation:0},4,cjs.Ease.get(1)).wait(1));

	// 3_LegR2
	this.instance_32 = new lib._3_LegR2_1("synched",0,false);
	this.instance_32.setTransform(104.5,196.7,1,1,0,0,0,1,-29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({scaleY:0.95,rotation:-7.5,x:101.4,y:196.8},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(9).to({startPosition:0,_off:false},0).to({scaleY:1,rotation:0,x:104.5,y:196.7},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1.02,skewX:-2.6,skewY:-2.7,x:102.8},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(34).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:104.5},4,cjs.Ease.get(1)).wait(101).to({startPosition:0},0).to({scaleY:0.95,rotation:-7.5,x:101.4,y:196.8},3,cjs.Ease.get(-0.99)).to({_off:true},1).wait(33).to({startPosition:0,_off:false},0).to({scaleY:1,rotation:0,x:104.5,y:196.7},4,cjs.Ease.get(1)).wait(1));

	// Symbol_Golova
	this.instance_33 = new lib.Sit_Symbol_Golova("synched",0,false);
	this.instance_33.setTransform(94.8,157.2,0.855,1.008,0,-17.7,-9.6);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(33).to({startPosition:0,_off:false},0).wait(1).to({scaleX:0.88,scaleY:1,skewX:-11.2,skewY:-9.1,x:103.5,y:163.9},0).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:115.7,y:164.6},2).to({scaleX:0.9,scaleY:0.98,skewX:8.1,skewY:9,x:118.2,y:166.6},1).to({scaleX:0.89,scaleY:1,skewX:0,skewY:0,x:113.5,y:163.1},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:-27.4,skewY:-26.5,x:96.1,y:176.3},3).to({scaleX:0.9,scaleY:0.99,skewX:-18.1,skewY:-18.7,x:100.4,y:171.3},1).to({scaleX:0.88,scaleY:1,skewX:-11.2,skewY:-9.1,x:103.5,y:163.9},2).to({scaleX:0.86,scaleY:1.01,skewX:-17.6,skewY:-9.5,x:94.8,y:157.2},1).to({_off:true},1).wait(156));

	// Symbol_Predpleche_R
	this.instance_34 = new lib.Sit_Symbol_Predpleche_R("synched",0,false);
	this.instance_34.setTransform(84.5,191.9,0.827,1.004,0,-16.4,-8.1);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(33).to({startPosition:0,_off:false},0).wait(1).to({scaleX:0.86,scaleY:0.99,skewX:-6.1,skewY:-3.8,x:90.8,y:195.3},0).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:92.6,y:199.7},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:93.1,y:200.1},1).to({scaleX:0.89,scaleY:1,skewX:0,x:91.1,y:198.7},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:-12.3,skewY:-13.2,x:83.1,y:212.7},3).to({scaleX:0.9,scaleY:0.99,skewX:-8.3,skewY:-9,x:85.2,y:207.7},1).to({scaleX:0.86,scaleY:0.99,skewX:-6.1,skewY:-3.8,x:90.8,y:195.3},2).to({scaleX:0.83,scaleY:1,skewX:-16.3,skewY:-8,x:84.5,y:191.9},1).to({_off:true},1).wait(156));

	// Symbol_Predpleche_L
	this.instance_35 = new lib.Sit_Symbol_Predpleche_L("synched",0,false);
	this.instance_35.setTransform(113.9,185.4,0.882,0.978,0,-10.1,-2.2);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(33).to({startPosition:0,_off:false},0).wait(1).to({scaleX:0.89,scaleY:0.98,skewX:-7.2,skewY:-5.4,x:120.5,y:192.5},0).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:127.8,y:195.6},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:128.4,y:195.9},1).to({scaleX:0.89,scaleY:1,skewX:0,x:125.9,y:194.4},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:-12.3,skewY:-13.2,x:116.5,y:200.5},3).to({scaleX:0.9,scaleY:0.99,skewX:-8.3,skewY:-9,x:119.3,y:198},1).to({scaleX:0.89,scaleY:0.98,skewX:-7.2,skewY:-5.4,x:120.5,y:192.5},2).to({scaleX:0.88,scaleY:0.98,skewX:-10,skewY:-2.1,x:113.9,y:185.4},1).to({_off:true},1).wait(156));

	// Symbol_Rukav_R
	this.instance_36 = new lib.Sit_Symbol_Rukav_R("synched",1,false);
	this.instance_36.setTransform(82.5,175,0.853,1.009,0,-18.1,-10.2);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(33).to({startPosition:1,_off:false},0).wait(1).to({scaleX:0.88,scaleY:1,skewX:-11.4,skewY:-9.4,x:89.1,y:182.8},0).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:97.3,y:181.9},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:97.9,y:182.4},1).to({scaleX:0.89,scaleY:1,skewX:0,x:95.5,y:180.6},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:1},0).to({scaleX:0.9,scaleY:0.98,skewX:-12.3,skewY:-13.2,x:83.7,y:194.4},3).to({scaleX:0.9,scaleY:0.99,skewX:-8.3,skewY:-9,x:87.1,y:189.3},1).to({scaleX:0.88,scaleY:1,skewX:-11.4,skewY:-9.4,x:89.1,y:182.8},2).to({scaleX:0.85,scaleY:1.01,skewX:-18,skewY:-10.1,x:82.5,y:175},1).to({_off:true},1).wait(156));

	// Symbol_Plecho_R
	this.instance_37 = new lib.Sit_Symbol_Plecho_R("synched",0,false);
	this.instance_37.setTransform(80.5,188.9,0.847,1.051,0,-19.9,-15.4);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(33).to({startPosition:0,_off:false},0).wait(1).to({scaleX:0.87,scaleY:1.02,skewX:-12.3,skewY:-11.9,x:84.8,y:198},0).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:89.2,y:197.6},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:89.7,y:198},1).to({scaleX:0.89,scaleY:1,skewX:0,x:87.7,y:196.5},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:-12.3,skewY:-13.2,x:79.3,y:211.5},3).to({scaleX:0.9,scaleY:0.99,skewX:-8.3,skewY:-9,x:81.5,y:206.1},1).to({scaleX:0.87,scaleY:1.02,skewX:-12.3,skewY:-11.9,x:84.8,y:198},2).to({scaleX:0.85,scaleY:1.05,skewX:-19.8,skewY:-15.3,x:80.5,y:188.9},1).to({_off:true},1).wait(156));

	// Symbol_Plecho_L
	this.instance_38 = new lib.Sit_Symbol_Plecho_L("synched",0,false);
	this.instance_38.setTransform(129.9,192.1,0.888,1.017,0,-9.4,0);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(33).to({startPosition:0,_off:false},0).wait(1).to({scaleY:1,skewX:-7,skewY:-4.3,x:136.8,y:198.7},0).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:144.1,y:203.7},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:144.8,y:204.1},1).to({scaleX:0.89,scaleY:1,skewX:0,x:142,y:202.7},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:-12.3,skewY:-13.2,x:134.3,y:204.6},3).to({scaleX:0.9,scaleY:0.99,skewX:-8.3,skewY:-9,x:136.7,y:203.4},1).to({scaleX:0.89,scaleY:1,skewX:-7,skewY:-4.3,x:136.8,y:198.7},2).to({scaleY:1.02,skewX:-9.3,skewY:0,x:129.9,y:192.1},1).to({_off:true},1).wait(156));

	// Symbol_Stopa_R
	this.instance_39 = new lib.Sit_Symbol_Stopa_R("synched",1,false);
	this.instance_39.setTransform(118.3,261.1,0.89,0.998,0,-6.4,-6.7);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(33).to({startPosition:1,_off:false},0).wait(1).to({scaleX:0.89,scaleY:1,skewX:-0.9,skewY:-3.2,x:120,y:260.1},0).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:122,y:259.4},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:122.4,y:259.5},1).to({scaleX:0.89,scaleY:1,skewX:0,x:120.9,y:259.2},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:1},0).to({scaleX:0.9,scaleY:0.98,skewX:1,x:122.4,y:259.5},3).to({scaleX:0.9,scaleY:0.99,skewX:0.7,x:122,y:259.4},1).to({scaleX:0.89,scaleY:1,skewX:-0.9,skewY:-3.2,x:120,y:260.1},2).to({scaleX:0.89,scaleY:1,skewX:-6.3,skewY:-6.6,x:118.3,y:261.1},1).to({_off:true},1).wait(156));

	// Symbol_Stopa_L
	this.instance_40 = new lib.Sit_Symbol_Stopa_L("synched",1,false);
	this.instance_40.setTransform(75.2,259.4,0.891,0.996,0,-8.1,-9);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(33).to({startPosition:1,_off:false},0).wait(1).to({scaleX:0.89,scaleY:0.99,skewX:-1.8,skewY:-4.3,x:65.6,y:261},0).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:55.3,y:262.8},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:55.4},1).to({scaleX:0.89,scaleY:1,skewX:0,x:54.9,y:262.6},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:1},0).to({scaleX:0.9,scaleY:0.98,skewX:1,x:55.4,y:262.8},3).to({scaleX:0.9,scaleY:0.99,skewX:0.7,x:55.3},1).to({scaleX:0.89,scaleY:0.99,skewX:-1.8,skewY:-4.3,x:65.6,y:261},2).to({scaleX:0.89,scaleY:1,skewX:-8,skewY:-8.9,x:75.2,y:259.4},1).to({_off:true},1).wait(156));

	// Symbol_Rukav_L
	this.instance_41 = new lib.Sit_Symbol_Rukav_L("synched",1,false);
	this.instance_41.setTransform(122.9,171.1,0.888,0.978,0,-10.1,0);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(33).to({startPosition:1,_off:false},0).wait(1).to({scaleY:0.98,skewX:-7.2,skewY:-4.3,x:130.9,y:177.6},0).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:141.3,y:181.9},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:142,y:182.4},1).to({scaleX:0.89,scaleY:1,skewX:0,x:139.1,y:180.6},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:1},0).to({scaleX:0.9,scaleY:0.98,skewX:-12.3,skewY:-13.2,x:126.6,y:184.2},3).to({scaleX:0.9,scaleY:0.99,skewX:-8.3,skewY:-9,x:130.5,y:182.3},1).to({scaleX:0.89,scaleY:0.98,skewX:-7.2,skewY:-4.3,x:130.9,y:177.6},2).to({scaleY:0.98,skewX:-10,skewY:0,x:122.9,y:171.1},1).to({_off:true},1).wait(156));

	// Symbol_Golen_R
	this.instance_42 = new lib.Sit_Symbol_Golen_R("synched",0,false);
	this.instance_42.setTransform(82.1,238.2,0.911,0.973,0,-28.6,-32.3);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(33).to({startPosition:0,_off:false},0).wait(1).to({scaleX:0.91,scaleY:0.98,skewX:-12.3,skewY:-15.5,x:79.6,y:238.3},0).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:75.2,y:238.9},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:75.5,y:239.1},1).to({scaleX:0.89,scaleY:1,skewX:0,x:74.4,y:238.4},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:1,x:75.5,y:239.1},3).to({scaleX:0.9,scaleY:0.99,skewX:0.7,x:75.2,y:238.9},1).to({scaleX:0.91,scaleY:0.98,skewX:-12.3,skewY:-15.5,x:79.6,y:238.3},2).to({scaleX:0.91,scaleY:0.97,skewX:-28.5,skewY:-32.2,x:82.1,y:238.2},1).to({_off:true},1).wait(156));

	// Symbol_Golen_L
	this.instance_43 = new lib.Sit_Symbol_Golen_L("synched",0,false);
	this.instance_43.setTransform(123.1,239.2,0.813,1.129,0,-14,-15.9,0,-0.1);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(33).to({startPosition:0,_off:false},0).wait(1).to({scaleX:0.86,scaleY:1.06,skewX:-4.7,skewY:-7.7,x:130.3,y:238.7},0).to({regY:0,scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:136.2,y:238.6},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:136.7,y:238.8},1).to({scaleX:0.89,scaleY:1,skewX:0,x:134.7,y:238.1},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:1,x:136.7,y:238.8},3).to({scaleX:0.9,scaleY:0.99,skewX:0.7,x:136.2,y:238.6},1).to({regY:0,scaleX:0.86,scaleY:1.06,skewX:-4.7,skewY:-7.7,x:130.3,y:238.7},2).to({scaleX:0.81,scaleY:1.13,skewX:-13.9,skewY:-15.8,x:123.1,y:239.2},1).to({_off:true},1).wait(156));

	// Symbol_Bedro_R
	this.instance_44 = new lib.Sit_Symbol_Bedro_R("synched",0,false);
	this.instance_44.setTransform(103.4,226.9,0.811,0.736,0,-19,-22.6);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(33).to({startPosition:0,_off:false},0).wait(1).to({scaleX:0.86,scaleY:0.86,skewX:-7.4,skewY:-10.8,x:106.1,y:233.7},0).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:106.3,y:241},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:106.7,y:241.1},1).to({scaleX:0.89,scaleY:1,skewX:0,x:105.1,y:240.5},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:1,x:106.7,y:241.1},3).to({scaleX:0.9,scaleY:0.99,skewX:0.7,x:106.3,y:241},1).to({scaleX:0.86,scaleY:0.86,skewX:-7.4,skewY:-10.8,x:106.1,y:233.7},2).to({scaleX:0.81,scaleY:0.74,skewX:-18.9,skewY:-22.5,x:103.4,y:226.9},1).to({_off:true},1).wait(156));

	// Symbol_Bedro_L
	this.instance_45 = new lib.Sit_Symbol_Bedro_L("synched",0,false);
	this.instance_45.setTransform(132,224.6,0.889,0.798,0,-50.2,-40.2);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(33).to({startPosition:0,_off:false},0).wait(1).to({scaleX:0.9,scaleY:0.89,skewX:-23.1,skewY:-19.4,x:139.7,y:233.7},0).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:145.4,y:243.3},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:145.9,y:243.5},1).to({scaleX:0.89,scaleY:1,skewX:0,x:143.8,y:242.9},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.98,skewX:1,x:145.9,y:243.5},3).to({scaleX:0.9,scaleY:0.99,skewX:0.7,x:145.4,y:243.3},1).to({scaleX:0.9,scaleY:0.89,skewX:-23.1,skewY:-19.4,x:139.7,y:233.7},2).to({scaleX:0.89,scaleY:0.8,skewX:-50.1,skewY:-40.1,x:132,y:224.6},1).to({_off:true},1).wait(156));

	// Symbol_Mayka
	this.instance_46 = new lib.Sit_Symbol_Mayka("synched",1,false);
	this.instance_46.setTransform(114.8,197,0.809,1.005,0,-16.9,-8.7);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(33).to({startPosition:1,_off:false},0).wait(1).to({scaleX:0.85,scaleY:1,skewX:-10.7,skewY:-8.5,x:121.3,y:206.2},0).to({scaleX:0.9,scaleY:0.99,skewX:0.7,skewY:0,x:127.4,y:211.3},2).to({scaleX:0.9,scaleY:0.98,skewX:1,x:127.9,y:211.6},1).to({scaleX:0.89,scaleY:1,skewX:0,x:125.6,y:210.4},3,cjs.Ease.get(-0.99)).wait(1).to({startPosition:1},0).to({scaleX:0.9,scaleY:0.98,skewX:-12.3,skewY:-13.2,x:119.7,y:215.9},3).to({scaleX:0.9,scaleY:0.99,skewX:-8.3,skewY:-9,x:121.4,y:213.5},1).to({scaleX:0.85,scaleY:1,skewX:-10.7,skewY:-8.5,x:121.3,y:206.2},2).to({scaleX:0.81,scaleY:1,skewX:-16.8,skewY:-8.6,x:114.8,y:197},1).to({_off:true},1).wait(156));

	// 2_HandL3
	this.instance_47 = new lib._2_HandL3_1("synched",0,false);
	this.instance_47.setTransform(118.9,180.4,1.011,1.078,0,-19.6,-22.9,9,-7.9);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(24).to({startPosition:0,_off:false},0).to({scaleX:0.99,scaleY:1.02,skewX:-11.5,skewY:-5.1,x:94.5,y:193.2},3).to({regX:9.1,regY:-7.9,scaleX:1.05,scaleY:0.96,skewX:14.8,skewY:21.6,x:84.1,y:188.6},2).to({regY:-7.8,scaleX:0.93,scaleY:1.1,skewX:99,skewY:86.5,x:96.6,y:170.6},3).to({_off:true},1).wait(16).to({startPosition:0,_off:false},0).to({regY:-7.9,scaleX:1.05,scaleY:0.96,skewX:14.8,skewY:21.6,x:84.1,y:188.6},3).to({regX:9,regY:-7.8,scaleX:0.99,scaleY:1.02,skewX:-11.5,skewY:-5.1,x:94.5,y:193.2},2).to({scaleX:1.01,scaleY:1.08,skewX:-19.5,skewY:-22.8,x:118.9,y:180.4},3).to({_off:true},1).wait(147));

	// 2_HandL2
	this.instance_48 = new lib._2_HandL2_1("synched",0,false);
	this.instance_48.setTransform(135.6,158.6,1.026,1.063,0,-30.8,-35.3,16.4,-4.9);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(24).to({startPosition:0,_off:false},0).to({regX:16.5,scaleX:0.98,scaleY:1.02,skewX:-14.4,skewY:-8.2,x:121,y:181.4},3).to({scaleX:1.05,scaleY:0.99,skewX:5.6,skewY:13.2,x:115.1,y:188.4},2).to({regX:16.6,scaleX:1.09,scaleY:1.05,skewX:64.9,skewY:51.5,x:129.4,y:196.4},3).to({_off:true},1).wait(16).to({startPosition:0,_off:false},0).to({regX:16.5,scaleX:1.05,scaleY:0.99,skewX:5.6,skewY:13.2,x:115.1,y:188.4},3).to({scaleX:0.98,scaleY:1.02,skewX:-14.4,skewY:-8.2,x:121,y:181.4},2).to({regX:16.4,scaleX:1.03,scaleY:1.06,skewX:-30.7,skewY:-35.2,x:135.6,y:158.6},3).to({_off:true},1).wait(147));

	// 2_HandR3
	this.instance_49 = new lib._2_HandR3_1("synched",0,false);
	this.instance_49.setTransform(95,179.5,1.114,1.183,0,-21.1,-24.7,0.5,-9.5);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(24).to({startPosition:0,_off:false},0).to({scaleX:1.01,scaleY:1.04,skewX:-11.8,skewY:-5.4,x:91.5,y:196.3},3).to({regX:0.6,scaleX:1.12,scaleY:0.9,skewX:34.9,skewY:39.1,x:83.4,y:191.8},2).to({regX:0.5,scaleX:1.04,scaleY:1,skewX:160.8,skewY:176.4,x:80.3,y:169.6},3).to({_off:true},1).wait(16).to({startPosition:0,_off:false},0).to({regX:0.6,scaleX:1.12,scaleY:0.9,skewX:34.9,skewY:39.1,x:83.4,y:191.8},3).to({regX:0.5,scaleX:1.01,scaleY:1.04,skewX:-11.8,skewY:-5.4,x:91.5,y:196.3},2).to({scaleX:1.11,scaleY:1.18,skewX:-21,skewY:-24.6,x:95,y:179.5},3).to({_off:true},1).wait(147));

	// 2_HandR2
	this.instance_50 = new lib._2_HandR2_1("synched",0,false);
	this.instance_50.setTransform(85.2,164.1,1.006,0.924,0,-13.1,-15.6,-3.8,-13.5);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(24).to({startPosition:0,_off:false},0).to({regX:-3.8,regY:-13.3,scaleX:0.99,scaleY:0.98,skewX:-9.9,skewY:-3.4,x:77.8,y:173.8},3).to({scaleX:0.92,scaleY:1.08,skewX:-39.9,skewY:-38.4,x:69.9,y:179},2).to({regX:-3.9,regY:-13.4,scaleX:1.14,scaleY:0.88,skewX:-134.1,skewY:-141.1,x:73.5,y:194.8},3).to({_off:true},1).wait(16).to({startPosition:0,_off:false},0).to({regX:-3.8,regY:-13.3,scaleX:0.92,scaleY:1.08,skewX:-39.9,skewY:-38.4,x:69.9,y:179},3).to({scaleX:0.99,scaleY:0.98,skewX:-9.9,skewY:-3.4,x:77.8,y:173.8},2).to({regX:-3.7,regY:-13.4,scaleX:1.01,scaleY:0.92,skewX:-13,skewY:-15.5,x:85.2,y:164.1},3).to({_off:true},1).wait(147));

	// 2_Head
	this.instance_51 = new lib._2_Head_1("synched",0,false);
	this.instance_51.setTransform(98.8,124.1,1.001,1.09,0,-6.3,-7.5,8.1,9.6);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(24).to({startPosition:0,_off:false},0).to({regY:9.5,scaleX:0.96,scaleY:1.05,skewX:-27.5,skewY:-23,x:90,y:137},3).to({regX:8,scaleX:1.01,scaleY:1.02,skewX:-13.7,skewY:-0.3,x:80.2,y:142.3},2).to({regX:8.2,regY:9.4,scaleX:1.07,scaleY:0.97,skewX:-7.2,skewY:8.2,x:87.8,y:158},3).to({_off:true},1).wait(16).to({startPosition:0,_off:false},0).to({regX:8,regY:9.5,scaleX:1.01,scaleY:1.02,skewX:-13.7,skewY:-0.3,x:80.2,y:142.3},3).to({regX:8.1,scaleX:0.96,scaleY:1.05,skewX:-27.5,skewY:-23,x:90,y:137},2).to({regY:9.6,scaleX:1,scaleY:1.09,skewX:-6.2,skewY:-7.4,x:98.8,y:124.1},3).to({_off:true},1).wait(147));

	// 2_HandL1
	this.instance_52 = new lib._2_HandL1_1("synched",1,false);
	this.instance_52.setTransform(120,120.4,1.014,1.077,0,-20.9,-24.5,-0.9,-16);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(24).to({startPosition:1,_off:false},0).to({scaleX:0.99,scaleY:1.02,skewX:-11.8,skewY:-5.4,x:110.6,y:142.3},3).to({regX:-0.9,scaleX:1,scaleY:1.01,skewX:-14.9,skewY:-1.4,x:102.7,y:149.6},2).to({regX:-0.8,regY:-15.8,scaleX:1.03,scaleY:0.93,skewX:-22.3,skewY:-6.6,x:114.2,y:162.9},3).to({_off:true},1).wait(16).to({startPosition:1,_off:false},0).to({regX:-0.9,regY:-15.9,scaleX:1,scaleY:1.01,skewX:-14.9,skewY:-1.4,x:102.7,y:149.6},3).to({regX:-0.8,scaleX:0.99,scaleY:1.02,skewX:-11.8,skewY:-5.4,x:110.6,y:142.3},2).to({scaleX:1.01,scaleY:1.08,skewX:-20.8,skewY:-24.4,x:120,y:120.4},3).to({_off:true},1).wait(147));

	// 2_Torso
	this.instance_53 = new lib._2_Torso_1("synched",1,false);
	this.instance_53.setTransform(133.3,152.8,1.007,1.084,0,-14.6,-17.2,7.5,20.1);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(24).to({startPosition:1,_off:false},0).to({regY:20,scaleX:0.99,scaleY:1.01,skewX:-10.1,skewY:-3.6,x:121.9,y:173.2},3).to({regY:19.9,scaleX:1.04,scaleY:1.06,skewX:-11.8,skewY:-0.4,x:115.3,y:183.4},2).to({scaleX:1.15,scaleY:1.16,skewX:-10.4,skewY:-2.8,x:124.2,y:204},3).to({_off:true},1).wait(16).to({startPosition:1,_off:false},0).to({scaleX:1.04,scaleY:1.06,skewX:-11.8,skewY:-0.4,x:115.3,y:183.4},3).to({regY:20,scaleX:0.99,scaleY:1.01,skewX:-10.1,skewY:-3.6,x:121.9,y:173.2},2).to({regY:20.1,scaleX:1.01,scaleY:1.08,skewX:-14.5,skewY:-17.1,x:133.3,y:152.8},3).to({_off:true},1).wait(147));

	// 2_ShoeL
	this.instance_54 = new lib._2_ShoeL_1("synched",1,false);
	this.instance_54.setTransform(149.4,260.4,0.934,0.925,0,0.6,-4.2,5.5,-4.4);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(24).to({startPosition:1,_off:false},0).to({regY:-4.4,scaleX:0.98,scaleY:0.99,skewX:-6.4,skewY:-0.8,x:119.6,y:261.9},3).to({regY:-4.3,scaleX:1,scaleY:1.02,skewX:-10,skewY:0,x:117.9},2).to({scaleY:1,skewX:-2,x:122.8,y:260.9},3).to({_off:true},1).wait(16).to({skewX:-2,_off:false},0).to({scaleY:1.02,skewX:-10,x:117.9,y:261.9},3).to({regY:-4.4,scaleX:0.98,scaleY:0.99,skewX:-6.4,skewY:-0.8,x:119.6},2).to({regY:-4.3,scaleX:0.93,scaleY:0.93,skewX:0.6,skewY:-4.1,x:149.4,y:260.4},3).to({_off:true},1).wait(147));

	// 2_LegL1
	this.instance_55 = new lib._2_LegL1_1("synched",0,false);
	this.instance_55.setTransform(152.9,154.8,1.116,1.192,0,-18.9,-22.1,16.1,-11);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(24).to({startPosition:0,_off:false},0).to({regY:-10.8,scaleX:1.01,scaleY:1.04,skewX:-11.3,skewY:-4.9,x:142.9,y:177.9},3).to({scaleX:1.01,scaleY:1.01,skewX:-7.1,skewY:3,x:137.9,y:189},2).to({regX:16,scaleY:0.99,skewX:10.6,skewY:12.5,x:149.4,y:209.4},3).to({_off:true},1).wait(16).to({skewX:10.6,_off:false},0).to({regX:16.1,scaleY:1.01,skewX:-7.1,skewY:3,x:137.9,y:189},3).to({scaleX:1.01,scaleY:1.04,skewX:-11.3,skewY:-4.9,x:142.9,y:177.9},2).to({regY:-10.9,scaleX:1.12,scaleY:1.19,skewX:-18.8,skewY:-22,x:152.9,y:154.8},3).to({_off:true},1).wait(147));

	// 2_LegL2
	this.instance_56 = new lib._2_LegL2_1("synched",0,false);
	this.instance_56.setTransform(129.6,191.2,1.141,1.109,0,-17.3,-21.8,0,-26.9);
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(24).to({startPosition:0,_off:false},0).to({regY:-26.7,scaleX:1.03,scaleY:1.01,skewX:-6.7,skewY:-0.3,x:117.2,y:201.4},3).to({regY:-26.8,scaleX:1.06,scaleY:0.97,skewX:-14.9,skewY:-4.9,x:109.3,y:207.2},2).to({regX:0.1,scaleX:1.28,scaleY:0.79,skewX:-22.6,skewY:-21,x:112.1,y:222.1},3).to({_off:true},1).wait(16).to({startPosition:0,_off:false},0).to({regX:0,scaleX:1.06,scaleY:0.97,skewX:-14.9,skewY:-4.9,x:109.3,y:207.2},3).to({regY:-26.7,scaleX:1.03,scaleY:1.01,skewX:-6.7,skewY:-0.3,x:117.2,y:201.4},2).to({regY:-26.8,scaleX:1.14,scaleY:1.11,skewX:-17.2,skewY:-21.7,x:129.6,y:191.2},3).to({_off:true},1).wait(147));

	// 2_LegR2
	this.instance_57 = new lib._2_LegR2_1("synched",0,false);
	this.instance_57.setTransform(104.7,197.7,1.106,1.334,0,35.9,47.1,-11.5,-13.4);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(24).to({startPosition:0,_off:false},0).to({regX:-11.2,regY:-13.5,scaleX:0.99,scaleY:1.15,skewX:31.8,skewY:35.9,x:95.2,y:210.1},3).to({regX:-12.4,regY:-14.1,scaleX:1.04,scaleY:0.98,skewX:28.2,skewY:35.7,x:86.7,y:211.6},2).to({regX:-11.3,regY:-13.3,scaleX:1.31,scaleY:0.89,skewX:35.9,skewY:25.5,x:78.6,y:218.1},3).to({_off:true},1).wait(16).to({startPosition:0,_off:false},0).to({regX:-12.4,regY:-14.1,scaleX:1.04,scaleY:0.98,skewX:28.2,skewY:35.7,x:86.7,y:211.6},3).to({regX:-11.2,regY:-13.5,scaleX:0.99,scaleY:1.15,skewX:31.8,skewY:35.9,x:95.2,y:210.1},2).to({regX:-11.4,regY:-13.3,scaleX:1.11,scaleY:1.33,skewX:35.9,skewY:47.1,x:104.7,y:197.7},3).to({_off:true},1).wait(147));

	// 2_ShoeR
	this.instance_58 = new lib._2_ShoeR_1("synched",1,false);
	this.instance_58.setTransform(104.9,260.3,1.099,1.099,29.8,0,0,3.1,-8.3);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(24).to({startPosition:1,_off:false},0).to({regX:3,scaleX:1.13,scaleY:1.1,rotation:0,skewX:13.3,skewY:15.1,x:99,y:257.3},3).to({startPosition:1},2).to({startPosition:1},3).to({_off:true},1).wait(16).to({startPosition:1,_off:false},0).to({regX:3.1,scaleX:1.1,scaleY:1.1,rotation:29.8,skewX:0,skewY:0,x:104.9,y:260.3},8).to({_off:true},1).wait(147));

	// 2_LegR1
	this.instance_59 = new lib._2_LegR1_1("synched",0,false);
	this.instance_59.setTransform(131.9,159.8,1.079,1.262,0,-9.4,-15.7,17.9,-11);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(24).to({startPosition:0,_off:false},0).to({scaleX:1.01,scaleY:1.05,skewX:-8.9,skewY:-3.4,x:125.1,y:184},3).to({regX:18,regY:-10.8,scaleX:1.07,scaleY:1.03,skewX:-1.5,skewY:9,x:120,y:196.5},2).to({scaleX:1.21,scaleY:1.1,skewX:34.4,skewY:35.1,x:125.7,y:220},3).to({_off:true},1).wait(16).to({startPosition:0,_off:false},0).to({scaleX:1.07,scaleY:1.03,skewX:-1.5,skewY:9,x:120,y:196.5},3).to({regX:17.9,regY:-10.9,scaleX:1.01,scaleY:1.05,skewX:-8.9,skewY:-3.4,x:125.1,y:184},2).to({scaleX:1.08,scaleY:1.26,skewX:-9.3,skewY:-15.6,x:131.9,y:159.8},3).to({_off:true},1).wait(147));

	// 2_HandR1
	this.instance_60 = new lib._2_HandR1_1("synched",1,false);
	this.instance_60.setTransform(83,123.9,1.003,1.087,0,-9.6,-11.3,2,-19.6);
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(24).to({startPosition:1,_off:false},0).to({regY:-19.4,scaleX:1,scaleY:1.01,skewX:-8.9,skewY:-2.3,x:76.3,y:136.6},3).to({regX:1.9,scaleX:1.02,scaleY:1.01,skewX:-12.2,skewY:0.6,x:66.4,y:142.6},2).to({regX:2,regY:-19.2,scaleX:1.07,scaleY:0.96,skewX:-11.5,skewY:2.8,x:71.9,y:160.9},3).to({_off:true},1).wait(16).to({startPosition:1,_off:false},0).to({regX:1.9,regY:-19.4,scaleX:1.02,scaleY:1.01,skewX:-12.2,skewY:0.6,x:66.4,y:142.6},3).to({regX:2,scaleX:1,scaleY:1.01,skewX:-8.9,skewY:-2.3,x:76.3,y:136.6},2).to({regY:-19.5,scaleX:1,scaleY:1.09,skewX:-9.5,skewY:-11.2,x:83,y:123.9},3).to({_off:true},1).wait(147));

	// 5_Head
	this.instance_61 = new lib._5_Head_1("synched",0,false);
	this.instance_61.setTransform(115.9,72.9,0.999,0.999,-0.2,0,0,-1.4,13);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(5).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:128.6,y:61.1},4,cjs.Ease.get(1)).to({regX:-1.4,regY:13.1,scaleX:1,scaleY:1,rotation:11.7,x:115.9,y:73},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_Neck
	this.instance_62 = new lib._5_Neck_1("synched",0,false);
	this.instance_62.setTransform(120.8,78.3,0.999,0.999,-18.9,0,0,0.1,3);
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(5).to({startPosition:0,_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:0,x:128.5,y:69.1},4,cjs.Ease.get(1)).to({regX:0.1,scaleX:1,scaleY:1,rotation:-18.8,x:120.8,y:78.3},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_Torso
	this.instance_63 = new lib._5_Torso_1("synched",1,false);
	this.instance_63.setTransform(128.2,136.1,0.96,0.877,0,-10.6,-4.4,-2.5,29.5);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(5).to({startPosition:1,_off:false},0).to({regX:-2.3,scaleX:1,scaleY:1,skewX:0,skewY:0,x:127.6,y:136.6},4,cjs.Ease.get(1)).to({regX:-2.4,scaleX:0.96,scaleY:0.88,skewX:-10.5,skewY:-4.3,x:128.2,y:136.1},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_HandL1
	this.instance_64 = new lib._5_HandL1_1("synched",1,false);
	this.instance_64.setTransform(146.3,83.1,0.999,0.999,26.3,0,0,-16.4,4.4);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(5).to({startPosition:1,_off:false},0).to({regY:4.5,scaleX:1,scaleY:1,rotation:0,x:155.1,y:73.1},4,cjs.Ease.get(1)).to({regX:-16.4,regY:4.4,scaleX:0.87,scaleY:1,skewX:26.3,skewY:37.4,x:146.3,y:83},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_HandL2
	this.instance_65 = new lib._5_HandL2_1("synched",0,false);
	this.instance_65.setTransform(186.6,86.1,0.998,0.998,52.7,0,0,-9.9,7);
	this.instance_65._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(5).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:190.1,y:58.1},4,cjs.Ease.get(1)).to({scaleX:0.62,scaleY:1,rotation:22.4,x:179.6,y:87},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_HandL3
	this.instance_66 = new lib._5_HandL3_1("synched",0,false);
	this.instance_66.setTransform(217.7,93.4,0.999,0.999,59.7,0,0,-7.5,5);
	this.instance_66._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(5).to({startPosition:0,_off:false},0).to({regX:-7.3,scaleX:1,scaleY:1,rotation:0,x:215.1,y:37.6},4,cjs.Ease.get(1)).to({regX:-7.5,scaleX:1,scaleY:1,rotation:-18.6,x:203.2,y:74},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_HandR1
	this.instance_67 = new lib._5_HandR1_1("synched",1,false);
	this.instance_67.setTransform(94,86.4,0.999,0.999,-57.8,0,0,12.1,6.5);
	this.instance_67._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(5).to({startPosition:1,_off:false},0).to({regX:12,scaleX:1,scaleY:1,rotation:0,x:105.5,y:69.6},4,cjs.Ease.get(1)).to({regX:12.1,scaleX:1,scaleY:1,rotation:-57.7,x:94,y:86.4},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_HandR2
	this.instance_68 = new lib._5_HandR2_1("synched",0,false);
	this.instance_68.setTransform(62.1,102.6,0.999,0.999,-63.3,0,0,8.1,12.6);
	this.instance_68._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(5).to({startPosition:0,_off:false},0).to({regX:8,scaleX:1,scaleY:1,rotation:0,x:73.5,y:49.7},4,cjs.Ease.get(1)).to({regX:8.1,regY:12.5,scaleX:1,scaleY:1,rotation:-44.5,x:62.1,y:102.5},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_HandR3
	this.instance_69 = new lib._5_HandR3_1("synched",0,false);
	this.instance_69.setTransform(27.6,107.6,0.998,0.998,-36.2,0,0,7,5);
	this.instance_69._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(5).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:52.5,y:19.1},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:32.9,x:27.6,y:96.1},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_ShoeR
	this.instance_70 = new lib._5_ShoeR_1("synched",1,false);
	this.instance_70.setTransform(119.3,256.4,0.92,1,0,2.5,-3.3,3.4,-5.9);
	this.instance_70._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(5).to({startPosition:1,_off:false},0).to({regX:3.5,scaleX:1,skewX:0,skewY:0,x:122,y:264.2},4,cjs.Ease.get(1)).to({scaleX:0.85,skewX:-12,skewY:-30.6,x:118.1,y:259.8},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_ShoeL
	this.instance_71 = new lib._5_ShoeL_1("synched",1,false);
	this.instance_71.setTransform(138.7,256.4,0.695,1,0,0,0,-3.5,-9.9);
	this.instance_71._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(5).to({startPosition:1,_off:false},0).to({regX:-3.3,scaleX:1,x:133.6,y:257.2},4,cjs.Ease.get(1)).to({regX:-3.4,scaleX:0.7,x:138.7,y:256.4},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_LegL1
	this.instance_72 = new lib._5_LegL1_1("synched",0,false);
	this.instance_72.setTransform(142.1,154.2,1,1,-0.7,0,0,1.1,-25.5);
	this.instance_72._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(5).to({startPosition:0,_off:false},0).to({regX:1,rotation:0,x:139,y:154.1},4,cjs.Ease.get(1)).to({regX:1.1,rotation:-0.6,x:142.1,y:154.2},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_LegL2
	this.instance_73 = new lib._5_LegL2_1("synched",0,false);
	this.instance_73.setTransform(143.5,211.5,1,1,-1.4,0,0,1.1,-20.9);
	this.instance_73._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(5).to({startPosition:0,_off:false},0).to({regX:1,rotation:0,x:140,y:211.7},4,cjs.Ease.get(1)).to({regX:1.1,rotation:-1.3,x:143.5,y:211.5},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_LegR1
	this.instance_74 = new lib._5_LegR1_1("synched",0,false);
	this.instance_74.setTransform(115.1,153,1,1,6,0,0,-1.5,-22.1);
	this.instance_74._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(5).to({startPosition:0,_off:false},0).to({regX:-1.3,regY:-21.9,rotation:0,x:113.1,y:153.6},4,cjs.Ease.get(1)).to({regX:-1.4,regY:-22,rotation:6,x:115.1,y:153},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

	// 5_LegR2
	this.instance_75 = new lib._5_LegR2_1("synched",0,false);
	this.instance_75.setTransform(108.7,207.6,1,1,1.1,0,0,-2.9,-23.4);
	this.instance_75._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(5).to({startPosition:0,_off:false},0).to({rotation:0,x:112.1,y:211.2},4,cjs.Ease.get(1)).to({rotation:1.1,x:108.7,y:207.6},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58.5,83.1,104,204.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;