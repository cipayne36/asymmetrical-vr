AFRAME.registerComponent('user-count', {
  schema: {type: 'int', default: 0},

  init: function () {
    var element = this.el;
    var count = this.data.count;
  }
});

// AFRAME.registerComponent('persist-entity', {
//   schema: {
//     draw: {type: 'boolean', default: false}
//   },

//   init: function () {
//     var element = this.el;
//     var entity = sessionStorage.getItem(element.id);
//     console.log(entity==null);
//     if (entity == null) {
//       sessionStorage.setItem(element.id, element.innerHTML);
//       return;
//     } else {
//        element.innerHTML = entity;
//     }
// }
// });