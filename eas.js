let userGridValue = 16;
createGrid(userGridValue);  //initial grid of 16 by 16
editGrid();
let isMouseDown = false;
let userColor = "#000000";

const submit1 = document.querySelector('.submit'); //ref to submit button

const clear = document.querySelector('.clear');





clear.addEventListener('click', ()=>{
  eraseGrid();
  createGrid(userGridValue);
  editGrid();
});

let userColor1 = document.getElementById('colorPicker');

userColor1.addEventListener('input', () => {
  userColor = document.getElementById('colorPicker').value; //read User Color value
});

submit1.addEventListener('click', () => {
     editGrid();
});

function editGrid(){
  let x = document.getElementById('textbox').value;  //stores textbox value in x
  if (x > 64) return;        //user limit upto 64
  userGridValue = x;
  eraseGrid();                 //erase existing grid
  createGrid(userGridValue);   //create grid of user entered value
  var hoverPixel = document.querySelectorAll('.pixel');

  hoverPixel.forEach(function (element) {
    element.addEventListener('mouseover', handleMouseOver);
  });

  var removeHover = document.querySelectorAll('.pixel');

  removeHover.forEach(function (element) {
    element.addEventListener('mouseout', handleMouseOut);
  });

  function handleMouseOver(event) {
    event.target.style.backgroundColor = 'grey';
  }

  function handleMouseOut(event) {
    event.target.style.backgroundColor = 'white';
  }

  var addColor = document.querySelectorAll('.pixel');

  addColor.forEach(function (element) {
    element.addEventListener('mousedown', () => {
      element.style.backgroundColor = userColor;
      element.removeEventListener('mouseover', handleMouseOver);
      element.removeEventListener('mouseout', handleMouseOut);
    });
  });


  addColor.forEach(function (element) {
    element.addEventListener('mousedown', () => {
      isMouseDown = true;
    })
    element.addEventListener('mouseup', () => {
      isMouseDown = false;
    });
  });


  addColor.forEach(function (element) {

    element.addEventListener('mousemove', function clickHandler() {
      if (isMouseDown === true) {
        element.style.backgroundColor = userColor;
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      }
    });
  });
}





function eraseGrid() {
  const allPixels = document.querySelectorAll('.pixel');

  allPixels.forEach(function (element) {
    element.remove();
  });
}

function createGrid(value) {

  for (let j = 0; j < userGridValue; j++) {
    for (let i = 0; i < userGridValue; i++) {
      const pixel1 = document.createElement('button');

      pixel1.classList.add('pixel');   //add class = 'pixel' to each button

      pixel1.style.backgroundColor = 'white';

      pixel1.style.padding = '2px';

      pixel1.style.border = '1px solid white';

      pixel1.style.height = (400 / value) + 'px';  //Gird height = 400px

      pixel1.style.width = (600 / value) + 'px';   //Grid width = 600px

      pixel1.style.boxSizing = 'border-box';

      const parent1 = document.querySelector('.grid');

      parent1.appendChild(pixel1);

    }

  }
}




