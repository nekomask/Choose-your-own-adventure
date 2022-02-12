const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);

let playerHealth = 100;
let playerMoney = 0;
let playerItems = [];
let friends = [];
let enemies = [];

console.log("You are a stray dog just trying to ruff it in the streets. It's a dog-eat-dog world, no bones about it.")
console.log("It's 8AM and you awake in a strange place-- you don't remember how you got there. You must've had too much dog booze last night. You feel shame.")
console.log("As you glance around, you realize this is an alleyway and you slept under a cardboard box. You've been in worse places though.")
console.log("Let's wake up a little bit.")

dogYoga();

continueInput();

console.log("It's time to start your day. You venture forth from the alley onto a busy street.")
console.log("As you make your way onto the bustling sidewalk, the owner of a Butcher Shop catches your eye.")
console.log("Suddenly the smell of raw pig flesh sends your nasal passages into a frenzy and you begin to approach the shop.")
console.log("The butcher says something in his human language but you don't understand. You are a dog.")

butcherEncounter();

continueInput();

console.log("As you leave the Butcher Shop, a stray cat approaches. His souless eyes tell you nothing.")
console.log("You've been around the block a few times and know that cats can be friendly or they can also be agents of chaos.")

catEncounter();

console.log("It's time we do a wellness-check.")

displayStatus();

continueInput();

console.log("It's about 11:30AM and it's been quite a day!")

console.log("To be continued.")









function butcherEncounter(){
    const butcherDecision = prompt('What do you do? Press [B] to Bark or press [S] to sit and beg patiently. ')
    console.log(`${username} chose ${butcherDecision}`);
    if(butcherDecision == "B"){
        console.log("You enthusiastically bark at the shop owner.")
        console.log("I wan't meat!!")
        console.log("You were perhaps too aggressive and the butcher gets angry. You run off to avoid being butchered yourself.")
        console.log("The Butcher is now your enemy.")
        enemies.push("Butcher")
    }else if(butcherDecision == "S"){
        console.log("You sit and stare at the Butcher while wagging your tail patiently.")
        console.log("The Butcher smiles and reaches into his apron for a succulent goose liver. It's actually a delicacy in France.")
        console.log("The Butcher is now your friend.")
        friends.push("Butcher")
        playerItems.push("Tasty Goose Liver")
    }else{
        console.log("The drool begins to slide down your chin as you gaze into the abyss. As you reflect upon your shortcomings and potentially erroneous choices that led up to this moment-- a feeling of dread creeps over you. Maybe you should pick one of the available choices.")
        butcherEncounter();
    }
    }
    
    function dogYoga(){
        const yogaDecision = prompt('Time to get that blood flowing! Enter [D] to "Downward Dog" or [C] to "Cat pose". ')
        console.log(`${username} chose ${yogaDecision}`);
        if(yogaDecision == "D" && "d"){
            console.log("You allow gravity to increase blood flow and improve circulation.")
            console.log("Praise the sun!")
        }else if(yogaDecision == "C" && "c"){
            console.log("You give your body the ever-relaxing feline stretch. It feels good but you'd be embarassed if any of your dog bros saw you.")
        }else{
            console.log("The drool begins to slide down your chin as you gaze into the abyss. As you reflect upon your shortcomings and potentially erroneous choices that led up to this moment-- a feeling of dread creeps over you. Maybe you should pick one of the available choices.")
            dogYoga();
        }
        }





    function displayStatus(){
        console.log(`You have ${playerMoney} dollars left`);
        for(let i = 0; i < playerItems.length; i++){
            console.log(`You have a ${playerItems[i]}`)
            if(playerMoney === 0){
                console.log("You have no money. You are a dog.")
        }
        for(let i = 0; i < enemies.length; i++){
            console.log(`Your enemies are ${enemies[i]}`)
            if(enemies.length === 0){
                console.log("You have no enemies. Aren't you the popular one!")
            }
        }
        for(let i = 0; i < friends.length; i++){
            console.log(`Your friends are ${friends[i]}`)
            if(friends.length === 0){
                console.log("You have no friends. Sorry you had to find out this way. :(")
            }
        }
    }
}

    function continueInput(){
        const contInput = prompt ('Press any button to continue ')
    }

    function catEncounter(){
        const catDecision = prompt('The cat is getting closer. What do you do? Press [B] to Bark or [I] to ignore. ')
        console.log(`${username} chose ${catDecision}`);
        if(catDecision == "B"){
            console.log("You summon the strength to unleash an impressive string of barks that will ring throughout the ages.")
            console.log("Success! You scared the cat away.")
            console.log("It appears that in his haste the cat dropped something. You sniff it for a moment and decide put it in your dog wallet.")
            playerItems.push("Cat toy")
        }else if(catDecision == "I"){
            console.log("You stand perfectly still and observe the cat gets closer and closer. You lock eyes and things feel like they're about to get intense.")
            console.log("Without warning the cat hisses and scratches your face with his claw. Ouch!")
            console.log("You are startled and run in the opposite direction. You should have known better.")
            enemies.push("Cat")
            playerHealth += -40
        }else{
            console.log("The drool begins to slide down your chin as you gaze into the abyss. As you reflect upon your shortcomings and potentially erroneous choices that led up to this moment-- a feeling of dread creeps over you. Maybe you should pick one of the available choices.")
            catEncounter();
        }
        }