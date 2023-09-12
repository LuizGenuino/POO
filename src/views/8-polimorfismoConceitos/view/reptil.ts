import Animal from "./animal";

export default class Reptil extends Animal{
    private _corEscama!: string;

    public locomover(): string {
        return 'Rastejando'
    }
    public alimentar(): string {
        return 'Comendo Vegetais'
    }
    public emitirSom(): string {
        return 'Som de Reptil'
    }

    public getCorEscama(): string {
        return this._corEscama;
    }
    public setCorEscama(value: string) {
        this._corEscama = value;
    }
}