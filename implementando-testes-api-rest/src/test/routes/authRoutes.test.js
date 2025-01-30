// O login deve possuir email e senha pra autenticar o usuário;
// O login deve validar se o usuário existe;
// O login deve validar se o email e senha são válidos;
// O login deve retornar um token de acesso;
import request from 'supertest';
import { afterEach, beforeEach, describe } from '@jest/globals';
import app from '../../app.js';

let servidor;

// inicialida o servidor
beforeEach(() => {
  const porta = 3000;
  servidor = app.listen(porta);
});

// finaliza o servidor
afterEach(() => {
  servidor.close();
});

// cria os testes
describe('Testando as rotas de autenticação (POST)', () => {
  it('O login deve possuir email e senha pra autenticar o usuário', async () => {
    // arrange
    const loginMock = {
      email: 'teste@teste.com'
    }
    // act
    // assert
    await request(servidor)
      .post('/login')
      .set('Accept', 'application/json')
      .send(loginMock)
      .expect(500)
      .expect('"A senha de usuario é obrigatório."')
  });

  it('O login deve validar se o usuário existe', async () => {
    // arrange
    const loginMock = {
      email: 'teste@teste.com',
      senha: '123456'
    }
    // act
    // assert
    await request(servidor)
      .post('/login')
      .set('Accept', 'application/json')
      .send(loginMock)
      .expect(500)
      .expect('"Usuario não cadastrado."')
  });

  it('O login deve validar se o email e senha são válidos', async () => {
    // arrange
    const loginMock = {
      email: 'raphael@teste.com.br',
      senha: 'senha-errada'
    }
    // act
    // assert
    await request(servidor)
      .post('/login')
      .set('Accept', 'application/json')
      .send(loginMock)
      .expect(500)
      .expect('"Usuario ou senha invalido."')
  });

  it('O login deve retornar um token de acesso', async () => {
    // arrange
    const loginMock = {
      email: 'raphael@teste.com.br',
      senha: '123456'
    }
    // act
    const resposta = await request(servidor)
      .post('/login')
      .set('Accept', 'application/json')
      .send(loginMock)
      .expect(201)
    // assert
    expect(resposta.body.message).toBe('Usuario conectado');
    expect(resposta.body).toHaveProperty('accessToken');

  });
});

describe('Testando as rotas de cadastro de usuário (POST)', () => {
  it('O cadastro deve possuir nome, email e senha', async () => {
    // arrange
    const cadastroMock = {
      nome: 'Rafael',
      email: 'raphael@teste.com.br'
    }
    // act
    const usuarioSalvo = await request(servidor)
      .post('/cadastrar')
      .set('Accept', 'application/json')
      .send(cadastroMock)
      .expect(500)
    // assert
    expect(usuarioSalvo.text).toBe('"Senha é obrigatória."');
  });
});