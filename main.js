document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector(".container");
    let new_grid = document.querySelector(".new-grid");
    let n = 16;

    function get_num_of_square_divs() {
        let num_of_square_divs = parseInt(prompt("Enter number of squares,\nNumber must be less than or equal to 100", "1"));

        if (isNaN(num_of_square_divs) || num_of_square_divs == '' || num_of_square_divs > 100 || num_of_square_divs <= 0)
            {
                num_of_square_divs = 16;
            }

        return num_of_square_divs;
    };

    for (let index = 0; index < (n**2); index++) {
        const square_div = document.createElement("div");
        container.appendChild(square_div);
    }

    let square_divs = document.querySelectorAll(".container div");
    square_divs.forEach((div) => {
        div.addEventListener('click', () => {
            div.style.backgroundColor = "black";
        });
    });
    
    new_grid.addEventListener('click', () => {
        n = get_num_of_square_divs();
        
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        
        for (let index = 0; index < (n**2); index++) {
            const square_div = document.createElement("div");
            container.appendChild(square_div);
        }
        
        square_divs = document.querySelectorAll(".container div");
        square_divs.forEach((square_div) => {
            square_div.style.width = `${960 / n}px`;
            square_div.style.height = `${960 / n}px`;
        });

        square_divs.forEach((div) => {
            div.addEventListener('click', () => {
                div.style.backgroundColor = "black";
            });
        });
    });
});