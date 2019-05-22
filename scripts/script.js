'use strict';

// позиционирование для красного круга
document.body.style.position = 'relative';

//красный круг; его стиль
let redCircle = document.createElement('div');
redCircle.style.cssText = "display: none; \
  position: absolute; \
  width: 30px; \
  height: 30px; \
  border-radius: 15px; \
  background-color: red; \
  ";

//вставка круга в body
document.body.insertBefore(redCircle, document.querySelector('script'));

document.addEventListener('mousedown', function(event) {
  redCircle.style.top = `${event.clientY - 15}px`;
  redCircle.style.left = `${event.clientX - 15}px`;
  redCircle.style.display = 'block';
  document.addEventListener('mousemove', showPosition);
});

document.addEventListener('mouseup', function(event) {
  redCircle.style.display = 'none';
  document.removeEventListener('mousemove', showPosition);
});

function showPosition(event) {
  redCircle.style.top = `${event.clientY - 15}px`;
  redCircle.style.left = `${event.clientX - 15}px`;
}

//Task 7
function onConsPos() {
  document.addEventListener('click', function(event) {
    console.log(event.clientX, event.clientY);
  });
}

//Task 8
function deletingElements() {
  document.addEventListener('click', function(event) {
    let elemUnderCurs = document.elementFromPoint(event.clientX, event.clientY);
    elemUnderCurs.remove();
  });
}
