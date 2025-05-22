function exe5() {
  for (let i = 1; i <= 10; i++) {
    let tabuada = `Tabuada do ${i}:\n`
    
    for (let j = 1; j <= 10; j++) {
      tabuada += `${i} x ${j} = ${i * j}\n`
    }

    console.log(tabuada)
  }
}
