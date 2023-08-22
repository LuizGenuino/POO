<template>
    <div>
        
    </div>
</template>
        
<script lang="ts">
export { Pessoa } from './pessoa'
export { Aluno } from './aluno'
export { Professor } from './professor'

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
           const p1 = new Pessoa()
           const p2 = new Aluno()
           const p3 = new Professor()

           p1.setNome('Pedro')
           p2.setNome('Tiago') // como a classe Aluno e Professor estende (herda) a classe Pessoa
           p3.setNome('João') // ela recebe os tributos e metodos publico como o setNome
           // no entando a classe pessoa não recebe nada das suas subclasses
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
  
  