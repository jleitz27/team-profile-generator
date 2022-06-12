// //create whole team page
const renderTeamPage = function (teamCards) {   
    return`
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Team Profile</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
                <link rel="stylesheet" href="style.css">
                
            </head>
            
            <body>
                <header>
                    <nav class="navbar" id="navbar">
                        <span class="navbar-brand mb-0 h-25 w-100 text-center fs-1 bg-primary">My Team</span>
                    </nav>
                </header>
                <div class="container">
                    <div class="row justify-content-center" id="team-cards">
                        <!--Team Cards-->
                        ${teamCards}
                    </div>
                </div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            </body>
        </html>
    `;
};


//created card for manager
const renderManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-info border">
                <h3>${manager.name}</h3>
                <h4> ☕️ Manager</h4>
            </div>
            <div class="card-body bg-secondary">
                <p class="id border p-1">ID: ${manager.id}</p>
                <p class="email border p-1">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office border p-1">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};


//create card for engineer

const renderEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header bg-info border">
            <h3>${engineer.name}</h3>
            <h4>💻 Engineer</h4>
        </div>
        <div class="card-body bg-secondary">
            <p class="id border p-1">ID: ${engineer.id}</p>
            <p class="email border p-1">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github border p-1">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>
    `
};

//create intern card 
const renderIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header bg-info border">
            <h3>${intern.name}</h3>
            <h4>🎓 Intern</h4>
        </div>
        <div class="card-body bg-secondary">
            <p class="id border p-1">ID: ${intern.id}</p>
            <p class="email border p-1">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school border p-1">School: ${intern.school}</p>
        </div>
    </div>
</div>
    `
};

renderHTML = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = renderManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = renderEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = renderIntern(employee);

            pageArray.push(internCard);
        }
        
    }
    const employeeCards = pageArray.join('')

    // return to generated page
    const renderTeam = renderTeamPage(employeeCards); 
    return renderTeam;

};

//export
module.exports = renderHTML;

