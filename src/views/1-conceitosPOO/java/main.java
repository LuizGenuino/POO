public class Principal {
    public static void main(String[] args) {
        /* Instancia a classe Caneta para criar o Objeto c1 */
        Caneta c1 = new Caneta();
        c1.cor = "Azul";
        c1.ponta = 0.5f;
        /* c1.tampada = true; */
        c1.tampar();
        c1.status();
        c1.rabiscar();

        /* Instancia a classe Caneta para criar um Objeto novo c2 */
        Caneta c2 = new Caneta();
        c2.cor = "Vermelho";
        c2.ponta = 1f;
        c2.destampar();
        c2.status();
        c2.rabiscar()
    }
}