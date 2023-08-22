public class Caneta {
    /* cria os atributos da classe */
    String modelo;
    String cor;
    float ponta;
    int carga;
    boolean tampada;

    /*cria os metodos */
    void status() {
        /* this. significa que voce quer o valor salvo do objeto instaciado, se não colocar vai trazer o valor declarado na classe (no caso vazio) */
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Uma caneta " + this.cor);
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Carga: " + this.carga);
        System.out.println("esta tampada? "+ this.tampada)
    }

    void rabiscar() {
        /*c1.tampada (se o objeto instanciado na main chama c1)*/
        /* se não tiver this, todos os objetos instanciados com essa classes tem o valor mudado */
        if(this.tampada == true){
            System.out.println("Erro! a caneta da Tampada")
        }else {
            System.out.println("Rabiscando...")
        }
    }

    void tampar() {
        /*c1.tampada (se o objeto instanciado na main chama c1)*/
        /* se não tiver this, todos os objetos instanciados com essa classes tem o valor mudado */
        this.tampada = true
    }

    void destampar() {
         /*c1.destampada (se o objeto instanciado na main chama c1)*/
          /* se não tiver this, todos os objetos instanciados com essa classes tem o valor mudado */
        this.tampada = false
    }
}