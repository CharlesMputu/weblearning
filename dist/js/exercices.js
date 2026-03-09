document.addEventListener("DOMContentLoaded", async ()=>{

    const exercices = document.querySelector(".exercices")

    const api_url = `https://opensheet.elk.sh/1nCeJ3usXvVsRBmU_5o4gQOzz6V38q8DHAUaRQbGWdCM/exercices`
    const dataJson =  "data/exercices.json"
    

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

    const response =  await fetchData(api_url)


    // for hors connexion 

    const data  = response.length > 0 ? response : await fetchData(dataJson)


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
                        <h3 class="title text-wrap-auto">${exercice.title}</h3>
                        <p class="subtitle text-wrap-auto-multi">${exercice.desc}</p>
                    </div>
                    <a href="/exercices/${exercice.id}/demo.html"" class="demo">Demo</a>
                </div>
            </div>
        `).join("")
        

    }else{
        exercices.innerHTML = `<p>Vérifiez votre connexion internet, et réessayez</p>`
    }


    
})