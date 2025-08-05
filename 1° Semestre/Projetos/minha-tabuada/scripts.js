let contadorTabuadas = 0

function gerarTabuada(){
    const numberInput = document.getElementById("numero")
    const limiteInput = document.getElementById("limite")
    const result = document.getElementById("result")
    const contador = document.getElementById("contador")

    const number = numberInput.value
    let limite = limiteInput.value

    result.innerHTML = ''
    contadorTabuadas++

    if (number === '') {
         alert('Por favor, digite o número da tabuada!')
         numberInput.focus()
         return
    }

    const n = parseFloat(number)
    limite = limite === '' ? 10 : parseFloat(limite)

    if (limite < 1) {
        alert("O limite deve ser igual ou maior do que 1!")
        limiteInput.focus()
        return
    }

    let i = 1

    while (i <= limite) {
        const item = document.createElement('li')
        const mult = n * i
        const resulText = Number.isInteger(mult) ? `${n} x ${i} = ${mult} ` : `${n} x ${i} = ${mult.toFixed(2)}`
        
        item.textContent = resulText
        result.appendChild(item)
        i++
    }
    
    contador.textContent = `Tabuadas geradas: ${contadorTabuadas}`

    numberInput.value = ''
    limiteInput.value = ''
    numberInput.focus()
}

document.getElementById("numero").addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    gerarTabuada()
  }
})
document.getElementById("limite").addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    gerarTabuada()
  }
})
