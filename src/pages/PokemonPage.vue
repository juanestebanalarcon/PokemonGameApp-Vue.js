<template>
  <h1>Who is this Pokemon?</h1>
  <PokemonPictureComponent :id="1" :showPok="true"/>
  <PokemonOptionsComponent :pokemons="pokemonArr" @selection-pokemon="checkAnswer"/>
          <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                Nuevo Juego
            </button>
        </template>
</template>

<script>
import PokemonPictureComponent from '@/components/PokemonPictureComponent'
import PokemonOptionsComponent from '@/components/PokemonOptionsComponent.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'
export default {
    components:{PokemonPictureComponent,PokemonOptionsComponent},
     data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods:{
        async mixPokemonsArray(){
            this.pokemonArr = await getPokemonOptions()
            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ rndInt ]
        },
         checkAnswer( selectedId ) {
            this.showPokemon = true
            this.showAnswer  = true
            if( selectedId === this.pokemon.id ) {
                this.message = `Correcto, ${ this.pokemon.name }`
            } else {
                this.message = `Oops, era ${ this.pokemon.name }`
            }
        },
        newGame() {
            this.showPok = false
            this.showAnswer  = false
            this.pokemonArr  = []
            this.pokemon     = null
            this.mixPokemonArray()            
        },
        mounted(){
            this.mixPokemonsArray()
        }
    }
}
</script>

<style>

</style>