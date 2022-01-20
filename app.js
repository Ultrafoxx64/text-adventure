// document.getElementById('Anything').innerHTML="Hello World";

const person = {
    name: "Mel",
    hp: 500,
    atk: 7,
    def: 6
};

const enemy = {
    name: "EVIL Mel",
    hp: 200,
    atk: 10,
    def: 10
};



console.log("Player Stats:", person.name, "HP", person.hp, "Atk", person.atk, "Def", person.def);


document.getElementById('Name').innerHTML=person.name
document.getElementById('HP').innerHTML=person.hp
document.getElementById('ATK').innerHTML=person.atk
document.getElementById('DEF').innerHTML=person.def

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