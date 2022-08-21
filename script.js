// Write your JavaScript code here!

const { formSubmission, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper"); 
// --something christian said could help with checking/testing while working?

window.addEventListener("load", function() {
    let listedPlanets;
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo (
            document,
            planet.name,
            planet.diameter,
            planet.star,
            planet.distance,
            planet.moons,
            planet.image
        );
    });

    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        
        let pilotName = document.querySelector("input[name=pilotName]");
        let pilot = pilotName.value;
        let copilotName = document.querySelector("input[name=copilotName]");
        let copilot = copilotName.value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuelLevelInput.value;
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = cargoMassInput.value;
        let list = document.getElementById("faultyItems");

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
    
 });