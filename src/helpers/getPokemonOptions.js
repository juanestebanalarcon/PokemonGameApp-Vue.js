const getPokemons = () =>{
    const pokemonArr = Array.from(Array(650));
    return pokemonArr.map((_,index)=>index+1);  
}
export default getPokemonsOptions = () =>{
    const mixedPokemons = getPokemons().sort(()=>Math.random()-0.5);
    getPokemonNames(    mixedPokemons.splice(0,4))
}
const getPokemonNames = ([a,b,c,d]=[]) =>{}