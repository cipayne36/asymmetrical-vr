AFRAME.registerComponent('select-avatar', {
  schema: {},

  init: function () {
  	var element = this.el;
  	// var ground = this.el.sceneEl.querySelector("#ground");
  	var mouse = false;
  	var elementID = this.data.id;
  

  	//pickUp()
  	document.addEventListener("click", function () {
  		if (!mouse) {
			// element.setAttribute('visible', false);
			// inventory.push(elementID);
			element.setAttribute('camera', "userHeight: .01");
			mouse = true;
			console.log("Player set to: Mouse");
		} else {
			element.setAttribute('camera', "userHeight: 30");
			mouse = false;
			console.log("Player set to: Spectator");
		}
  	});
  }
});