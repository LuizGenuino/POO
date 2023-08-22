<template>
    <div>
        <p>Instancia a classe ControleRemoto com construtor sem parametros</p>
        <code>
            const c = new ControleRemoto();<br>
            this.result = c.ligar();<br>
        </code>
        <p>exibindo o valor da variavel resultado: </p>
        <div class="terminal">
            <p>{{ result }}</p>
        </div>
        <br><br>

        <p>chama o metodo abrirMenu</p>
        <code>
             this.result = c.abrirMenu();<br>
        </code>
        <p>exibindo o valor da variavel resultado: </p>
        <div class="terminal">
            <p>{{ result1 }}</p>
        </div>
        <br><br>

        <p>chama o metodo aumentarVolume </p>
        <code>
            this.result = c.aumentarVolume();<br>
        </code>
        <p>exibindo o valor da variavel resultado: </p>
        <div class="terminal">
            <p>{{ result2 }}</p>
        </div>
        <br><br>

        <p>chama o metodo diminuirVolume </p>
        <code>
            
            this.result = c.diminuirVolume();<br>
            this.result = c.diminuirVolume();<br>
        </code>
        <p>exibindo o valor da variavel resultado: </p>
        <div class="terminal">
            <p>{{ result3 }}</p>
        </div>
        <br><br>

        <p>chama o metodo desligar e depois o metodo aumentarVolume </p>
        <code>
            
            this.result = c.desligar();<br>
            this.result = c.aumentarVolume();<br>
        </code>
        <p>exibindo o valor da variavel resultado: </p>
        <div class="terminal">
            <p>{{ result4 }}</p>
        </div>
        <br><br>
    </div>
</template>
        
<script lang="ts">
import { ControleRemoto } from './classControleRemoto';

export default {
    name: "Encapsulamento",
    data() {
        return {
            result: '',
            result1: '',
            result2: '',
            result3: '',
            result4: '',
        };
    },
    created() {
        this.inicia(); // Chama a função inicia() assim que o componente é criado
    },
    methods: {
        inicia(): void { // Adicione a anotação de tipo para a função inicia()
            const c = new ControleRemoto();
            this.result = c.ligar();

            this.result1 = c.abrirMenu();

            this.result2 = c.aumentarVolume();

            this.result3 = c.diminuirVolume();
            this.result3 = c.diminuirVolume();

            this.result4 = c.desligar();
            this.result4 = c.aumentarVolume();

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
  
  