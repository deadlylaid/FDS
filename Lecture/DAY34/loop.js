// JavaScript Loop Statement
// while문

// var boo = true, m = 10;

// while(boo) {
//   console.log(boo ? '참참참!' : '짝짝짝!');
//   // if (--m < 0) { // 9,8,7,6,5,4,3,2,1
//   if (m-- < 0) { // 10,9,8,7,6,5,4,3,2,1
//     boo = !boo;
//   }
// }

// do ~ while 문

var boo = !true, m = 10;

do {
  // console.log(boo ? '참참참!' : '짝짝짝!');
  // if (--m > 0) { // 9,8,7,6,5,4,3,2,1
  if (m-- < 0) { // 10,9,8,7,6,5,4,3,2,1
    boo = !boo;
  }
} while(boo);


var demo_container = query(".demo-container");

// console.log(demo_container.firstChild);

var demo_container_first_el = firstEl(demo_container);

console.log(demo_container_first_el);