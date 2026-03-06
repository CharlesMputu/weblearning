document.addEventListener("DOMContentLoaded", ()=>{

    
    const form  = document.querySelector(".form")
    const chars = 50


    form.addEventListener("submit", (e)=> e.preventDefault())


    form.querySelector("textarea").addEventListener("beforeinput", (e)=>{

        const textareaLength = e.target.value.length

        if(textareaLength === chars){
            e.preventDefault()
            return
        }

        const diff = (chars - textareaLength) -1

        form.querySelector(".output").innerText = diff

        
    })

    
})