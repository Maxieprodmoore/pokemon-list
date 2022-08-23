import React from 'react';
import { SlCard, SlButton } from '@shoelace-style/shoelace/dist/react';

export default function pokedexCard({ pokemon }) {
  return (
    <div>
        {pokemon.map(p => (
            <SlCard className='pokedexCard' key={p}>
                <h3>{p}</h3>
                <div slot='footer'>
                    <SlButton>More Information</SlButton>
                </div>
            </SlCard>
        ))}
    </div>
  )
}
