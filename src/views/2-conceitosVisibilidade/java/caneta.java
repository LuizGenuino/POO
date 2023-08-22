public class Caneta {
    /* cria os atributos da classe */
    public String modelo;
    // public - o objeto pode acessar
    public String cor;
    // private - somente a classe atual pode acessar
    private float ponta;
    // protected - somente a classe atual, classes herdadas e classes do mesmo pacote(package) podem acessar 
    protected int carga;
    protected boolean tampada;

    /*cria os metodos */
    public void status() {
        /* this. significa que voce quer o valor salvo do objeto instaciado, se não colocar vai trazer o valor declarado na classe (no caso vazio) */
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Uma caneta " + this.cor);
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Carga: " + this.carga);
        System.out.println("esta tampada? "+ this.tampada)
    }

    public void rabiscar() {
        /*c1.tampada (se o objeto instanciado na main chama c1)*/
        /* se não tiver this, todos os objetos instanciados com essa classes tem o valor mudado */
        if(this.tampada == true){
            System.out.println("Erro! a caneta da Tampada")
        }else {
            System.out.println("Rabiscando...")
        }
    }

    protected void tampar() {
        /*c1.tampada (se o objeto instanciado na main chama c1)*/
        /* se não tiver this, todos os objetos instanciados com essa classes tem o valor mudado */
        this.tampada = true
    }

    protected void destampar() {
         /*c1.destampada (se o objeto instanciado na main chama c1)*/
          /* se não tiver this, todos os objetos instanciados com essa classes tem o valor mudado */
        this.tampada = false
    }
}