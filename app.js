//create constant to hold the DOM element
const container = document.getElementById("container")
const userInput = document.getElementById("quantity")
function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div")
        cell.style.backgroundColor = 'grey'
        //append each cell to the container div
        container.appendChild(cell).className = "grid-Item" 
      }

      const gridItems = document.querySelectorAll('.grid-Item')
      gridItems.forEach((gridItem)=>{
        gridItem.addEventListener('mouseover',()=>{
          gridItem.style.backgroundColor = 'black'
        })
      })
              
    }

createGrid(16,16);

// createGrid = () => {
//   for (let i = 0; i < 256; i++) {
//     const div = document.createElement("div");
//     div.classList.add("square");
//     grid.appendChild(div);
//   }
// };

// updateGrid = () => {
//   grid.innerHTML = "";
//   grid.style.setProperty(
//     "grid-template-columns",
//     `repeat(${userInput.value}, 2fr)`
//   );
//   grid.style.setProperty(
//     "grid-template-rows",
//     `repeat(${userInput.value}, 2fr)`
//   );
//   for (let i = 0; i < userInput.value * userInput.value; i++) {
//     const div = document.createElement("div");
//     div.classList.add("square");
//     grid.appendChild(div);
//   }
//   console.log(userInput.value);
// };

// const square = document.querySelector("div");
// square.addEventListener("mouseover", function(event) {
//   event.target.classList.replace("square", "color");
// });

// userInput.addEventListener("change", updateGrid);

// resetButton.addEventListener("click", function() {
//   grid.innerHTML = "";
//   userInput.value = "";
//   grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
//   grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
//   createGrid();
// });

// createGrid();