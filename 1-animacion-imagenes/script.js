const paneles = document.querySelectorAll('.panel')

// console.log(paneles)

paneles.forEach(panel => {
  panel.addEventListener('click', () => {
    removerClasesActivas()
    panel.classList.add('activo')
  })
})

function removerClasesActivas () {
  paneles.forEach(panel => {
    panel.classList.remove('activo')
  })
}
