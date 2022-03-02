// Select color input
let inputColor = document.getElementById('colorPicker');

// Size input Selector
let cellHeight = document.getElementById('inputHeight');
let cellWidth = document.getElementById('inputWidth');
let picker = document.getElementById('sizePicker');

// Table element selector from HTML
let myTable = document.getElementById('pixelCanvas');

//Calling make grid based on size picked
picker.addEventListener('submit', function (event) {
  event.preventDefault()
  return makeGrid()
});

// Clear grid
let clearButton = document.querySelector('input[type="button"]');

clearBtn.addEventListener('click', function() {
  Array.from(myTable.getElementsByTagName("td")).forEach(cell=>{
    cell.style.backgroundColor="";
	})
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  myTable.innerHTML = "";
  for (let r = 0; r < cellHeight.value; r++) {
    let row = document.createElement("tr");
    for (let c = 0; c < cellWidth.value; c++) {
      let cell = document.createElement("td");
      row.appendChild(cell);
      myTable.appendChild(row);
      cell.addEventListener('click', function(event) {
        let inputColor = document.getElementByID('colorPicker').value;
        event.target.style.backgroundColor = inputColor;
  		});
    }
  }
  };
