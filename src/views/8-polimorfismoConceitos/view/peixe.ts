import Animal from "./animal";

export default class Peixe extends Animal{
    private _corEscama!: string;

    public locomover(): string {
        return 'Nadando'
    }
    public alimentar(): string {
        return 'Comendo Substancias'
    }
    public emitirSom(): string {
        return 'Peixe não faz som'
    }

    public soltarBolhas(): string {
        return 'Soltando Bolhas'
    }

    public getCorEscama(): string {
        return this._corEscama;
    }
    public setCorEscama(value: string) {
        this._corEscama = value;
    }
}