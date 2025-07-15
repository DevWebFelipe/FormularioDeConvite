const label = document.querySelector(".theme-label")
const radioLight = document.getElementById("theme-light")
const radioDark = document.getElementById("theme-dark")

radioLight.addEventListener("change", () => (label.textContent = "Claro"))
radioDark.addEventListener("change", () => (label.textContent = "Escuro"))
