import React from 'react';

const upperFirstLetter = (pokeName) => {
    const pokeNameCapitalized = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
    return pokeNameCapitalized;
}

function Card({poke, shiny, fnc}){
    return(
        <div class="vignette">
            <div>
                <img src={(shiny ? poke?.sprites.front_shiny : poke?.sprites.front_default) ?? "https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png" } alt={poke?.name} onClick={ () => shiny ? fnc(null) : fnc(!shiny) } />
            </div>
            <div>
                <span>{poke?.id}</span>
                <h4>{upperFirstLetter(poke.name)}</h4>
            </div>
        </div>
    );
}

export default Card;