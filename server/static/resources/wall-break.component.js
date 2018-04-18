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

		element.addEventListener("raycaster-intersection", function(e) {
			if (isDown) {
				var object = e.detail.els;
				if (object != null) {
					for (x = 0; x < object.length; x++) {
						objNetworked = object[x].getAttribute("networked");
						if (objNetworked!= null) {
							temp = objNetworked.template;
							if (temp == "wall-one-template" || temp == "end-cap-template") {
								objNetworked.removeAttribute("static-body");
								objNetworked.removeAttribute("geometry");
								console.log("wall broken");
								break;
							}
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