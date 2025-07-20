const toggle = document.getElementById("theme-toggle")
const label = document.getElementById("theme-label")

toggle.addEventListener("change", () => {
  label.textContent = toggle.checked ? "Claro" : "Escuro"

  // Aqui você pode salvar o estado no backend ou numa variável:
  const temaEvento = toggle.checked ? "claro" : "escuro"
  console.log("Tema do evento:", temaEvento)
})

document
  .getElementById("form-teste")
  .addEventListener("submit", function (event) {
    event.preventDefault() // Impede o envio real

    // Simulação de validação
    const checkboxObrigatorio = document.querySelector(
      'input[type="checkbox"]:checked'
    )

    if (!checkboxObrigatorio) {
      alert("Você precisa aceitar os termos para continuar.")
      return
    }

    alert("Formulário enviado com sucesso! (simulação)")
    // Aqui você pode prosseguir com seu código de envio (fetch, etc.)
  })
