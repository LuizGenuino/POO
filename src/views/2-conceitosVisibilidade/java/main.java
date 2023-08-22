public class Principal {
    public static void main(String[] args) {
        /* Instancia a classe Caneta para criar o Objeto c1 */
        Caneta c1 = new Caneta();
        c1.modelo = "BIC"; // modelo foi definido como publico na classe
        c1.cor = "azul"; // cor foi definido como publico na classe 
      //c1.ponta = 0.5f; //não é possivel fazer isso pois ponta foi definida como private
        c1.carga = 80 /*  o metodo protegido funciona pelo fato de estarem no mesmo 
        pacote(pastas) e esta sendo usado na mesma classes que criou o objeto (no java) 
        em outras liguagens apenas subclasses e classes herdadas podem acessar*/
        c1.status();
    }
}