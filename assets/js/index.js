const toggle = document.getElementById("theme-toggle")
const label = document.getElementById("theme-label")

toggle.addEventListener("change", () => {
  label.textContent = toggle.checked ? "Claro" : "Escuro"

  const temaEvento = toggle.checked ? "claro" : "escuro"
  console.log("Tema do evento:", temaEvento)
})

document
  .getElementById("event-form")
  .addEventListener("submit", function (event) {
    event.preventDefault() // Impede o envio real

    // Pega todos os inputs obrigatórios
    const requiredFields = document.querySelectorAll(
      "#event-form input[required], #event-form textarea[required]"
    )
    let formIsValid = true

    requiredFields.forEach((input) => {
      const wrapper = input.closest(".input-wrapper")
      const errorDiv = wrapper.querySelector(".error")

      if (!input.value.trim()) {
        // Mostra erro
        errorDiv.style.display = "flex"
        formIsValid = false
      } else {
        // Oculta erro
        errorDiv.style.display = "none"
      }
    })

    // Verifica checkboxes obrigatórios
    const checkboxesObrigatorios = document.querySelectorAll(
      '.checkbox-wrapper input[type="checkbox"].required'
    )

    checkboxesObrigatorios.forEach((checkbox) => {
      const wrapper = checkbox.closest(".checkbox-wrapper")
      const errorDiv = wrapper.querySelector(".error")

      if (!checkbox.checked) {
        errorDiv.style.display = "flex"
        formIsValid = false
      } else {
        errorDiv.style.display = "none"
      }
    })

    if (formIsValid) {
      alert("Formulário enviado com sucesso! (simulação)")
      // Aqui você pode fazer o envio via fetch, etc.
    }
  })

const requiredFields = document.querySelectorAll(
  "#event-form input[required], #event-form textarea[required]"
)

requiredFields.forEach((input) => {
  input.addEventListener("input", () => {
    const wrapper = input.closest(".input-wrapper")
    const errorDiv = wrapper.querySelector(".error")

    if (input.value.trim()) {
      errorDiv.style.display = "none"
    }
  })
})

const checkboxesObrigatorios = document.querySelectorAll(
  '.checkbox-wrapper input[type="checkbox"].required'
)

checkboxesObrigatorios.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const wrapper = checkbox.closest(".checkbox-wrapper")
    const errorDiv = wrapper.querySelector(".error")

    if (checkbox.checked) {
      errorDiv.style.display = "none"
    }
  })
})

const fileInput = document.getElementById("arquivo")
const fileNameDisplay = document.querySelector(".file-name")
const fileError = document.querySelector(".error")

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0]

  if (file) {
    fileNameDisplay.textContent = file.name
    fileError.style.display = "none"
  } else {
    fileNameDisplay.textContent = "Nenhum arquivo selecionado"
  }
})

// Validação no submit
document.getElementById("event-form").addEventListener("submit", function (e) {
  e.preventDefault()

  if (!fileInput.files.length) {
    fileError.style.display = "block"
    return
  }

  alert("Arquivo enviado (simulação)!")
})
