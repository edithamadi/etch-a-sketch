//create constant to hold the DOM element
const container = document.getElementById("container")

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div")

        //change color on mouseover
        cell.addEventListener('mouseover', function(event){
            event.target.style.backgroundcolor = 'orange'
        })

        //set dynamic padding for each cell
        cell.style.padding = 1, 1

        //append each cell to the container div
        container.appendChild(cell).className = "grid-Item"       
    };
}
createGrid(16,16);