import Mamifero from "./mamiferos";

export default class Canguru extends Mamifero{
    public locomover(): string {
        return 'Pulando'
    }
    public emitirSom(): string {
        return 'Som de Canguru'
    }
    /**
    Polimorfismo por sobre carga é quando criamos dois metodos
    com o mesmo nome mas com assinaturas diferente (nome e/ou tipo de parametros difentes)
    o typeScript não possui suporte para isso!
    
    public reacao(): string {
        return 'Som de Canguru'
    }
    public reacao(acao: string): string {
        return 'Som de Canguru'
    }
     */
    
}