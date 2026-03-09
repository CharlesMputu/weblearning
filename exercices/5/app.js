document.addEventListener("DOMContentLoaded", ()=>{

    const items = document.querySelectorAll(".icons .item")
    const main = document.querySelector(".main")


    function modeToggle (mode)
    {
        const body = document.body

        mode === "moon" ? body.classList.add("dark-active") : body.classList.remove("dark-active")
        
    }


    

    items.forEach(item => {

        // console.log(item);

        item.addEventListener("click", (e)=>{
            e.preventDefault()

            // suprimer la classe .active

            items.forEach(element => element.classList.remove("active"))

            // ajouter la classe .active sur l'element cliqué

            e.currentTarget.classList.add("active")


            // Changer le mode

            const mode = e.currentTarget.dataset.mode

            modeToggle(mode)

            
        })
        
    } )
  
})