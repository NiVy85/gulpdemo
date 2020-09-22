// Fetch elements and set default values.
var le_g = document.getElementsByClassName('fir')[0];
var le_u = document.getElementsByClassName('sec')[0];
var le_l = document.getElementsByClassName('thi')[0];
var le_p = document.getElementsByClassName('fou')[0];
var ypos = [0,0,0,0];
var xpos = [-200, -110, -20, 60];

// Attach eventlistener to window, track if mouse is over GULP-text elements
window.addEventListener('mouseover', function(event) {
  if(event.target.classList.contains('fir') && ypos[0] == 0) {
    Bump(le_g, ypos,xpos, 0);
  }
  if(event.target.classList.contains('sec') && ypos[1] == 0) {
    Bump(le_u, ypos, xpos, 1);
  }
  if(event.target.classList.contains('thi') && ypos[2] == 0) {
    Bump(le_l, ypos, xpos, 2);
  }
  if(event.target.classList.contains('fou') && ypos[3] == 0) {
    Bump(le_p, ypos, xpos, 3);
  }
});

/**
 * Function that executes on current element under cursor.
 *
 * @param {*} element HTML-element to animate.
 * @param {*} ypos Default value 0, to prevent repeating animation.
 * @param {*} xpos The x-position of the element.
 * @param {*} val Choose array element.
 */
function Bump(element, ypos, xpos, val) {
  var id = setInterval(frame, 10);
  function frame() {
    if (ypos[val] >= 100) {
      clearInterval(id);
    } else {
      ypos[val]++;
      element.style.transform = 'translate(' + xpos[val] + 'px,calc(25vh + ' + ypos[val] + 'px)';
      console.log('howdy');
    }
  }
}