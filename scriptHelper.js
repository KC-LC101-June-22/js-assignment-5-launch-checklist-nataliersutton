// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
const missionDiv = document.getElementById("missionTarget");
    missionDiv.innerHTML = ` 
    <h2> Mission Destination</h2>
        <ol>
            <li>Name: ${name} </li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance} </li>
            <li>Number of Moons: ${moons}</li>
        </ol><img src="${imageUrl}" />
        `;
}

//_____Validate different input types here(string, number, etc)____

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    else if (isNaN(testInput)) {
        return "Not a Number";
    }
    else {
        return "Is a Number";
    }
}

//____Adding Alerts after validating testInputs if Empty or NaN_______

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    list.style.visibility = "hidden";

   if ( validateInput(pilot) === "Empty" ||
        validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoLevel) === "Empty" ) {
        alert("Input in all fields is required!");

        list.style.visibility = "hidden";
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

        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.style.visibility = "hidden";

        if (fuelLevel < 10000) {
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            launchStatus.style.color = "rgb(199, 37, 78)";
            listStatus.style.visibility = "visible";
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        }

        if (cargoLevel > 10000) {
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            launchStatus.style.color = "rgb(199, 37, 78)";
            listStatus.style.visibility = "visible";
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
        }

        else {
            launchStatus.innerHTML = `Shuttle is Ready for Launch`;
            launchStatus.style.color = "rgb(65, 159, 106)";
            listStatus.style.visibility = "visible";
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        }
    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

//____Function to Choose a Planet at Random_____

function pickPlanet(planets) {
    let randomPlanet = (Math.floor(Math.random()*planets.length));
    return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;