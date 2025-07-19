const toggle = document.getElementById("theme-toggle")
const label = document.getElementById("theme-label")

toggle.addEventListener("change", () => {
  label.textContent = toggle.checked ? "Claro" : "Escuro"

  // Aqui você pode salvar o estado no backend ou numa variável:
  const temaEvento = toggle.checked ? "claro" : "escuro"
  console.log("Tema do evento:", temaEvento)
})
