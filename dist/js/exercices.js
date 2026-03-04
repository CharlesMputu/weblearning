document.addEventListener("DOMContentLoaded", async ()=>{


    console.log("exercices start");


    const exercices = document.querySelector(".exercices")


    const response = await fetch("data/exercices.json")
    const data = await response.json()

    console.log(data);
    


    exercices.innerHTML =  data.map( exercice =>  `
         <div class="item">
            <div class="header">
                <p class"status">${exercice.status}</p>
                <h1>#${exercice.id}</h1>
                <div class="state">
                    <p>Publié, le ${exercice.date.post}</p>
                    <p>Fin, le ${exercice.date.end}</p>
                </div>
            </div>
            <div class="content">
                <div class="group g1">
                    <h3>${exercice.about.title}</h3>
                    <p>${exercice.about.desc}</p>
                </div>
                <div class="group">
                    <h3>Technologies utilisées</h3>
                    <p>${exercice.tech.join(" , ").toUpperCase()}</p>

                </div>
            
            </div>
            <div class="actions">
                <p class="item">Télécharger</p>
                <a href="${exercice.actions.demo}" class="item start">Voir</a>
            </div>
        </div>
    `).join("")
    

    

    //    async function getData(url) {

    //     const response = await fetch(url)
    //     return await response.json()

    // }

    
})