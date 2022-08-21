// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

//_____Validate different input types here(string, number, etc)____

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    else if (isNaN(testInput) === true) {
        return "Not a Number";
    }
    else if (isNaN(testInput) === false) {
        return "Is a Number";
    }
}

//____Adding Alerts after validating testInputs if Empty or NaN_______

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
   if ( validateInput(pilot) === "Empty" ||
        validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoLevel) === "Empty" ||
        validateInput(list) === "Empty" ) {
        alert("Input in all fields is required!");
    }

    else if ( 
        validateInput(fuelLevel) === "Not a Number" ||
        validateInput(cargoLevel) === "Not a Number") {
        alert("Please make sure inputs for the Fuel Level and the Cargo Level are numbers.");
    }

    // _______Upodating status information based on given parameters and changing template literal text output and color____________

    else {
        let pilotStatus = document.getElementById("pilotStatus")
        let copilotStatus = document.getElementById("copilotStatus")
        let fuelStatus = document.getElementById("fuelStatus")
        let cargoStatus = document.getElementById("cargoStatus")
        let launchStatus = document.getElementById("launchStatus")
        let listStatus = document.getElementById("faultyItems")

        pilotStatus.innerHTML = `Pilot ${pilot} is ready.`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready.`;

        if (fuelLevel < 10000) {
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            fuelStatus.innerHTML = `Fuel levels too low for launch`;
            launchStatus.style.color = "red";
            listStatus.style.visibility = "visible";
        }

        else if (cargoLevel > 10000) {
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            launchStatus.style.color = "red";
            listStatus.style.visibility = "visible";
        }

        else if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            launchStatus.innerHTML = `Shuttle is ready for launch`;
            launchStatus.style.color = "green";
        
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;