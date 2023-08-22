export class ContaBanco {
  private numConta!: number;
  protected tipo!: string;
  private dono!: string;
  private saldo: number;
  private status: boolean;

  constructor() {
    this.saldo = 0;
    this.status = false;
  }

  estado(): string {
    const estadoString: string[] = [];
    estadoString.push("Conta: " + this.getNumConta());
    estadoString.push("Tipo: " + this.getTipo());
    estadoString.push("Dono: " + this.getDono());
    estadoString.push("Saldo: " + this.getSaldo());
    estadoString.push("Status: " + this.getStatus());

    return estadoString.join('\n');
  }

  abrirConta(num: number, t: string, n: string): void {
    this.setNumConta(num);
    this.setTipo(t);
    this.setDono(n);
    this.setStatus(true);
    if (t === "CC") {
      this.setSaldo(50);
    } else {
      this.setSaldo(100);
    }
  }

  fecharConta(): void {
    if (this.getSaldo() === 0) {
      this.setStatus(false);
    } else {
      console.log("Erro! Conta possui Saldo ou está em Débito");
    }
  }

  depositar(v: number): void {
    if (this.getStatus()) {
      this.setSaldo(this.getSaldo() + v);
    } else {
      console.log("Erro! A Conta está Fechada");
    }
  }

  sacar(v: number): void {
    if (this.getStatus()) {
      if (this.getSaldo() >= v) {
        this.setSaldo(this.getSaldo() - v);
      } else {
        console.log("Erro! Saldo Insuficiente");
      }
    } else {
      console.log("Erro! A Conta está Fechada");
    }
  }

  pagarMensal(): void {
    let v: number;
    if (this.getTipo() === "CC") {
      v = 10;
    } else {
      v = 20;
    }
    if (this.getStatus()) {
      this.setSaldo(this.getSaldo() - v);
    } else {
      console.log("Erro! A Conta está Fechada");
    }
  }

  // Metodos getters e setters
  setNumConta(n: number): void {
    this.numConta = n;
  }
  getNumConta(): number {
    return this.numConta;
  }

  setTipo(n: string): void {
    this.tipo = n;
  }
  getTipo(): string {
    return this.tipo;
  }

  setDono(n: string): void {
    this.dono = n;
  }
  getDono(): string {
    return this.dono;
  }

  setSaldo(n: number): void {
    this.saldo = n;
  }
  getSaldo(): number {
    return this.saldo;
  }

  setStatus(n: boolean): void {
    this.status = n;
  }
  getStatus(): boolean {
    return this.status;
  }
}
