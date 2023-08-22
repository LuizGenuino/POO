public class Principal {
    public static void main(String[] args) {
      /* Instancia a classe Caneta para criar o Objeto c1 */
      Caneta c1 = new Caneta("NIC", "Preto", 1.5f); // o metodo contrutor foi feito com tres parametros
      System.out.println("Caneta: " + c1.getModelo() + "Ponta: " + c1.getPonta());
      System.out.println("cor: " + c1.cor + "tampada: " + c1.tampada);

      //modifica os valores
      c1.setModelo('BIC');
      c1.setPonta(0.5f);
      System.out.println("Caneta: " + c1.getModelo() + "Ponta: " + c1.getPonta());
      System.out.println("cor: " + c1.cor + "tampada: " + c1.tampada);
    }
}