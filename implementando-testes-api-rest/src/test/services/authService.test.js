import {describe, test, expect} from '@jest/globals';
import AuthService from '../../services/authService.js';

const authService = new AuthService();

describe('Testando o authService.cadastrarUsuario', () => {
  it('O usuario deve possuir um nome, email e senha',async() => {
    // arrange
    const usuarioMock = {
      nome: 'Fulano',
      email: 'fulano@emaiul.com'
    }
    // act
    const usuarioSalvo = authService.cadastrarUsuario(usuarioMock);
    // assert
    await expect(usuarioSalvo).rejects.toThrow('Senha é obrigatória.');
  })
});
