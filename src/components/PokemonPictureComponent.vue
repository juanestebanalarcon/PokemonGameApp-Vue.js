<template>
  <div class="pokemon-container">
  <img :src="imgSrc" class="hidden-pokemon" alt="poke">
  <img :src="imgSrc" class="fade-in" alt="poke" v-if="showPok">
  </div>
</template>

<script>
export default {
    props:{
      id:{type:Number,required:true},
      showPok:{type:Boolean,required:true,default:false}
    },
    computed:{
      imgSrc(){
          return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`;
      }
}
}
</script>

<style scoped>
.hidden-pokemon{
  filter:brightness(0)
}
/* Pokemon Picture */
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    right: 32%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
</style>