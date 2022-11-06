import axios from 'axios'
const pokemonApi = axios.create({
    baseURL:'https://pokemonapi.co/v2/pokemon'
})
export default pokemonApi
