document.addEventListener("DOMContentLoaded", async ()=>{

    const exercices = document.querySelector(".exercices")
    const store = sessionStorage
    let data =  []

    

    async function fetchData()
    {

        try {
                
            if(!store.getItem("api")){

                const api  = `https://opensheet.elk.sh/1nCeJ3usXvVsRBmU_5o4gQOzz6V38q8DHAUaRQbGWdCM/exercices`

                const dataJson = "data/exercices.json"

                const response = await fetch(dataJson)

                if(!response.ok){
                    throw new Error("Erreur réseau");
                }

                data = await response.json()

                store.setItem("api", JSON.stringify(data))

                return

            }

            data = JSON.parse(store.getItem("api"))


            renderData(data)
        // afficher loader



        // console.log(response);
    } catch (error) {
            console.error("Erreur :", error);
            exercices.innerHTML = `<p>Vérifiez votre connexion et réessayez</p>`
    }finally{
        // cacher le loader ici
    }
        
    }


    function renderData(data)
    {

        if(data.length > 0)
        {
        
            exercices.innerHTML =  data.map( exercice =>  `

                <div class="item ">
                    <div class="wrapper ">
                        <div class="header ">
                            <p class="badge">#${exercice.id}</p>
                            <p class="status subtitle">
                                ${exercice.status === "resolved" ? "Résolu" : "En cours"}
                            </p>
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
                            <p class="subtitle text-wrap-auto">${exercice.desc}</p>
                        </div>
                        <a href="/exercices/${exercice.id}/demo.html"" class="demo">Démo</a>
                    </div>
                </div>
            `).join("")

        }
        
    }


    fetchData()




    //  filter

    const filterItems = document.querySelectorAll(".filter .item")

    filterItems.forEach(item => {

        item.addEventListener("click", (e)=>{

            e.preventDefault()


            // Remove classe active

            for (const element of filterItems) {
                element.classList.remove("active")
            }

            //  ajouter la classe active

            e.currentTarget.classList.add("active")


            // afficher la data

            const filterName = e.currentTarget.dataset.filter


            // sauvegarder le fitre

            store.setItem("filterName", filterName)


            
            if(filterName === "all"){
                renderData(data);
                return
            }


            const dataFilter = data.filter(d => d.status === filterName)
            renderData(dataFilter);

            
        })
    })



    
})