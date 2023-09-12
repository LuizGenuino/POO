import Animal from "./animal";

export default class Mamifero extends Animal{
    private _corPelo!: string;

    public locomover(): string {
        return 'Correndo'
    }
    public alimentar(): string {
        return 'Mamando'
    }
    public emitirSom(): string {
        return 'Som de Mamifero'
    }

    public getCorPelo(): string {
        return this._corPelo;
    }
    public setCorPelo(value: string) {
        this._corPelo = value;
    }
}