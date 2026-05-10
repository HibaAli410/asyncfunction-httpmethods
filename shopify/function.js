const draggableItems = document.querySelectorAll('.draggable-container');
const myDraggable = new Draggable.Sortable(draggableItems,{
    draggable: '.draggable',
     mirror: {
      appendTo: "body",
      constrainDimensions: true,
    },
});