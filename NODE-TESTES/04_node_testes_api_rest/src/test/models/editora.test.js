// Testes de Unidade referente ao model Editora
import { describe, jest } from "@jest/globals";
import Editora from "../../models/editora.js";

describe("Testando o modelo Editora", () => {
  const objetoEditora = {
    nome: "EditoraTeste",
    cidade: "Belém",
    email: "teste@editora.com",
  };

  it("Deve criar um objeto Editora", () => {
    const editora = new Editora(objetoEditora);
    expect(editora).toEqual(expect.objectContaining(objetoEditora));
  });

  it.skip("Deve salvar editora no banco de dados", async () => {
    const editora = new Editora(objetoEditora);
    editora.salvar().then((dados) => {
      expect(dados.nome).toBe("EditoraTeste");
    });
  });

  it.skip("Deve salvar no banco usando sintaxe moderna", async () => {
    const editora = new Editora(objetoEditora);
    const dados = await editora.salvar();
    const retornado = await Editora.pegarPeloId(dados.id);
    expect(retornado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });

  it("Deve fazer uma chamada simulada ao BD", () => {
    const editora = new Editora(objetoEditora);
    // funcao dublê
    editora.salvar = jest.fn().mockReturnValue({
      id: 99,
      nome: "EditoraTeste",
      cidade: "Belém",
      email: "teste@editora.com",
      created_at: "2025-01-21",
      updated_at: "2025-01-21",
    });
    const retorno = editora.salvar();
    expect(retorno).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });
});
