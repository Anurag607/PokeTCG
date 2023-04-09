const pokeData = [
    {
        "hp": 78,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
        "pokeName": "Charizard",
        "statAttack": 84,
        "statDefense": 78,
        "statSpeed": 100
    },
    {
        "hp": 90,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/62.svg",
        "pokeName": "Poliwrath",
        "statAttack": 95,
        "statDefense": 95,
        "statSpeed": 70
    },
    {
        "hp": 75,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg",
        "pokeName": "Sandslash",
        "statAttack": 100,
        "statDefense": 110,
        "statSpeed": 65
    },
    {
        "hp": 65,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
        "pokeName": "Beedrill",
        "statAttack": 90,
        "statDefense": 40,
        "statSpeed": 75
    },
    {
        "hp": 60,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg",
        "pokeName": "Raichu",
        "statAttack": 90,
        "statDefense": 55,
        "statSpeed": 110
    },
    {
        "hp": 79,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
        "pokeName": "Blastoise",
        "statAttack": 83,
        "statDefense": 100,
        "statSpeed": 78
    },
    {
        "hp": 60,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/47.svg",
        "pokeName": "Parasect",
        "statAttack": 95,
        "statDefense": 80,
        "statSpeed": 30
    },
    {
        "hp": 65,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/53.svg",
        "pokeName": "Persian",
        "statAttack": 70,
        "statDefense": 60,
        "statSpeed": 115
    },
    {
        "hp": 35,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/51.svg",
        "pokeName": "Dugtrio",
        "statAttack": 100,
        "statDefense": 50,
        "statSpeed": 120
    },
    {
        "hp": 90,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg",
        "pokeName": "Nidoqueen",
        "statAttack": 92,
        "statDefense": 87,
        "statSpeed": 76
    },
    {
        "hp": 140,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg",
        "pokeName": "Wigglytuff",
        "statAttack": 70,
        "statDefense": 45,
        "statSpeed": 45
    },
    {
        "hp": 52,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/83.svg",
        "pokeName": "Farfetchd",
        "statAttack": 90,
        "statDefense": 55,
        "statSpeed": 60
    },
    {
        "hp": 75,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/45.svg",
        "pokeName": "Vileplume",
        "statAttack": 80,
        "statDefense": 85,
        "statSpeed": 50
    },
    {
        "hp": 80,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/55.svg",
        "pokeName": "Golduck",
        "statAttack": 82,
        "statDefense": 78,
        "statSpeed": 85
    },
    {
        "hp": 70,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/49.svg",
        "pokeName": "Venomoth",
        "statAttack": 65,
        "statDefense": 60,
        "statSpeed": 90
    },
    {
        "hp": 73,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg",
        "pokeName": "Ninetales",
        "statAttack": 76,
        "statDefense": 75,
        "statSpeed": 100
    },
    {
        "hp": 80,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/71.svg",
        "pokeName": "Victreebel",
        "statAttack": 105,
        "statDefense": 65,
        "statSpeed": 70
    },
    {
        "hp": 95,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/36.svg",
        "pokeName": "Clefable",
        "statAttack": 70,
        "statDefense": 73,
        "statSpeed": 60
    },
    {
        "hp": 80,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/73.svg",
        "pokeName": "Tentacruel",
        "statAttack": 70,
        "statDefense": 65,
        "statSpeed": 100
    },
    {
        "hp": 65,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg",
        "pokeName": "Fearow",
        "statAttack": 90,
        "statDefense": 65,
        "statSpeed": 100
    },
    {
        "hp": 65,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/78.svg",
        "pokeName": "Rapidash",
        "statAttack": 100,
        "statDefense": 70,
        "statSpeed": 105
    },
    {
        "hp": 81,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg",
        "pokeName": "Nidoking",
        "statAttack": 102,
        "statDefense": 77,
        "statSpeed": 85
    },
    {
        "hp": 90,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/68.svg",
        "pokeName": "Machamp",
        "statAttack": 130,
        "statDefense": 80,
        "statSpeed": 55
    },
    {
        "hp": 100,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/382.svg",
        "pokeName": "Kyogre",
        "statAttack": 100,
        "statDefense": 90,
        "statSpeed": 90
    },
    {
        "hp": 55,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/65.svg",
        "pokeName": "Alakazam",
        "statAttack": 50,
        "statDefense": 45,
        "statSpeed": 120
    },
    {
        "hp": 80,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
        "pokeName": "Venusaur",
        "statAttack": 82,
        "statDefense": 83,
        "statSpeed": 80
    },
    {
        "hp": 90,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/59.svg",
        "pokeName": "Arcanine",
        "statAttack": 110,
        "statDefense": 80,
        "statSpeed": 95
    },
    {
        "hp": 60,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",
        "pokeName": "Arbok",
        "statAttack": 95,
        "statDefense": 69,
        "statSpeed": 80
    },
    {
        "hp": 95,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg",
        "pokeName": "Slowbro",
        "statAttack": 75,
        "statDefense": 110,
        "statSpeed": 30
    },
    {
        "hp": 60,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
        "pokeName": "Butterfree",
        "statAttack": 45,
        "statDefense": 50,
        "statSpeed": 70
    },
    {
        "hp": 150,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/487.svg",
        "pokeName": "Giratina-altered",
        "statAttack": 100,
        "statDefense": 120,
        "statSpeed": 90
    },
    {
        "hp": 100,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/483.svg",
        "pokeName": "Dialga",
        "statAttack": 120,
        "statDefense": 120,
        "statSpeed": 90
    },
    {
        "hp": 100,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/251.svg",
        "pokeName": "Celebi",
        "statAttack": 100,
        "statDefense": 100,
        "statSpeed": 100
    },
    {
        "hp": 90,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/484.svg",
        "pokeName": "Palkia",
        "statAttack": 120,
        "statDefense": 100,
        "statSpeed": 100
    },
    {
        "hp": 106,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/250.svg",
        "pokeName": "Ho-oh",
        "statAttack": 130,
        "statDefense": 90,
        "statSpeed": 90
    },
    {
        "hp": 80,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/76.svg",
        "pokeName": "Golem",
        "statAttack": 120,
        "statDefense": 130,
        "statSpeed": 45
    },
    {
        "hp": 105,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/384.svg",
        "pokeName": "Rayquaza",
        "statAttack": 150,
        "statDefense": 90,
        "statSpeed": 95
    },
    {
        "hp": 35,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
        "pokeName": "Pikachu",
        "statAttack": 55,
        "statDefense": 40,
        "statSpeed": 90
    },
    {
        "hp": 83,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
        "pokeName": "Pidgeot",
        "statAttack": 80,
        "statDefense": 75,
        "statSpeed": 101
    },
    {
        "hp": 100,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/383.svg",
        "pokeName": "Groudon",
        "statAttack": 150,
        "statDefense": 140,
        "statSpeed": 90
    },
    {
        "hp": 120,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/493.svg",
        "pokeName": "Arceus",
        "statAttack": 120,
        "statDefense": 120,
        "statSpeed": 120
    },
    {
        "hp": 55,
        "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
        "pokeName": "Raticate",
        "statAttack": 81,
        "statDefense": 60,
        "statSpeed": 97
    }
];

const sortedpokeData=pokeData.sort((a,b) => a.statAttack > b.statAttack ? -1 : 1)

// console.log(sortedpokeData);
export default sortedpokeData;