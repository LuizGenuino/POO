<template>
    <div>
        
    </div>
</template>
        
<script lang="ts">
import { Luta } from './luta';
import { Lutador } from './lutador';

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
            const lutadores: Lutador[] = new Array<Lutador>(4); // estou criando um array de 4 possição do tipo Lutador
            console.log(lutadores);
            lutadores[0] = new Lutador('Anderson', 'Brasil', 31, 1.85, 85, 14, 5, 1, 2)
            lutadores[1] = new Lutador('David', 'EUA', 41, 1.75, 80, 10, 2, 3, 1)
            console.log(lutadores[0].apresentar());
            
            const combate = new Luta()
            console.log( combate.marcarLuta(lutadores[0], lutadores[1]));
            console.log(combate.lutar()); // uma vantagem da agregação é que os valores dos objetos é alterado dentro da classe
            console.log(lutadores[0].apresentar()); // valores modificados
            console.log(lutadores[1].apresentar());
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
  
  