// creates HTML with bootstrap and google fonts
const createHTML = function (team) {

return `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Profile</title>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<style>
</style>

</head>

<body>

<div class="header">
<div class="jumbotron bg-danger">
   <h1 class="display-4 text-white text-center">My Team</h1>
</div>
</div>

<div class="container-body container-fluid">
   <div class="row">
        ${team} 
    </div>
</div>
</body>
</html>`
}
// creates cards for employee through user input
const createCard = function (card) {

    // info to displau
    let roleInfo;

    if (card.title === "Manager") {
        roleInfo = `Office Number: ${card.officeNumber}`
    } else if (card.title === "Engineer") {
        roleInfo = `GitHub Username: <a href="https://github.com/${card.github}" target="_blank">${card.github}</a>`
    } else if (card.title === "Intern") {
        roleInfo = `School: ${card.school}`
    }

    return `
    
<div class="col-md-4 col-sm-6 col-12 col-lg-3">    
    <div class="card mb-5 bg-white rounded">
        <div class="card-header bg-primary">
            <h4 class="text-white text-center">${card.name}</h4>  
            <h4 class="text-white text-center">${card.title}</h4>
        </div>

        <div class="card-body">
            <ul class="list-unstyled">
                <li>Employee ID: ${card.id}</li>
                <li>Email: <a href="mailto:${card.email}">${card.email}</a></li>
                <li>${roleInfo}</li>
            </ul>
        </div>
    </div>
</div>
`
}

exports.createHTML = createHTML;
exports.createCard = createCard;