// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper"); --something christian said could help with chcecking/testing while working

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
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