function exe11(){
   let parcelas = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
   let acrescimos = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
   let i, percentual, precoF, vP, precoVista;

   let valorCarro = parseFloat(prompt("Digite o valor do carro:"));
   precoVista = valorCarro - (valorCarro * 0.20);

   console.log(`Preço à vista com 20% de desconto: R$ ${precoVista.toFixed(2)}\n`);
   console.log(`Parcelas\tPreço Final\t\tValor da Parcela`);
   console.log(`----------------------------------------------------------`);

   for(i = 0; i < parcelas.length; i++){
       percentual = acrescimos[i];
       precoF = valorCarro + (valorCarro * (percentual / 100));
       vP = precoF / parcelas[i];
       console.log(`${parcelas[i]}x\t\tR$ ${precoF.toFixed(2)}\t\tR$ ${vP.toFixed(2)}`);
   }
}
