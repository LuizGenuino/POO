<template>
    <div>
        
    </div>
</template>
        
<script lang="ts">
import { Pessoa } from './pessoa'
import { Aluno } from './aluno'

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

           p1.setNome('Pedro')
           p2.setNome('Tiago') // como a classe Aluno e Professor estende (herda) a classe Pessoa ela recebe os tributos e metodos publico
           p2.setMatricula(1233) // utilizando um metodo da propria classe aluno
           p2.setCurso("Informatica")
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
  
  