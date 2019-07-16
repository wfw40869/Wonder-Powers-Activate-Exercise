const activateFlightButton = document.querySelector("#activate-flight"),
    activateMindButton = document.querySelector("#activate-mindreading"),
    activateXrayButton = document.querySelector("#activate-xray"),
    flightSection = document.querySelector("#flight"),
    mindSection = document.querySelector("#mindreading"),
    xraySection = document.querySelector("#xray"),
    allPowers = document.querySelectorAll(".power"),
    activateAllButton = document.querySelector("#activate-all"),
    deactivateAllButton = document.querySelector("#deactivate-all")


const activatePower = (power) => {
    power.classList.remove("disabled")
    power.classList.add("enabled")
}

const activateAllPowers = (allPowers) => {
    allPowers.forEach(power => {
        power.classList.remove("disabled")
        power.classList.add("enabled")
    });
}

const deactivateAllPowers = (allPowers) => {
    console.log(allPowers)
    allPowers.forEach(power => {
        power.classList.remove("enabled")
        power.classList.add("disabled")
    });
}



activateFlightButton.addEventListener("click", () => {
    activatePower(flightSection)
})

activateMindButton.addEventListener("click", () => {
    activatePower(mindSection)
})

activateXrayButton.addEventListener("click", () => {
    activatePower(xraySection)
})

activateAllButton.addEventListener("click", () => {
    activateAllPowers(allPowers)
})

deactivateAllButton.addEventListener("click", () => {
    deactivateAllPowers(allPowers)
})

