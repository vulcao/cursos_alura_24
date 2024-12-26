import { somaHorasExtas, calculaDescontos } from "../index";

test("deve retornar a soma das Horas Extas", () => {
  const esperado = 2500;
  const retornado = somaHorasExtas(2000, 500);

  expect(retornado).toBe(esperado);
});

test("deve retornar o valor do salario com descontos", () => {
  const esperado = 1500;
  const retornado = calculaDescontos(2000, 500);

  expect(retornado).toBe(esperado);
});
