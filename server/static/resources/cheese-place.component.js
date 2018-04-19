AFRAME.registerComponent('cheese-place', {
  	dependencies: ['raycaster'],

	init: function() {
		var element = this.el;
		down = false;

		document.addEventListener("mousedown", function() {
			down = true;
		});
		document.addEventListener("mouseup", function() {
			down = false;
		});

		document.addEventListener("trackpaddown", function() {
			down = true;
		});

		document.addEventListener("trackpadup", function() {
			down = false;
		});

		element.addEventListener("raycaster-intersection", function(e) {
			if (down) {
				var cheese = document.getElementById("cheese-spot");
				var object = e.detail.els;
				var intersec = e.detail.intersections;

				if (object != null) {
					for (x = 0; x < object.length; x++) {
						obId = object[x].getAttribute("id");
						if (obId!= null) {
							if (obId == "ground") {
								var i = intersec[x];
								cheese.setAttribute('position', {x: (i.point.x -4.8), y: i.point.y, z: (i.point.z + 4.9)});
								console.log(document.getElementById("cheese-spot").position);

							}
						}
					}
				}
			}
		});
	},

});