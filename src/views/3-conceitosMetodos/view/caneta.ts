export class Caneta {
    private modelo!: string;
    private ponta!: number;
    public cor!: string;
    public tampada!: boolean;
  
    constructor(m: string, c: string, p: number) {
      this.tampar();
      this.setModelo(m);
      this.cor = c;
      this.ponta = p;
      this.setTampada(true)

    }
  
    public getModelo(): string {
      return this.modelo;
    }
  
    public setModelo(m: string): void {
      this.modelo = m;
    }
  
    public getPonta(): number {
      return this.ponta;
    }
  
    public setPonta(p: number): void {
      this.ponta = p;
    }

    public getTampada(): boolean {
        return this.tampada;
      }
    
      public setTampada(b: boolean): void {
        this.tampada = b;
      }
  
    public tampar(): void {
      this.tampada = true;
    }
  
    public destampar(): void {
      this.tampada = false;
    }
  }
  