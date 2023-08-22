export interface Controlador {
    //Metodos Abstratos são declarados mas não implementados na interface
    ligar(): string;
    desligar(): string;
    abrirMenu():string;
    fecharMenu(): string;
    aumentarVolume():string;
    diminuirVolume(): string;
    ligarMudo(): string;
    desligarMudo(): string;
    play(): string;
    pouse(): string;
}