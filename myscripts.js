const etch = document.querySelector('#etch');

let grid = 256;

function createGrid(e) {
for (i = 1; i <= e; i++){
  const div = document.createElement('div');
  div.setAttribute( 'style', 'background-color: red;');
  div.classList.add('box'); 
  div.addEventListener('mouseover', () => {
    div.setAttribute( 'style', 'background-color: black;');
  });
  etch.appendChild(div);
}
}

createGrid(grid)

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {

    const box = document.querySelectorAll('.box');
    box.forEach((div) => {
    div.setAttribute( 'style', 'background-color: red;'); });

    let newGrid = prompt("How many squares per side for the new grid?")

    const etch = document.querySelector('#etch')
    etch.style.setProperty('--grid', newGrid);

    grid = newGrid * newGrid;
    createGrid(grid);

  }); 