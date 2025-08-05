function exe4(){
  let num = parseInt(prompt("Digite um número para ver a tabuada:"))

  if (isNaN(num)) {
    alert("Por favor, digite um número válido.")
    return 
  }

  let resultado = `Tabuada do ${num}:\n`

  for (let i = 0; i <= 10; i++) {
    resultado += `${num} x ${i} = ${num * i}\n`
  }

  alert(resultado)
}
