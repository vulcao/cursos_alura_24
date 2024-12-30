const somaHorasExtas = (salario, valorHorasExtras) =>
  salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

export { somaHorasExtas, calculaDescontos };

// const verifiqueSe = (valor) => {
//   const assercoes = {
//     ehExatamenteIgualA(esperado) {
//       if (valor !== esperado) {
//         throw {};
//       }
//     },
//   };
//   return assercoes;
// };

// const teste = (titulo, funcaoDeTeste) => {
//   try {
//     funcaoDeTeste();
//     console.log(`✅ ${titulo} passou`);
//   } catch (e) {
//     console.error(`❌ ${titulo} falhou`);
//   }
// };

// teste("somar horas extras", () => {
//   const esperado = 2500;
//   const retornado = somaHorasExtas(2000, 500);

//   verifiqueSe(retornado).ehExatamenteIgualA(esperado);
// });

// teste("calcular descontos", () => {
//   const esperado = 1500;
//   const retornado = calculaDescontos(2000, 500);

//   verifiqueSe(retornado).ehExatamenteIgualA(esperado);
// });
