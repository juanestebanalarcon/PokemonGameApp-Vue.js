import pokemonApi from "../Api/pokemonApi"

const getPokemons = () =>{
    const pokemonArr = Array.from(Array(650));
    return pokemonArr.map((_,index)=>index+1);  
}
 const getPokemonsOptions = async() =>{
    const mixedPokemons = getPokemons().sort(()=>Math.random()-0.5);
    const pokemons = await getPokemonNames(    mixedPokemons.splice(0,4));
    return pokemons;
}
const getPokemonNames = async([a,b,c,d]=[]) =>{
    let promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ];
    const [res1,res2,res3,res4] = await Promise.all(promiseArr);
    return [
        {name: res1.data.name, id:res1.data.id},
        {name: res2.data.name, id:res2.data.id},
        {name: res3.data.name, id:res3.data.id},
        {name: res4.data.name, id:res4.data.id}
    ]
}
export default getPokemonsOptions