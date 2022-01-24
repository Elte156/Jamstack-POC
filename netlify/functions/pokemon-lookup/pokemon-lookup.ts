import { Handler } from '@netlify/functions'
import fetch from 'node-fetch';

export const handler: Handler = async (event, context) => {
  const POKE_API = 'https://pokeapi.co/api/v2/pokemon/';
  const randomId = Math.floor(Math.random() * 150) + 1;

  const response = await fetch(`${POKE_API}${randomId}`);
  const data = await response.json() as PokemonResponse;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `${data.name}`,
    }),
  }
}

interface PokemonResponse {
  name: string,
}
