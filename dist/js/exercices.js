document.addEventListener("DOMContentLoaded", async ()=>{

    const exercices = document.querySelector(".exercices")

    const api_url = `https://opensheet.elk.sh/1nCeJ3usXvVsRBmU_5o4gQOzz6V38q8DHAUaRQbGWdCM/exercices`
    // const dataJson =  "data/exercices.json"
    

    async function fetchData(url, name="api_data_sheets")
    {

        const storage = sessionStorage
        let data = []


        if(storage.getItem(name)){
            return JSON.parse(storage.getItem(name))
        }


        try {
            
            const response = await fetch(url)
            
            data = await response.json()
            
            // creer une copie
            storage.setItem(name, JSON.stringify(data))

        }finally{
            
            return data

        }

            
    


    }


    const data  = await fetchData(api_url)


    console.log(data);
    

    if(data.length > 0){
        
        exercices.innerHTML =  data.map( exercice =>  `

            <div class="item ">
                <div class="wrapper ">
                    <div class="header ">
                        <p class="badge">#${exercice.id}</p>
                        <p class="status subtitle">${parseInt(exercice.status) ? "Résolu" : "En cours"}</p>
                    </div>
                    <div class="content ">
                        <div class="group">
                            ${exercice.tech.split(",").map(tech => `
                                <div class="icon html">${tech.toUpperCase()}</div>`).join("")
                            }
                        </div>
                    </div>
                </div>
                <div class="details">
                    <div>
                        <h3 class="title text-wrap-auto">Système de login</h3>
                        <p class="subtitle text-wrap-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nemo harum totam eos dolor sapiente a repudiandae asperiores quos cumque, consequatur impedit autem tempore possimus delectus architecto inventore magnam alias? </p>
                    </div>
                    <a href="/exercices/${exercice.id}/demo.html"" class="demo">Demo</a>
                </div>
            </div>
        `).join("")
        

    }else{
        exercices.innerHTML = `<p>Vérifiez votre connexion internet, et réessayez</p>`
    }


    
})