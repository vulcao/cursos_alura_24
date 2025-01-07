import Carrinho from "../carrinho";
import Item from "../item";

describe("Testes do Carrinho", () => {

    it("Deve criar um carrinho vazio", () => {
        const carrinho = new Carrinho();
        expect(carrinho.itens.length).toBe(0);
        expect(carrinho.subtotal).toBe(null);
        expect(carrinho.frete).toBe(null);
        expect(carrinho.total).toBe(null);
    });

    it("Deve adicionar um item ao carrinho", () => {
        const carrinho = new Carrinho();
        const item = new Item(1, "Banana", 7, 10);
        const item2 = new Item(1, "Beterraba", 3, 5);
        expect(typeof carrinho).toBe("object");
        carrinho.adiciona(item);
        carrinho.adiciona(item2);

        expect(carrinho.itens.length).toBe(2);
        expect(carrinho.itens[0]).toBe(item);
        expect(carrinho.itens[1]).toBe(item2);

        expect(carrinho.itens).toContain(item);
        expect(carrinho.itens).toContain(item2);
    });

    it('Deve ter a propriedade "Total" na inicialização', () => {
        const carrinho = new Carrinho();
        expect(carrinho).toHaveProperty('total');
    });

    it('Deve lancar erro ao finalizar a compra com carrinho vazio', () => {
        const carrinho = new Carrinho();
        expect(() => carrinho.finalizaCompra()).toThrow('Carrinho de compras vazio');
    });

    it('Deve adicionar o frete', () => {
        const carrinho = new Carrinho();
        carrinho.adicionaFrete(10);
        expect(carrinho.frete).toBe(10);
    });

    it('Deve calcular o total da compra', () => {
        const item = new Item("Banana", 7, 10);
        const item2 = new Item("Beterraba", 3, 5);
        const carrinho = new Carrinho();
        carrinho.adiciona(item);
        carrinho.adiciona(item2);
        carrinho.adicionaFrete(10);
        expect(carrinho.calculaTotal()).toBe(95);
    });

    it('Deve finalizar as compras', () => {
        const item = new Item("Banana", 7, 10);
        const item2 = new Item("Beterraba", 3, 5);
        const carrinho = new Carrinho();
        carrinho.adiciona(item);
        carrinho.adiciona(item2);
        carrinho.adicionaFrete(10);
        expect(carrinho.finalizaCompra()).toStrictEqual({
            subtotal: 85,
            frete: 10,
            total: 95
        })
    });
});