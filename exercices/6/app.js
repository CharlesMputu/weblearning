document.addEventListener("DOMContentLoaded", ()=>{

    const grid = document.querySelector(".grid")
    const form = document.querySelector(".grid-generate")


    function createItemElement()
    {
        const item = document.createElement("div")
              item.className = "item"

        return item
    }



    function generate(cols, rows){


        if(isNaN(parseInt(cols)) || isNaN(parseInt(rows))){
            alert("Veuillez entrer des nombres de 1 à 10")
            return
        }



        grid.innerHTML = `<div class="msg"><p>Création de la grid en cours...</p></div>`
        

        setTimeout(() => {
            
            const nbElement = cols * rows

            grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`

            grid.innerHTML = ""

            for (let index = 0; index < nbElement; index++) {

                grid.append(createItemElement())
            }


        }, 1500);

     
    }


    form.addEventListener("submit", function(e){
        e.preventDefault()

        const cols = this.cols.value
        const rows = this.rows.value

        generate(cols, rows)
        
    })

   
})