export class Pessoa{
    private _nome!: string   
    private _sexo!: string
    private _idade!: number

    public fazerAniv(): void {
        this.setIdade(this.getIdade()+1)
    }

    public getNome(): string {
        return this._nome
    }
    public setNome(value: string):void {
        this._nome = value
    }

    public getIdade(): number {
        return this._idade
    }
    public setIdade(value: number):void {
        this._idade = value
    }
    
    public getSexo(): string {
        return this._sexo
    }
    public setSexo(value: string):void {
        this._sexo = value
    }


}