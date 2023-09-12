export default abstract class Animal{
    private _peso!: Number
    private _idade!: Number
    private _membros!: Number
  

    public abstract locomover(): string
    public abstract alimentar(): string
    public abstract emitirSom(): string

    public getPeso(): Number {
        return this._peso
    }
    public setPeso(value: Number) {
        this._peso = value
    }

    public getMembros(): Number {
        return this._membros
    }
    public getIdade(): Number {
        return this._idade
    }

    public setIdade(value: Number) {
        this._idade = value
    }
    public setMembros(value: Number) {
        this._membros = value
    }
}