document.addEventListener("DOMContentLoaded", ()=>{

    const icons = document.querySelectorAll(".icons .item")
    const store = sessionStorage


    function backGroundColorChange (color)
    {
        document.body.style.backgroundColor = color        
    }




    icons.forEach(icon =>{

        icon.addEventListener("click", (e)=>{
            e.preventDefault()
            
            const color = e.target.dataset.bgcolor

            // sauvegarder

            store.setItem("bgcolor", color)

            // On affecte

            backGroundColorChange(color)

        })
        
    })


    window.addEventListener("load", ()=>{
        
        const color = store.getItem("bgcolor")

        if(color !== null){
            backGroundColorChange(color)
        }
        
    })
})