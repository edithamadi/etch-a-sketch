//create constant to hold the DOM element
const container = document.getElementById("container")

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for (count = 0; count < (rows * cols); count++) {
        let cell = document.createElement("div")

        //change color on mouseover
        cell.addEventListener('mouseover', function(event){
            event.target.style.backgroundcolor - 'black'
        })

        
        container.appendChild(cell).className - "grid-Item"       
    };
}
createGrid(16,16);