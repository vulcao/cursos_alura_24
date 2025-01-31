// Teste de Conexão com o Banco de Dados
// Deve retornar o autor registrado da tabela autores

import db from '../../db/dbconfig.js';
import {describe, test, expect} from '@jest/globals';

describe('Testando dbconfig', () => {
  it('Teste de Conexão com o Banco de Dados', async () => {
    // Arrange
    const autorMock = {
      nome: 'Autor Mock',
      nacionalidade: 'Brasileiro',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    // Act
    const autorSalvo = await db('autores')
      .insert(autorMock)
      .then((retorno) => db('autores')
                          .where('id', retorno[0])
                        )
      .then((autorSelecionado) => autorSelecionado[0]);
    // Assert
    expect(autorSalvo.nome).toBe(autorMock.nome);
    
    // limpeza na base de dados após o teste
    await db('autores').where('id', autorSalvo.id).del();
  });
});