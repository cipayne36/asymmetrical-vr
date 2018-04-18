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
      element.setAttribute('networked', "template:#god-template; attachTemplateToLocal:false", "daydream-walk");
      console.log("Player set to: God");
    } else {
      element.setAttribute('camera', "userHeight:0.6; fov: 140");
      element.setAttribute("position", "-4 0.5 -3");
      element.setAttribute('networked', "template:#mouse-template; attachTemplateToLocal:false;", "daydream-walk");
      console.log("Player set to: Mouse");
    }
}
});
