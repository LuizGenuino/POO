import { Pessoa } from "./pessoa"

export class Professor extends Pessoa{ // Henda caracteristicas da classe Pessoa:
// Agora a classe Professor Possui todas os Atributos e Metodos PUBLICOS e PROTEGIDOS da classe Pessoa
    private _especialidade!: string
    private _salario!: string

    public aumento(aumento: number): void {
        this.setSalario(this.getSalario() + aumento)
    }

    public getEspecialidade(): string {
        return this._especialidade
    }
    public setEspecialidade(value: string): void {
        this._especialidade = value
    }
   
    public getSalario(): string {
        return this._salario
    }
    public setSalario(value: string): void {
        this._salario = value
    }
}