<template>
  <h1>Who is this Pokemon?</h1>
  <PokemonPictureComponent :id="1" :showPok="true"/>
  <PokemonOptionsComponent/>
</template>

<script>
import PokemonPictureComponent from '@/components/PokemonPictureComponent'
import PokemonOptionsComponent from '@/components/PokemonOptionsComponent.vue'
import getPokemonOptions from '@helpers/getPokemonOptions'
export default {
    components:{PokemonPictureComponent,PokemonOptionsComponent}
}
</script>

<style>

</style>