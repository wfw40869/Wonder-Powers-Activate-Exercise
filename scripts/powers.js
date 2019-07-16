const flightSection = document.querySelector("#flight"),
    mindSection = document.querySelector("#mindreading"),
    xraySection = document.querySelector("#xray"),
    allPowers = document.querySelectorAll(".power"),
    activateAllButton = document.querySelector("#activate-all"),
    deactivateAllButton = document.querySelector("#deactivate-all"),
    allButtons = document.querySelectorAll("button")




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
    allPowers.forEach(power => {
        power.classList.remove("enabled")
        power.classList.add("disabled")
    });
}

allButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const powerDescription = event.target.id.split("-")[1]
        if (powerDescription === "flight") {
            activatePower(flightSection)
        } else if (powerDescription === "mindreading") {
            activatePower(mindSection)
        } else if (powerDescription === "xray") {
            activatePower(xraySection)
        }
    })
})



activateAllButton.addEventListener("click", () => {
    activateAllPowers(allPowers)
})

deactivateAllButton.addEventListener("click", () => {
    deactivateAllPowers(allPowers)
})

