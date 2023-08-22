public class ContaBanco(){
    public int numConta;
    protected String tipo;
    private String dono;
    private float saldo;
    private boolean status;
    // metodo contrutor
    public ContaBanco(){
        this.saldo = 0; //this.saldo ou this.setSaldo
        this.status = false; //this.saldo ou this.setSaldo
    } 
    // metodos personalizado
    public void estado(){
        System.out.println("Conta: " + this.getNumConta())
        System.out.println("Tipo: " + this.getTipo())
        System.out.println("Dono: " + this.getDono())
        System.out.println("Saldo: " + this.getSaldo())
        System.out.println("Status: " + this.getStatus())
    }
    public void abrirConta(int num, String t, String n){
        this.setNumConta(num);
        this.setTipo(t);
        this.setDono(n);
        this.setStatus(true);
        if(t == "CC"){
            this.setSaldo(50);
        }else{
            this.setSaldo(100);
        }
    }
    public void fecharConta(){
        if(this.getSaldo == 0){
            this.setStatus(false);
        }else{
            System.out.println("Erro! Conta possui Saldo ou está em Debito");
            // não é indicado exibir textos em metodos
        }
    }
    public void depositar(float v){
        if(this.getStatus()) {
            this.setSaldo(this.getSaldo() + v);
            //this.saldo = this.saldo + v;
        }else{
            System.out.println("Erro! A Conta está Fechada");
        }
    }
    public void sacar(float v){
        if(this.getStatus()) {
            if(this.getSaldo() >= v){
                this.setSaldo(this.getSaldo - v);
                 //this.saldo = this.saldo - v;
            }else{
                System.out.println("Erro! Saldo Insuficiente"); 
            }
        }else{
            System.out.println("Erro! A Conta está Fechada");
        }
    }
    public void pagarMensal(){
        int v;
        if(this.getTipo() == "CC"){
            v = 10;
        }else{
            v = 20;
        }
        if(this.getStatus()){
            this.setSaldo(this.getSaldo - v);
        }else{
            System.out.println("Erro! A Conta está Fechada"); 
        }
    }

    //metodos getters e setters
    public void setNumConta(int n){
        this.numConta = n;
    }
    public void getNumConta(){
        return this.numConta;
    }

    public void setTipo(String n){
        this.tipo = n;
    }
    public String getTipo(){
        return this.tipo;
    }
    
    public void setDono(String n){
        this.dono = n;
    }
    public String getDono(){
        return this.dono;
    }

    public void setSaldo(float n){
        this.saldo = n;
    }
    public float getSaldo(){
        return this.saldo;
    }

    public void setStatus(boolean n){
        this.status = n;
    }
    public boolean getStatus(){
        return this.status;
    }
}