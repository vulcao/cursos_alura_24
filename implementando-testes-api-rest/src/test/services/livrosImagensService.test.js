// É obrigatório informar o id do livro a qual a imagen é vinculada
// O sistema só permite imagens com extensão .jpg e .png
// A imagem deve ter no máximo 5000kb
// O sitema só deve salvar a imagem vinculada ao livro caso todos os dados estejam corretos

import { describe, expect } from "@jest/globals";
import LivrosImagensService from "../../services/livrosImagensService.js";

const livrosImagensService = new LivrosImagensService();

describe('Testando o livrosImagensService.cadastrarImagem', () => {
  it('É obrigatório informar o id do livro a qual a imagen é vinculada', async () => {
    // Arrange
    const imagemMock = {
      file: {
        buffer: {
          "type": "Buffer",
          "data": [0, 1, 0, 1]
        },
        originalname: 'imagem.jpg',
        mimetype: 'image/jpg',
        size: 4000,
      },
      body: {
        livroId: 1,
      },
    };
    // Act
    const imagemSalva = await livrosImagensService.cadastrarImagem(imagemMock);
    // Assert
    expect(imagemSalva.content.livro_id).toBe(imagemMock.body.livroId);
    expect(imagemSalva.content.size).toBeLessThan(5000);

    // remove registro de teste
    await livrosImagensService.excluirImagemLivro(imagemSalva.content.id);
  });

  it('O sistema só permite imagens com extensão .jpg e .png', async () => {
    // Arrange
    const imagemMock = {
      file: {
        buffer: {
          "type": "Buffer",
          "data": [0, 1, 0, 1]
        },
        originalname: 'imagem.gif',
        mimetype: 'image/gif',
        size: 4000,
      },
      body: {
        livroId: 1,
      },
    };
    // Act
    const imagemSalva = livrosImagensService.cadastrarImagem(imagemMock);
    // Assert
    await expect(imagemSalva).rejects.toThrowError(`O formato ${imagemMock.file.mimetype} não é permitido.`);
    
  });

  it('O sistema só permite imagens ate 5000kb', async () => {
    const imagemMock = {
      file: {
        originalname: 'curso node.png',
        mimetype: 'image/png',
        size: 5001,
        buffer: {
            "type":"Buffer",
            "data": [0, 1, 0, 1]
        }
      },
      body: {
        livroId: 1
      }
    };
    const imagemSave = livrosImagensService.cadastrarImagem(imagemMock);
    await expect(imagemSave).rejects.toThrowError('O limite para upload de imagem é de 5000kb.');
  });
  
});