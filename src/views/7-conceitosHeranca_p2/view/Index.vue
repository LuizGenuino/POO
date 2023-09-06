<template>
    <div>
        
    </div>
</template>
        
<script lang="ts">
import { Visitante } from './visitante'
import { Aluno } from './aluno'
import { Bolsista } from './bolsista';

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
           // const p1 = new Pessoa() - não é possivel instanciar a classe Pessoa pois é uma classe abstrata
           const p1 = new Visitante() // classe visitante apenas herda tudo da classe pessoa não adiciona nada
           const p2 = new Aluno() //classe visitante herda tudo da classe pessoa e adiciona mais coisas
           const p3 = new Bolsista() //classe Bolsista herda tudo de aluno que por usa vez herda tudo de pessoa

           p1.setNome('Tiago') // classe visitante utilizando os atributos da classe Pessoa
           p1.setIdade(18)
           p1.setSexo('M')

           p2.setNome('Tiago') // como a classe Aluno estende (herda) a classe Pessoa ela recebe os tributos e metodos publico
           p2.setIdade(22)
           p2.setSexo('M')
           p2.setMatricula(1233) // utilizando um metodo da propria classe aluno
           p2.setCurso("Informatica")
           p2.pagarMensalidade()

           p3.setNome('Ana') // como a classe Bolsista estende (herda) a classe Aluno que herda a classe Pessoa ela recebe os tributos e metodos publico
           p3.setIdade(25)
           p3.setSexo('F')
           p3.setMatricula(1531) // utilizando um metodo da classe aluno
           p3.setCurso("Letras")
           p3.pagarMensalidade() //metodo sobrescrito da lasse Aluno na classe Bolsista
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
  
  