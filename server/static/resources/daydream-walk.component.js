AFRAME.registerComponent('daydream-walk', {

	init: function() {
		isPressed = false;

		console.log("Daydream-walk component is loaded");
		document.addEventListener("trackpadtouchstart", function() {
			isPressed = true;
		});
		document.addEventListener("trackpadtouchend", function() {
			isPressed = false;
		});
	},

	tick: function() {
		if (isPressed) {
			var player = document.getElementById("player");
			var new_x = 0;
			var new_z = 0;
			var x =	player.object3D.position.x;
			var y =	player.object3D.position.y;
			var z =	player.object3D.position.z;
			var radian = (player.object3D.rotation.y);
			new_z = (0.1 * Math.cos(radian));
			new_x = (0.1 * Math.sin(radian));
			new_pos = new_x + " " + y + " " + (-new_z);
			var a = new THREE.Vector3(-new_x, 0,-new_z);
			player.object3D.position.add(a);
			console.log("R: " + player.object3D.rotation.y + "      X: " + new_x + "     Z: " + new_z);
		}
	}


});