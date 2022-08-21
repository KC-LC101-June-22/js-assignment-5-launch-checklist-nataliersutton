// Write your JavaScript code here!

window.addEventListener("load", function() {
    let listedPlanets;
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo (
            document,
            selectedPlanet.name,
            selectedPlanet.diameter,
            selectedPlanet.star,
            selectedPlanet.distance,
            selectedPlanet.moons,
            selectedPlanet.image
        );
    });

    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

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