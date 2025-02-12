import {describe, test, expect} from '@jest/globals';
import AuthService from '../../services/authService.js';
import Usuario from '../../models/usuario.js';
import bcryptjs from 'bcryptjs';

const authService = new AuthService();

describe('Testando o authService.cadastrarUsuario', () => {
  it('O usuario deve possuir um nome, email e senha',async() => {
    // arrange
    const usuarioMock = {
      nome: 'Fulano',
      email: 'fulano@email.com'
    }
    // act
    const usuarioSalvo = authService.cadastrarUsuario(usuarioMock);
    // assert
    await expect(usuarioSalvo).rejects.toThrow('Senha é obrigatória.');
  });

  //Cenário 1: A senha do usuário precisa ser criptografada quando for salva no banco de dados;
  it('A senha do usuário precisa ser criptografada quando for salva no banco de dados', async() => {
    // arrange
    const usuarioMock = {
      nome: 'Fulano',
      email: 'fulano@email.com',
      senha: '123456'
    }
    // act
    const usuarioSalvo = await authService.cadastrarUsuario(usuarioMock);
    const senhaIguais = await bcryptjs.compare('123456', usuarioSalvo.content.senha);
    // assert
    expect(senhaIguais).toStrictEqual(true);

    await Usuario.excluir(usuarioSalvo.content.id);
  });
  //Cenário 2: Não pode ser cadastrado um usuário com e-mail duplicado;
  it('Não pode ser cadastrado um usuário com e-mail duplicado', async () => {
    const usuarioMock = {
      nome: 'Raphael',
      email: 'teste@gmail.com',
      senha: '123456',
    };

    const usuarioSave = authService.cadastrarUsuario(usuarioMock);

    await expect(usuarioSave).rejects.toThrowError('O email já esta cadastrado!');
  });
  //Cenário 3: Ao cadastrar um usuário deve ser retornada uma mensagem informando que o cadastro foi realizado;
  it('Ao cadastrar um usuário deve ser retornada uma mensagem informando que o usuário foi cadastrado', async () => {
    const data = {
      nome: 'John Doe',
      email: 'johndoe@example.com',
      senha: 'senha123',
    };

    const resultado = await authService.cadastrarUsuario(data);

    expect(resultado.message).toEqual('usuario criado');

    await Usuario.excluir(resultado.content.id);
  });
  //Cenário 4: Ao cadastrar um usuário, validar o retorno das informações do usuário.
  it('Ao cadastrar um usuário, validar o retorno das informações do usuário', async () => {
    const data = {
      nome: 'John Doe',
      email: 'johndoe@example.com',
      senha: 'senha123',
    };

    const resultado = await authService.cadastrarUsuario(data);

    expect(resultado.content).toMatchObject(data);

    await Usuario.excluir(resultado.content.id);
  });
});
