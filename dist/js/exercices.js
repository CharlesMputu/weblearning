document.addEventListener("DOMContentLoaded", async ()=>{

    const exercices = document.querySelector(".exercices")

    const api_url = `https://opensheet.elk.sh/1nCeJ3usXvVsRBmU_5o4gQOzz6V38q8DHAUaRQbGWdCM/exercices`
    


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

    if(data.length > 0){
        
        exercices.innerHTML =  data.map( exercice =>  `
            <div class="item">
                <div class="header">
                    <p class"status">${parseInt(exercice.status) ? "Résolu" : "En cours"}</p>
                    <h1>#${exercice.id}</h1>
                    <div class="state">
                        <p>Publié, le ${exercice.created_at}</p>
                        <p>${parseInt(exercice.status)? "" : `Fin, le ${exercice.expired_at}`}</p>
                    </div>
                </div>
                <div class="content">
                    <div class="group g1">
                        <h3>${exercice.title}</h3>
                        <p>${exercice.desc}</p>
                    </div>
                    <div class="group">
                        <h3>Technologies utilisées</h3>
                        <p>${exercice.tech.toUpperCase()}</p>

                    </div>
                
                </div>
                <div class="actions">
                    <p class="item">Télécharger</p>
                    <a href="/exercices/${exercice.id}/demo.html" class="item start">Voir</a>
                </div>
            </div>
        `).join("")
        

    }else{

        exercices.innerHTML = `<p>Vérifiez votre connexion internet, et réessayez</p>`
        
    }

    


    
})