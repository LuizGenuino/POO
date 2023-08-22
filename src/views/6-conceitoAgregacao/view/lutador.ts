export class Lutador {
    //atributos
    private nome: string
    private nacionalidade: string
    private idade: number
    private altura: number
    private peso!: number
    private categoria!: string
    private vitorias: number
    private nocautes: number
    private derrotas: number
    private empates: number

    //construtor
    constructor(nome: string,
        nacionalidade: string,
        idade: number,
        altura: number,
        peso: number,
        vitorias: number,
        nocautes: number,
        derrotas: number,
        empates: number) {
        this.nome = nome
        this.nacionalidade = nacionalidade
        this.idade = idade
        this.altura = altura
        this.setPeso(peso)
        this.vitorias = vitorias
        this.nocautes = nocautes
        this.derrotas = derrotas
        this.empates = empates

    }
    //metodos
    apresentar(): string {
        return `
            Nome: ${this.getnome()}\n
            Nacionalidade: ${this.getnacionalidade()}\n
            Possui ${this.getidade()} anos de idade\n
            Tem ${this.getaltura()} metros de altura\n
            Pesando ${this.getpeso()} Kg\n
            ${this.getvitorias()} vitorias\n
            ${this.getnocautes()} vitorias por nocaute\n
            ${this.getderrotas()} derrotas\n
            ${this.getempates()} empates\n
        `
    }

    status(): string {
        return `
        Nome: ${this.getnome()}\n
        Pesando ${this.getpeso()} Kg\n
        ${this.getvitorias()} vitorias\n
        ${this.getderrotas()} derrotas\n
        ${this.getempates()} empates\n

    `
    }

    ganharLuta(nocautes: boolean): string {
        this.setvitorias(this.getvitorias() + 1)
        if (nocautes) {
            this.setnocautes(this.getnocautes() + 1)
        }
        return `Parabens! agora são ${this.getvitorias()} vitorias sendo ${this.getnocautes()} por nocaute`
    }

    perderLuta(): string {
        this.setderrotas(this.getderrotas() +1)
        return `Com essa são ${this.getderrotas()} derrotas`
    }

    empatarLuta(): string {
        this.setempates(this.getempates() +1)
        return `Com essa são ${this.getempates()} empates`
    }

    setPeso(peso: number): void {
        this.peso = peso
        this.setcategoria(peso)
    }

    // Getters
    getnome(): string {
        return this.nome;
    }

    getnacionalidade(): string {
        return this.nacionalidade;
    }

    getidade(): number {
        return this.idade;
    }

    getaltura(): number {
        return this.altura;
    }

    getpeso(): number {
        return this.peso;
    }

    getcategoria(): string {
        return this.categoria;
    }

    getvitorias(): number {
        return this.vitorias;
    }

    getnocautes(): number {
        return this.nocautes;
    }

    getderrotas(): number {
        return this.derrotas;
    }

    getempates(): number {
        return this.empates;
    }

    // Setters
    setnome(nome: string): void {
        this.nome = nome;
    }

    setnacionalidade(nacionalidade: string): void {
        this.nacionalidade = nacionalidade;
    }

    setidade(idade: number): void {
        this.idade = idade;
    }

    setaltura(altura: number): void {
        this.altura = altura;
    }

    setpeso(peso: number): void {
        this.peso = peso;
    }

    private setcategoria(peso: number): void {
        if (peso <= 52.2) {
            this.categoria = "Peso Invalido"
        } else if (peso <= 70.3) {
            this.categoria = "Leve"
        } else if (peso <= 83.9) {
            this.categoria = "Médio"
        } else if (peso <= 120.3) {
            this.categoria = "Pesado"
        } else {
            this.categoria = "Peso Invalido"
        }
    }

    private setvitorias(vitorias: number): void {
        this.vitorias = vitorias;
    }

    private setnocautes(nocautes: number): void {
        this.nocautes = nocautes;
    }

    private setderrotas(derrotas: number): void {
        this.derrotas = derrotas;
    }

    private setempates(empates: number): void {
        this.empates = empates;
    }

}