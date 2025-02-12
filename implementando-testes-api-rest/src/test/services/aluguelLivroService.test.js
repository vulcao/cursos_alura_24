// Numero de dias alugados deve ser maior que 0
// Data que o livro foi alugado nao pode ser nula
// Retornar a data da devolucao validando a quantidade de dias alugados
import {describe, expect} from '@jest/globals'
import AluguelLivroService from '../../services/aluguelLivroService.js'

const aluguelLivroService = new AluguelLivroService()
describe('Testando AluguelLivroService', () => {
  it('Retornar a data da devolucao validando a quantidade de dias alugados', async () => {
    const dataAlugado = new Date('2025-02-10');
    const numeroDiasAlugado = 5;
    const dataDevolucaoMock = new Date('2025-02-15');

    const dataDevolucao = await aluguelLivroService.calcularDataDevolucao(dataAlugado, numeroDiasAlugado);

    expect(dataDevolucao).toStrictEqual(dataDevolucaoMock);
  });
  it('Numero de dias alugados deve ser maior que 0',async()=>{
    const dataAlugado = new Date('2025-02-10');
    const numeroDiasAlugado = 0;  
    
    const validacao = aluguelLivroService.calcularDataDevolucao(dataAlugado, numeroDiasAlugado)
    await expect(validacao).rejects.toThrowError('Numero de dias alugados deve ser maior que 0');
  })
  it('Data que o livro foi alugado nao pode ser nula',async()=>{
    const dataAlugado = null;
    const numeroDiasAlugado = 5;

    const validacao = aluguelLivroService.calcularDataDevolucao(dataAlugado, numeroDiasAlugado)
    await expect(validacao).rejects.toThrowError('Data que o livro foi alugado não pode ser nula');
  })
})