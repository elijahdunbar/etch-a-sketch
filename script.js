// Create a webpage with a 16x16 grid of square divs.
const container = document.querySelector('#draw-area');
const clearBtn = document.querySelector('#clear');
const gridBtn = document.querySelector('#grid');


function createGrid(numberOfSquares) {
  for (let i = 0; i < numberOfSquares ** 2; i++) {
    const gridSquare = document.createElement('div');
    const squareSize = container.clientHeight / numberOfSquares;

    gridSquare.style.border = '1px solid black';
    gridSquare.style.height = `${squareSize}px`;
    gridSquare.style.width = `${squareSize}px`;
  
    container.appendChild(gridSquare);
  
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'blue';
    });
  }
}

gridBtn.addEventListener('click', () => {
  resetGrid();
  let size = prompt('How many squares per side?');
  while (Number(size) < 0 && Number(size) > 64) {
    size = prompt('How many squares per side?');
  }
  createGrid(size);
});

clearBtn.addEventListener('click', clear);

function clear() {
  let childList = container.childNodes;
  for (let i = 0; i < childList.length; i++) {
    childList[i].style.backgroundColor = 'hsl(0, 0%, 87%)';
  }
}

function resetGrid() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}
