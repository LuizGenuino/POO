<template>
    <div>
        <p>Instancia a classe Caneta com construtor recebendo 3 parametros</p>
        <code>
            const c1 = new Caneta('BIC', 'azul', 1.5); // o metodo contrutor foi feito com tres parametros <br>
            this.result = "Caneta: " + c1.getModelo() + " | Ponta: " + c1.getPonta(); // metodos getters traz os dados <br>
            //this.result += "Caneta: " + c1.modelo ---- nesse contexto não é possivel pos o atributo é privado <br>
            this.result += " | cor: " + c1.cor + " | tampada: " + c1.tampada // como os atributos estão publico é possivel trazer o valor <br>
              </code>
        <p>exibindo o valor da variavel resultado: </p>
        <div class="terminal">
            <p>{{ result }}</p>
        </div>
        <br><br>

        <p>Altera os atributos usando os metodos Setters</p>
        <code>
            c1.setModelo('BIC Cristal'); // metodos setters faz as alterações dos atributos privados, protegidos ou publicos <br>
            c1.cor = "Verde"; // como o atributo é publico é possivel alterar<br>
            c1.destampar();<br>
            this.rabisca = "Caneta: " + c1.getModelo() + " | Ponta: " + c1.getPonta(); // metodos getters traz os dados<br>
            this.rabisca += " | cor: " + c1.cor + " | tampada: " + c1.tampada; // como os atributos estão publico é possivel trazer o valor<br>
              </code>
        <p>exibindo o valor da variavel resultado: </p>
        <div class="terminal">
            <p>{{ rabisca }}</p>
        </div>
    </div>
</template>
        
<script lang="ts">
import { Caneta } from './caneta';

export default {
    name: "Visibilidade",
    data() {
        return {
            result: '',
            rabisca: '',
        };
    },
    created() {
        this.inicia(); // Chama a função inicia() assim que o componente é criado
    },
    methods: {
        inicia(): void { // Adicione a anotação de tipo para a função inicia()
            /* Instancia a classe Caneta para criar o Objeto c1 */
            const c1 = new Caneta('BIC', 'azul', 1.5); // o metodo contrutor foi feito com tres parametros
            this.result = "Caneta: " + c1.getModelo() + " | Ponta: " + c1.getPonta(); // metodos getters traz os dados
            //this.result += "Caneta: " + c1.modelo ---> nesse contexto não é possivel pos o atributo é privado
            this.result += " | cor: " + c1.cor + " | tampada: " + c1.tampada // como os atributos estão publico é possivel trazer o valor
            c1.setModelo('BIC Cristal') // metodos setters faz as alterações dos atributos privados, protegidos ou publicos
            c1.cor = "Verde";
            c1.destampar();
            this.rabisca = "Caneta: " + c1.getModelo() + " | Ponta: " + c1.getPonta(); // metodos getters traz os dados
            this.rabisca += " | cor: " + c1.cor + " | tampada: " + c1.tampada // como os atributos estão publico é possivel trazer o valor


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
  
  