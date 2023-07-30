 function addLoadEvent(func) {
     var oldonload = window.onload;
     if (typeof window.onload != 'function') {
         window.onload = func;
     } else {
         window.onload = function() {
             oldonload();
             func();
         }
     }
 }

 addLoadEvent(function() {
     console.log('tag cloud plugin rock and roll!');

     try {
         TagCanvas.textFont = 'JetBrains Mono';
         TagCanvas.textColour = '#cacacaca';
         TagCanvas.textHeight = 18;
         TagCanvas.outlineColour = '#222222';
         TagCanvas.maxSpeed = 0.05;
         TagCanvas.freezeActive = true;
         TagCanvas.outlineMethod = 'block';
         TagCanvas.minBrightness = 0.2;
         TagCanvas.depth = 0.92;
         TagCanvas.pulsateTo = 0.6;
         TagCanvas.initial = [0.1,-0.1];
         TagCanvas.decel = 0.98;
         TagCanvas.reverse = true;
         TagCanvas.hideTags = false;
         TagCanvas.shadow = '#ccf';
         TagCanvas.shadowBlur = 3;
         TagCanvas.weight = false;
         TagCanvas.imageScale = null;
         TagCanvas.fadeIn = 1000;
         TagCanvas.clickToFront = 600;
         TagCanvas.lock = false;
         TagCanvas.Start('resCanvas');
         TagCanvas.tc['resCanvas'].Wheel(true)
     } catch(e) {
         console.log(e);
         document.getElementById('myCanvasContainer').style.display = 'none';
     }
 });
