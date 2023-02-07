


function movt() {
  var dot = document.querySelector('.x1');
  var img = document.getElementById('bird');

//   dot.style.backgroundColor = "blue";
//   img.style.animation = "move-right 100s forwards, stop-right 0.1s 1s";
// }
const distance = dot.getBoundingClientRect().left - bird.getBoundingClientRect().right+133;
  // Move the bird towards the dot
  bird.style.transition = "transform 1s";
  bird.style.transform = `translateX(${distance}px)`;
  setTimeout(() => {
    // Change the color of the dot
    dot.style.backgroundColor = "grey";
  }, 900);
}

function moveleft() {
  var dot = document.querySelector('.x2');
  var img = document.getElementById('inspo');
  const distance = dot.getBoundingClientRect().left - inspo.getBoundingClientRect().right+133;
  // Move the bird towards the dot
  inspo.style.transition = "transform 1s";
  inspo.style.transform = `translateX(${distance}px)`;
  setTimeout(() => {
    // Change the color of the dot
    dot.style.backgroundColor = "grey";
  }, 900);
}

function moveeft() {
  var dot = document.querySelector('.x3');
  var img = document.getElementById('ipo');

  const distance = dot.getBoundingClientRect().left - ipo.getBoundingClientRect().right+133;
  // Move the bird towards the dot
  ipo.style.transition = "transform 1s";
  ipo.style.transform = `translateX(${distance}px)`;
  setTimeout(() => {
    // Change the color of the dot
    dot.style.backgroundColor = "grey";
  }, 900);
}


function movft() {
  var dot = document.querySelector('.x4');
  var img = document.getElementById('cool');
  const distance = dot.getBoundingClientRect().left - cool.getBoundingClientRect().right+133;
  // Move the bird towards the dot
  cool.style.transition = "transform 1s";
  cool.style.transform = `translateX(${distance}px)`;
  setTimeout(() => {
    // Change the color of the dot
    dot.style.backgroundColor = "grey";
  }, 900);
}
