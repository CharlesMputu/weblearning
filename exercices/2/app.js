document.addEventListener("DOMContentLoaded", ()=>{

    const panelBtn = document.querySelectorAll(".panel .item")
    const light = document.querySelector(".light .icon")

    console.log(panelBtn);


    panelBtn.forEach(btn =>{
        console.log(btn);

        btn.addEventListener("click", (e)=>{
            e.preventDefault()

            if(e.target.classList.contains("on")){
                light.style.color = "orange"
            }else if(e.target.classList.contains("off")){
                light.style.color = "#aaa"
            }
            
        })
        
    })
    
})