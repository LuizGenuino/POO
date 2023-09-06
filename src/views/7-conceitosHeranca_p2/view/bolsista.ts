import { Aluno } from "./aluno";

export class Bolsista extends Aluno {
    private _bolsa!: number;

    public renovarBolsa(): string {
        return "Renovando Bolsa de "+ this.getNome() 
        //getNome foi herdado da classe aluno que é herdado da classe pessoa -> aRb e bRc logo aRc
    }

    //metodo sobreposto de aluno
    public pagarMensalidade(): string {
        return this.getNome(), "é Bolsita e recebeu ", this.getBolsa(), "% de desconto"
    }

    public getBolsa(): number {
        return this._bolsa;
    }
    public setBolsa(value: number) {
        this._bolsa = value;
    }

}