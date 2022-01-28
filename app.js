// document.getElementById('Anything').innerHTML="Hello World";

//Easier to make an array for the characters and leave it as const person?//
// Is that possible to have the person and their stats listed in the array?//
//Or do you need a seperate const for every character? There has to be a way//
//that you can just make a general 'player' function and then further specify, no?//
//Is this where nesting comes in?//
const players = [
    {
        name: "Mel",
        hp: 500,
        atk: 7,
        def: 6,
    },

    {   name: "Pocket",
        hp: 500,
        atk: 7,
        def: 6
    },
    {
        name: "Spider",
        hp: 500,
        atk: 7,
        def: 6
    }
];
var fightingPlayer = {
    name: "",
    hp: 0,
    atk: 0,
    def: 0
};


const enemy = {
    name: "Apparition",
    hp: 200,
    atk: 10,
    def: 10,

    //name:"Skeleton",
    //hp: 500,
    //atk: 2,
    //def: 10,
};

const ShowPlayerStats = (playerName) => {
    var activePlayer = (players.find( ({name}) => name === playerName));
    console.log(activePlayer);
    displayPlayerStats(activePlayer);
    setFightingPlayer (activePlayer);
}

const setFightingPlayer = (playerObj) => {
    fightingPlayer = {
        name: playerObj.name,
        hp: playerObj.hp,
        atk: playerObj.atk,
        def: playerObj.def
    }
};

const displayPlayerStats = (playerObj) => {
    document.getElementById('Name').innerHTML=playerObj.name
    document.getElementById('HP').innerHTML=playerObj.hp
    document.getElementById('ATK').innerHTML=playerObj.atk
    document.getElementById('DEF').innerHTML=playerObj.def

}

const updatePlayerStats = (playerObj) => {
    var activePlayerIndex = players.findIndex( ({name}) => name === playerObj.name);
    players[activePlayerIndex] = {
        name: playerObj.name,
        hp: playerObj.hp,
        atk: playerObj.atk,
        def: playerObj.def
    }
//console.log(activePlayerIndex, players[activePlayerIndex])
}

//console.log("Player Stats:", Melstats.name, "HP", Melstats.hp, "Atk", Melstats, "Def", Melstats.def);

displayPlayerStats(players[0]);
setFightingPlayer (players[0]);

const Fight = () => {
    enemy.hp = enemy.hp-fightResult(Multiplier(fightingPlayer.atk), Multiplier(enemy.def)); 
    fightingPlayer.hp = fightingPlayer.hp-fightResult(Multiplier(enemy.atk), Multiplier(fightingPlayer.def));
    console.log("Enemy",enemy.hp);
    console.log(fightingPlayer.name, fightingPlayer.hp);
    updatePlayerStats(fightingPlayer);
    document.getElementById('HP').innerHTML=fightingPlayer.hp
}

const Multiplier = (input) => {
    return Math.floor(Math.random()*input)
}

const fightResult = (atk,def) => {
    if(def >= atk){
        return 0;
    }else{
        return atk-def;
    }
}

//this what I need to replace h1 with h2, maybe?//
function reset(){
    setTimeout(document.getElementById('h1').innerHTML='h2', 200);
  }
