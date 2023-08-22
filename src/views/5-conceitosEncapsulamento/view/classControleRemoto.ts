import {Controlador} from './interfaceControlador'

export class ControleRemoto implements Controlador{ // implementa uma interface ou classe abstrata trazendo todos os seus metodos para ser implementado obrigatorio 
  // uma utilidade é que qualquer classe que implementa a interface Controlador se torna do tipo Controlador (util para controlar tipos de paramentros e classes)
  // por exemplo: uma classe que implementa uma interface Comida, a classe e o objeto é considerado do tipo Comida
  // Atributos
    private volume: number;
    private ligado: boolean;
    private pausado: boolean;

    // metodos Especiais construtor é chamado ao instanciar a classe (criar um novo objeto)
    constructor(){
        this.volume = 50;
        this.ligado = false;
        this.pausado = false;
    }
    ligar(): string {
        this.setLigado(true)
        return 'TV Ligada | '
    }
    desligar(): string {
      this.setLigado(false)
      return 'TV Desligada | '
    }
    abrirMenu(): string {
        return `Ligado: ${this.ligado}  | 
                Pausado: ${this.pausado}  | 
                Volume: ${this.volume}  | `
    }
    fecharMenu(): string {
        return "Fechando Menu... | "
    }
    aumentarVolume(): string {
        if(this.getLigado()){
          this.setVolume(this.getVolume() + 10)
          return `Volume: ${this.volume}  | `
        }
        return 'Erro! TV desligada'
    }
    diminuirVolume(): string {
      if(this.getLigado()){
        this.setVolume(this.getVolume() - 10)
        return `Volume: ${this.volume}  | `
      }
      return 'Erro! TV desligada'
  }
    ligarMudo(): string {
      if(this.getLigado() && this.getVolume() > 0){
        this.setVolume(0)
        return `Volume: ${this.volume}  | `
      }
      return 'Erro! TV desligada ou no Mudo'
    }
    desligarMudo(): string {
      if(this.getLigado() && this.getVolume() === 0){
        this.setVolume(50)
        return `Volume: ${this.volume}  | `
      }
      return 'Erro! TV desligada ou não esta no Mudo'
    }
    play(): string {
      if(this.getLigado() && this.getPausado()){
        this.setPausado(false)
        return `Pausado: ${this.pausado}  | `
      }
      return 'Erro! TV desligada ou não esta Pausado'
    }
    pouse(): string {
      if(this.getLigado() && !this.getPausado()){
        this.setPausado(true)
        return `Pausado: ${this.pausado}  | `
      }
      return 'Erro! TV desligada ou esta Pausado'
    }
     // Getter e Setter para o atributo 'volume'
  private getVolume(): number {
    return this.volume;
  }

  private setVolume(novoVolume: number): void {
    if (novoVolume >= 0 && novoVolume <= 100) {
      this.volume = novoVolume;
    }
  }

  // Getter e Setter para o atributo 'ligado'
  private getLigado(): boolean {
    return this.ligado;
  }

  private setLigado(novoEstado: boolean): void {
    this.ligado = novoEstado;
  }

  // Getter e Setter para o atributo 'pausado'
  private getPausado(): boolean {
    return this.pausado;
  }

  private setPausado(novoEstado: boolean): void {
    this.pausado = novoEstado;
  }
}