import { somaHorasExtas, calculaDescontos } from "../index";

describe("Testes dos calculos de folha de pagamento", () => {
  it("Deve retornar a soma das Horas Extas", () => {
    const esperado = 2500;
    const retornado = somaHorasExtas(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it("Deve retornar o valor do salario com descontos", () => {
    const esperado = 1500;
    const retornado = calculaDescontos(2000, 500);

    expect(retornado).toBe(esperado);
  });
});
