export class Caneta {
    /* Cria os atributos da classe */
    modelo!: string; //quando você adiciona um (!) após o nome do atributo, isso indica que o atributo é declarado como potencialmente nulo ou indefinido,
    cor!: string;
    ponta!: number;
    carga!: number;
    tampada!: boolean;

    /* Cria os métodos */
    status(): string {
        /* this. significa que você quer o valor salvo do objeto instanciado, se não colocar vai trazer o valor declarado na classe (no caso vazio) */
        return (
            "Modelo: " + this.modelo +
            "\n| Uma caneta " + this.cor +
            "\n| Ponta: " + this.ponta +
            "\n| Carga: " + this.carga +
            "\n| Está tampada? " + this.tampada
          );
    }

    rabiscar(): string {
        /*c1.tampada (se o objeto instanciado na main chama c1)*/
        /* se não tiver this, todos os objetos instanciados com essa classe têm o valor mudado */
        if (this.tampada) {
            return "Erro! A caneta está tampada";
        } else {
            return "Rabiscando alguma coisa...";
        }
    }

    tampar(): void {
        /*c1.tampada (se o objeto instanciado na main chama c1)*/
        /* se não tiver this, todos os objetos instanciados com essa classe têm o valor mudado */
        this.tampada = true;
    }

    destampar():void {
        /*c1.destampada (se o objeto instanciado na main chama c1)*/
        /* se não tiver this, todos os objetos instanciados com essa classe têm o valor mudado */
        this.tampada = false;
    }
}
