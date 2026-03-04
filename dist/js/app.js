document.addEventListener("DOMContentLoaded", ()=>{

    
    const bars = document.querySelector(".topbar .aside .bars")


    // Modal
    
    const modal = document.querySelector(".modal")
    const modalContent = modal.querySelector(".content")


    function iconToggle (icon)
    {
        const iconClass = icon.classList;

        if(!iconClass.replace("fa-bars", "fa-times")){
            iconClass.replace("fa-times", "fa-bars")

            return false
        }

        return true
        
    }

    function modalOpen(){
        modal.classList.remove("none")
        setTimeout(function(){
            modalContent.style.transform = " matrix(1, 0, 0, 1, 0, 0)"
        }, 0)
    }

    function modalClose(){
        modalContent.style.transform = " matrix(1, 0, 0, 1, -300, 0)"
        setTimeout(function(){
            modal.classList.add("none")
        }, 300)
    }

    function modalToggle(state){

        state ? modalOpen() : modalClose()
    
    }


    
    bars.addEventListener("click", (e)=>{
        e.preventDefault()

        modalToggle(iconToggle(bars))
        
    })
    
})