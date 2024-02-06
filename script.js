var gridSize = 16

function initSketchpad(){
   const sketchpadDiv = document.getElementById('sketchpad');
   while(sketchpadDiv.firstChild){
      sketchpadDiv.removeChild(sketchpadDiv.lastChild);
   }

   for(let i = 0; i < gridSize; i++){
      let row = document.createElement('div');
      let rowHeight = ( 960 / gridSize) - 4;

      row.classList.add('row');

      for(let j = 0; j < gridSize; j++){
         let cell = document.createElement('div');
         cell.classList.add('cell');
         cell.style.height = rowHeight + 'px';
         cell.style.width = (960 / gridSize) + 'px';
         row.appendChild(cell);

         cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
            
         });
      }

      row.style.height = rowHeight + 'px';
      sketchpadDiv.appendChild(row);
   }
}

function changeGridSize(){
   gridSizeInput = document.getElementsByTagName('input')[0];
   gridSize = Math.min(gridSizeInput.value, 100);
   gridSizeInput.value = gridSize;
   initSketchpad();
}


const gridSizeButton = document.getElementsByClassName('gridSizeButton')[0];
gridSizeButton.addEventListener('click', changeGridSize);

const resetButton = document.getElementsByClassName('reset')[0];
resetButton.addEventListener('click', initSketchpad);

initSketchpad();