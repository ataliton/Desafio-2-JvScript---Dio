function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel;

 
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "bronze";
  }
  if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  }
  if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  }
  if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  }
  if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendario";
  } else {
    nivel = "Imortal";
  }

  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

const vitorias = 45;
 const derrotas = 15;
 const resultado = calcularNivel(vitorias, derrotas);
 console.log(resultado);