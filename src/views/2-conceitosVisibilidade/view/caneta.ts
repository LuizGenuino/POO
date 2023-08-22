export class Caneta {
    /* Cria os atributos da classe */
    public modelo!: string;
    // public - o objeto pode acessar
    public cor!: string;
    // private - somente a classe atual pode acessar
    private ponta!: number;
    // protected - somente a classe atual, classes herdadas e classes do mesmo pacote(package) podem acessar 
    protected carga!: number;
    protected tampada!: boolean;
  
    /* Cria os métodos */
    public status(): string {
        /* this. significa que você quer o valor salvo do objeto instanciado, se não colocar vai trazer o valor declarado na classe (no caso vazio) */
        return (
            "Modelo: " + this.modelo +
            "\n| Uma caneta " + this.cor +
            "\n| Ponta: " + this.ponta +
            "\n| Carga: " + this.carga +
            "\n| Está tampada? " + this.tampada
          );
    }
  
    public rabiscar(): string {
        /*c1.tampada (se o objeto instanciado na main chama c1)*/
        /* se não tiver this, todos os objetos instanciados com essa classe têm o valor mudado */
        if (this.tampada) {
            return "Erro! A caneta está tampada";
        } else {
            return "Rabiscando alguma coisa...";
        }
    }
  
    public tampar(): void {
      /*c1.tampada (se o objeto instanciado na main chama c1)*/
      /* se não tiver this, todos os objetos instanciados com essa classe têm o valor mudado */
      this.tampada = true;
    }
  
    public destampar(): void {
      /*c1.destampada (se o objeto instanciado na main chama c1)*/
      /* se não tiver this, todos os objetos instanciados com essa classe têm o valor mudado */
      this.tampada = false;
    }
  }
  