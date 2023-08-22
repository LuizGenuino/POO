<template>
    <div>
        <p>Instancia a classe Caneta para criar o Objeto c1 e chama seus atributos e metodos</p>
        <code>
            const c1 = new Caneta();<br>
            c1.modelo = "BIC Cristal"<br>
            c1.cor = "Azul";<br>
            c1.ponta = 0.5;<br>
            c1.carga = 90;<br>
            c1.tampar();<br>
            this.resultado = c1.status();<br>
            </code>
        <p>exibindo o valor da variavel resultado: </p>
        <div class="terminal">
            <p>{{ result }}</p>
        </div>
        <br><br>

        <p>Tenta Rabiscar</p>
        <code>
            this.resultado = c1.rabiscar();
        </code>
        <p>exibindo o valor da variavel resultado: </p>
        <div class="terminal">
            <p>{{ rabisca }}</p>
        </div>
        <br><br>

        <p>Chama o metodo destampar e tenta rabiscar de novo</p>
        <code>
            c1.destampar();<br>
            this.resultado = c1.rabiscar();<br>
        </code>
        <p>exibindo o valor da variavel resultado: </p>
        <div class="terminal">
            <p>{{ rabisca2 }}</p>
        </div>
    </div>
</template>
      
<script lang="ts">
import { Caneta } from './caneta';

export default {
    name: "Conceitos",
    data() {
        return {
            result: '',
            rabisca: '',
            rabisca2: '',
        };
    },
    created() {
        this.inicia(); // Chama a função inicia() assim que o componente é criado
    },
    methods: {
        inicia() : void {
            /* Instancia a classe Caneta para criar o Objeto c1 */
            const c1 = new Caneta();
            c1.modelo = "BIC Cristal"
            c1.cor = "Azul";
            c1.ponta = 0.5;
            c1.carga = 90;
            /* c1.tampada = true; */
            c1.tampar();
            this.result = c1.status();
            this.rabisca = c1.rabiscar();
            c1.destampar();
            this.rabisca2 = c1.rabiscar();
        }
    }
};
</script>
      
<style scoped>
code {
    margin: 0 auto;
    max-width: 700px;
    width: 90vw;
    display: block;
    text-align: start;
    padding: 10px;
    color: white;
    background-color: black;
    font-size: 0.9rem;
}

p {
    font-size: 1rem;
}

.terminal {
    margin: 0 auto;
    max-width: 700px;
    width: 90vw;
    display: block;
    text-align: start;
    padding: 10px;
    border: solid 2px black;
}
</style>
  