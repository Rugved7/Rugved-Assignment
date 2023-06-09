var p = document.getElementsByTagName('p');
var choice = document.getElementsByClassName('choice');
var dragItem = null; // declared all variables

for (var i of p) {
  i.addEventListener('dragstart', dragStart);
  i.addEventListener('dragend', dragEnd); // loop to run through an array of items in Paragram tag
}

function dragStart() {
  dragItem = this;
  setTimeout(() => this.style.display = 'none', 0); // function to start drag
}
function dragEnd() {
  dragItem = this;
  setTimeout(() => this.style.display = 'block', 0);
  dragItem = null; // after dragging all items
}
for (j of choice) {
  j.addEventListener('dragover', dragOver);
  j.addEventListener('dragenter', dragEnter);
  j.addEventListener('dragleave', dragleave);
  j.addEventListener('drop', Drop); // loop for dragging and dropping in another div
}

function Drop() {
  this.append(dragItem)
}
function dragOver(e) {
  e.preventDefault();
  this.style.border = "2px solid blue"; // highlight the block with blue line in which we are adding items
}
function dragEnter(e) {
  e.preventDefault();
}
function dragleave() {
  this.style.border = "none";

}
