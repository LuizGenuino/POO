import  Pessoa  from "./pessoa"

export class Aluno extends Pessoa{ // Henda caracteristicas da classe Pessoa:
// Agora a classe Aluno Possui todas os Atributos e Metodos PUBLICOS e PROTEGIDOS da classe Pessoa
    private _matricula!: number
    private _curso!: string

    public cancelarMatri(): void {
        this.setMatricula(0)
        this.setCurso('')
    }

    public pagarMensalidade(): string {
        return "Mensalidade foi Paga!"
    }

    public getMatricula(): number {
        return this._matricula
    }
    public setMatricula(value: number): void {
        this._matricula = value
    }
   
    public getCurso(): string {
        return this._curso
    }
    public setCurso(value: string): void {
        this._curso = value
    }
}