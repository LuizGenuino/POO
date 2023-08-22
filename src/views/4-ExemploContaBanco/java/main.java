public class Principal {
    public static void main(String[] args) {
        ContaBanco p1 = new ContaBanco();
        p1.estado() //como possui metodo contrutor ja possui dados iniciais
        p1.abrirConta(123, "CC", "Marcos");
        p1.estado();
        p1.depositar(100f);
        p1.estado();
        p1.sacar(50f);
        p1.fecharConta();
        p1.sacar(100f);
        p1.fecharConta();

        ContaBanco p2 = new ContaBanco();
        p2.estado() //como possui metodo contrutor ja possui dados iniciais
        p2.abrirConta(413, "CP", "Maria");
        p2.estado();
    }
}