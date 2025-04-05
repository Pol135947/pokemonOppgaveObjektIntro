function showPokemon(){
    app.innerHTML = /*HTML*/ `

    <div class="buttonContainer">
        <button onclick="updateView()">Finn en annen</button>
    </div>
    `;

    const container = document.getElementById("pokemonContainer");
    playerPokemon.forEach(pokemon => {
        const card = document.createElement("div")
        card.classList.add("card")

        card.innerHTML = `
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <div class="stats">
                <p> Health: ${pokemon.health}</p>
                <p> Level: ${pokemon.level}</p>
            </div>
        `;
        container.appendChild(card);        
    });
}


