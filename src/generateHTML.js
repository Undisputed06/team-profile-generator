//template helper code

const generateHTML = team =>{
   html =[]

   for(let i=0; i< team.length; i++){
       if(team[i].getRole() === "Manager") {
        const managerCard = createManager(team[i])
        html.push(managerCard)
       }
       if(team[i].getRole() === "Engineer") {
        const engineerCard = createEngineer(team[i]);
        html.push(engineerCard)
       }
       if(team[i].getRole() === "Intern"){
       const internCard=  createIntern(team[i])
       html.push(internCard)
       }
   }
   const teamCards = html.join("")

   const generateTeam = generatePage(teamCards)
   return generateTeam;


}
const createManager = manager => {
    return `
    
    <div class="card" style="width: 18rem;">
        <div class="card h-100 shadow">
         <div class="card-header bg-primary text-white">
            <h3>${manager.name}</h3>
             <h5>Manager</h5>
        </div>
        <div class="card-body">
        <ul class="list-group>
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office: ${manager.office}</li>
        </ul>
         </div>
    </div>
    </div>
    `
}

const createEngineer = engineer => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card h-100 shadow">
         <div class="card-header bg-primary text-white">
            <h3>${engineer.name}</h3>
             <h5>Engineer</h5>
        </div>
        <div class="card-body">
        <ul class="list-group>
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">Office: ${engineer.officeNum}</li>
        </ul>
         </div>
    </div>
    </div>
    `
}

const createIntern = intern => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card h-100 shadow">
         <div class="card-header bg-primary text-white">
            <h3>${intern.name}</h3>
             <h5>Engineer</h5>
        </div>
        <div class="card-body">
        <ul class="list-group>
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">Office: ${intern.officeNum}</li>
        </ul>
         </div>
    </div>
    </div>
    `

}


const generatePage = teamCards =>{

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
        crossorigin="anonymous">
        <title>My Team Org</title>
    </head>
    <body>
        <nav class="navbar navbar-light bg-light">
         <span class="navbar-brand mb-0 h1">My Team</span>
        </nav>
    <main>
    ${teamCards}
    </main>
    </body>
    </html>

  }
`
}
module.exports = generateHTML;