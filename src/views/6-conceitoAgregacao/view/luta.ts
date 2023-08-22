import { Lutador } from "./lutador"

export class Luta{
    //atributos
    private _desafiante!: Lutador; // Relacionamento do tipo Agregação
    private _desafiado!: Lutador; // quando uma classe tem um atributo com o tipo de outra classe
    private _rounds!: number;
    private _aprovada!: boolean;

    //metodos
    marcarLuta(l1: Lutador, l2: Lutador): string{ 
        if((l1.getcategoria() === l2.getcategoria()) && l1 !== l2){
            this.setAprovada(true)
            this.setDesafiado(l1)
            this.setDesafiante(l2)
            return `Luta Marcada entre ${l1.getnome()} e ${l2.getnome()}`
        }else{
            this.setAprovada(false)
            return 'Luta não foi marcada!'
        }
    }

    lutar(): string {
        if (this.getAprovada()) {
            const ap1 = this.getDesafiado().apresentar();
            const ap2 = this.getDesafiante().apresentar();
            const vencedor = Math.floor(Math.random() * 3); // gera numero aleatorio
            switch (vencedor) {
                case 0:
                    this.getDesafiado().empatarLuta();
                    this.getDesafiante().empatarLuta();
                    return `${ap1} \n
                            ${ap2} \n
                            resultado final Empate`;
                case 1:
                    this.getDesafiado().perderLuta();
                    this.getDesafiante().ganharLuta(false); // se foi por nocaute
                    return `${ap1} \n
                            ${ap2} \n
                            o Vencedor Foi: ${this.getDesafiante().getnome()}`;
                case 2:
                    this.getDesafiado().ganharLuta(false);
                    this.getDesafiante().perderLuta();
                    return `${ap1} \n
                            ${ap2} \n
                            o Vencedor Foi: ${this.getDesafiado().getnome()}`;
                default:
                    return '';
            }
        } else {
            return 'A luta não foi Marcada!';
        }
    }

    getDesafiante(): Lutador {
        return this._desafiante;
    }

    setDesafiante(novoDesafiante: Lutador) {
        this._desafiante = novoDesafiante;
    }

    getDesafiado(): Lutador {
        return this._desafiado;
    }

    setDesafiado(novoDesafiado: Lutador) {
        this._desafiado = novoDesafiado;
    }

    getRounds(): number {
        return this._rounds;
    }

    setRounds(novosRounds: number) {
        this._rounds = novosRounds;
    }

    getAprovada(): boolean {
        return this._aprovada;
    }

    setAprovada(novaAprovacao: boolean) {
        this._aprovada = novaAprovacao;
    }
}