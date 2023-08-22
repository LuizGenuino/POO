public class Caneta {
   private String modelo;
   private float ponta;
   public String cor;
   public boolean tampada;

   public Caneta(String m, String c, float p) { // metodo construtor geralmente tem o mesmo nome da classe
    // tudo dentro do metodo construtor é executado ao instanciar a classe (criar objeto)
    this.tampar(); 
    this.setModelo(m); // possivel chamar metodos dentro de outros metodos
    this.cor = c;
    this.ponta = p; //como esta dentro da classe posso alterar o atributo privado
   }

   public String getModelo() {
    return this.modelo;
   }

   public void setModelo(String m) {
    this.modelo = m;
   }

   public float getPonta() {
    return this.ponta;
   }

   public void setPonta(float p) {
    this.ponta = p;
   }

   public void tampar(){
        this.tampada = true;
   }


   public void destampar(){
    this.tampada = false;
}
}