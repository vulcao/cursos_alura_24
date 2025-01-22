import app from "../../app";
import request from "supertest";

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe("GET em /editoras", () => {
  it("Deve retornar uma lista de editoras", async () => {
    const resposta = await request(app)
      .get("/editoras")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(resposta.body[0].email).toEqual("e@e.com");
  });
});

let idEditoraCriada;
describe("POST em editoras/id", () => {
  it("Deve adicionar uma nova editora", async () => {
    const resposta = await request(app)
      .post("/editoras")
      .send({
        nome: "CDC",
        cidade: "SP",
        email: "s@s.com",
      })
      .expect(201);

    idEditoraCriada = resposta.body.content.id;
  });

  it("Deve nao adicionar nada ao passar o body vazio", async () => {
    const resposta = await request(app).post("/editoras").send({}).expect(400);

    // expect(resposta.error.text.message).toEqual("Corpo da requisição vazio");
  });
});

describe("GET em editoras/id", () => {
  it("Deve retornar uma editora por id", async () => {
    await request(app).get(`/editoras/${idEditoraCriada}`).expect(200);
  });
});

describe("PUT em /editoras/id", () => {
  test.each([
    ["Nome", { nome: "Novo Nome" }],
    ["Cidade", { cidade: "Nova Cidade" }],
    ["Email", { email: "novo@email.com" }],
  ])("Deve atualizar o campo %s na editora", async (chave, param) => {
    await request(app)
      .put(`/editoras/${idEditoraCriada}`)
      .send(param)
      .expect(204);
  });
});

describe("DELETE em editoras/id", () => {
  it("Deve deletar a editora adicionada", async () => {
    const resposta = await request(app)
      .delete(`/editoras/${idEditoraCriada}`)
      .expect(200);

    expect(resposta.body.message).toEqual("editora excluída");
  });
});

describe("GET em editoras/id não existente", () => {
  it("Deve retornar not found", async () => {
    const resposta = await request(app)
      .get(`/editoras/${idEditoraCriada}`)
      .expect(404);

    expect(resposta.body.message).toEqual("id não encontrado");
  });
});

describe("DELETE em editoras/id não existente", () => {
  it("Deve retornar not found", async () => {
    const resposta = await request(app)
      .delete(`/editoras/${idEditoraCriada}`)
      .expect(404);

    expect(resposta.body.message).toEqual("id não encontrado");
  });
});
