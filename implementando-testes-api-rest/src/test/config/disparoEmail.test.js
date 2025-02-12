// O sistema deve validar se a conexao com o sistema de disparo de email
// O sistema deve enviar um email com sucesso

import { describe, it, expect } from "@jest/globals";
import nodeMailer from "nodemailer";
import 'dotenv/config';

const transporter = nodeMailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const verificarConexao = () => new Promise((resolver, reject) => {
  transporter.verify((error, success) => {
    if (error) {
      reject(error);
    } else {
      resolver(success);
    }
  });
});

describe('Testando o envio de email', () => {
  it('Deve verificar a conexao com o servidor de email', async () => {
    const estaConectato = true;
    const validarConexao = await verificarConexao();

    expect(validarConexao).toStrictEqual(estaConectato);
  });

  it('O sistema deve enviar um email com sucesso', async () => {
    const dadosEmailMock = {
      from: '"Fred Foo" <foo@example.com>',
      to: 'teste@teste.com',
      subject: 'Aluguel de Livro',
      text: 'Olá, Raphael, você alugou o livro Harry Potter e o Cálice de Fogo por 5 dias.',
    };

    const info = await transporter.sendMail(dadosEmailMock);
    expect(info.accepted[0]).toStrictEqual([dadosEmailMock.to]);
  });
});

