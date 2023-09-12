<template>
    <div>
        
    </div>
</template>
        
<script lang="ts">
import Mamifero from './mamiferos';
import Peixe from './peixe';
import Reptil from './reptil';
import Canguru from './canguru';



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
          const m = new Mamifero()
          const r = new Reptil()
          const p = new Peixe()
          const c = new Canguru()

          m.setPeso(35.5)
          m.setCorPelo("Marrom")
          m.getCorPelo()
          m.getPeso()
          m.alimentar()
          m.locomover()
          m.emitirSom()

          r.setPeso(10)
          r.setCorEscama('cinza')
          r.getCorEscama()
          r.getPeso()
          r.alimentar()
          r.locomover()
          r.emitirSom()

          p.setPeso(5)
          p.setCorEscama('cinza')
          p.getCorEscama()
          p.getPeso()
          p.alimentar()
          p.locomover()
          p.emitirSom()

          c.setPeso(50)
          c.setCorPelo("laranja")
          c.getCorPelo()
          c.getPeso()
          c.alimentar()
          c.locomover() //modificamos o metodo herdado de mamifero que foi herdado de animal
          c.emitirSom()//modificamos o metodo herdado de mamifero que foi herdado de animal
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
  
  