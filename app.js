// document.getElementById('Anything').innerHTML="Hello World";

//Easier to make an array for the characters and leave it as const person?//
// Is that possible to have the person and their stats listed in the array?//
//Or do you need a seperate const for every character? There has to be a way//
//that you can just make a general 'player' function and then further specify, no?//
//Is this where nesting comes in?//
const Melstats = {
    name: "Mel",
    hp: 500,
    atk: 7,
    def: 6,
};

//document.getElementById("Stats").innerHTML =  Melstats;//
//not what works, but am I on the right track, sorta?//
//basically want it to be like onclick -> display stats of chosen character//

const Pocket = {
    name: "Pocket",
    hp: 500,
    atk: 7,
    def: 6
};

const Spider = {
    name: "Spider",
    hp: 500,
    atk: 7,
    def: 6
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


console.log("Player Stats:", Melstats.name, "HP", Melstats.hp, "Atk", Melstats, "Def", Melstats.def);


document.getElementById('Name').innerHTML=Melstats.name
document.getElementById('HP').innerHTML=Melstats.hp
document.getElementById('ATK').innerHTML=Melstats.atk
document.getElementById('DEF').innerHTML=Melstats.def

const Fight = () => {
    enemy.hp = enemy.hp-Multiplier(person.atk) + Multiplier(enemy.def); 
    person.hp = person.hp-Multiplier(enemy.atk) + Multiplier(person.def);
    console.log("Enemy",enemy.hp);
    console.log(person.name, person.hp);
    document.getElementById('HP').innerHTML=person.hp
}

const Multiplier = (input) => {
    return Math.floor(Math.random()*input)
}

const NoHeals = () => {
    if (enemy.hp > 200) 
    return enemy.hp;
}

//this what I need to replace h1 with h2, maybe?//
function reset(){
    setTimeout(document.getElementById('h1').innerHTML='h2', 200);
  }
