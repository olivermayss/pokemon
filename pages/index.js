import React, { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';

import Menu from '../components/Menu';

import {
  Container,
  Jumbotron, 
  Button,

} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (data) => {
  const [lista = [], setLista] = useState(data.response.results);
  const imagemPokemon = async (url) => {
     const response = await axios.get(url);
     return response.data.sprites.front_default
  }
  const listarPokemon = () => {
    const pokemon = lista.map((p) =>
       <ul>
          <a href={'http://localhost:3000/detalhes?nome=' + p.name}>
             <img src={imagemPokemon(p.url)} height="100" width="80" />
             <li> {p.name}</li>

    

    
          </a>
       </ul>);
    return pokemon
 }
 return (
    <div>
       <Head>
       <title>Desafio-Pokemon</title>
          <meta name="description" content= "Site...do...desafio" />
        <meta name="author" content= "Pokemon"/>
       </Head>
       <Menu />
       <Container>
          {listarPokemon()}
       </Container>
    </div>
 )
};

Home.getInitialProps = async () => {
 var response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
 console.log(response.data);
 return { response: response.data }
}

export default Home;

