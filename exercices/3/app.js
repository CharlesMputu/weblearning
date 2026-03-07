document.addEventListener("DOMContentLoaded", ()=>{

    
    const form  = document.querySelector(".form")
    const textarea  = document.querySelector("textarea")
    const output = form.querySelector(".output")

    const chars = parseInt(textarea.dataset.chars);
    output.innerText = chars
    


    form.addEventListener("submit", (e)=> e.preventDefault())

    form.querySelector("textarea").addEventListener("input", (e)=>{

        e.target.setAttribute("maxlength", chars)
     
        const textareaLength = e.target.value.length
        const diff = (chars - textareaLength)

        form.querySelector(".output").innerText = diff
        
 

        
    })

    
})