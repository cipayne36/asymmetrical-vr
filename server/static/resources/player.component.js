AFRAME.registerComponent('player', {
  schema: {
    playerType: {type: 'string', default: "GOD"}
  },

  init: function () {
    var element = this.el;
    var playerType = sessionStorage.getItem('playerType') || this.data.playerType;
    if (playerType != "MOUSE" && playerType != "GOD") {
      throw "Parameter is not accurate!";
    }
  
    if (playerType == "GOD") {
      element.setAttribute('camera', "userHeight: 30");
      element.setAttribute("position", "-30 70 0");
      element.setAttribute("wall-break");
      element.setAttribute("cheese-place");
      element.setAttribute('networked', "template:#god-template; attachTemplateToLocal:false", "daydream-walk");
      element.setAttribute('spawn-in-circle', "radius:75")
      console.log("Player set to: God");
    } else {
      element.setAttribute('camera', "userHeight:0.6; fov: 100");
      element.setAttribute("position", "10 1 -3");
      element.setAttribute('spawn-in-circle', "radius:5")
      document.getElementById("cheese-spot").removeAttribute("geometry");
      document.getElementById("cheese-spot").setAttribute("position", "1000 1000 1000");

      element.setAttribute('networked', "template:#mouse-template; attachTemplateToLocal:false;", "daydream-walk");
      console.log("Player set to: Mouse");
    }
}
});
