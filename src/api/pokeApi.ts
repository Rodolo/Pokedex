import axios from "axios";

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co',
});



export default pokeApi;