AFRAME.registerComponent('wall-break', {
  	dependencies: ['raycaster'],

	init: function() {
		timer = 0;

		isDown = false;

		var element = this.el;

		console.log("wall-break component is loaded");
		document.addEventListener("mousedown", function() {
			isDown = true;
		});
		document.addEventListener("mouseup", function() {
			isDown = false;
		});

		document.addEventListener("trackpaddown", function() {
			isDown = true;
		});

		document.addEventListener("trackpadup", function() {
			isDown = false;
		});

		element.addEventListener("raycaster-intersection", function(e) {
			if (isDown) {
				var object = e.detail.els;
				if (object != null) {
					for (x = 0; x < object.length; x++) {
						oMixin = object[x].getAttribute("mixin");
						if (oMixin!= null && timer > 100) {
							timer = 0;
							object[x].setAttribute("mixin", "destroyed");
							object[x].removeAttribute("geometry");
							object[x].removeAttribute("static-body");
						}
					}
				}
			}
		});
	},

	tick: function() {
		timer++;
	}


});