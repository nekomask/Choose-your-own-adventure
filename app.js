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
console.log("As you glance around, you realize this is an alleyway and you slept under a cardboard box. You've been in worse places.")

dogYoga();

console.log("It's time to start your day. You venture forth from the alley onto a busy street.")
console.log("As you make your way onto the bustling sidewalk, the owner of a Butcher Shop catches your eye.")

butcherEncounter();

console.log("As you leave the Butcher Shop, a stray cat approaches. His souless eyes tell you nothing.")
console.log("You've been around the block a few times and know that cats can be friendly or they can also be agents of chaos.")

catEncounter();

console.log("It's time we do a wellness-check.")

displayStatus();

continueInput();

console.log("It's about 11:30AM and it's been quite a day!")

beyondKFCEncounter();

console.log("You're done for the day")
console.log("now YOU are Hungry. What do you do?")









function beyondKFCEncounter(){
    const KFCDecision = prompt('Deliver the Wings or eat them yourself? Enter [D] to deliver or [E] to eat them.')
    console.log(`${username} chose ${KFCDecision}`);
    if(KFCDecision === "D"){
        console.log("Great! The customer is super happy!")
        console.log("They gave you a tip!")
        console.log("You made a new friend-- Morty!")
        playerMoney += 10;
        friends.push("Morty");
        playerItems.push("Two delicious nuggets!")
    }else if(KFCDecision === "E"){
        console.log("You scoundrel! How dare you!")
        console.log("Morty is now your sworn enemy")
        enemies.push("Morty")
        playerItems.push("A full order of beyond KFC")
    }else{
        console.log("The drool begins to slide down your chin as you gaze into the abyss. As you reflect upon your shortcomings and potentially erroneous choices that led up to this moment-- a feeling of dread creeps over you. Maybe you should pick one of the available choices.")
        beyondKFCEncounter();
    }
    }
    
    function dogYoga(){
        const yogaDecision = prompt('Time to get that blood flowing! Enter [D] to "Downward Dog" or [C] to "Cat pose". ')
        console.log(`${username} chose ${yogaDecision}`);
        if(yogaDecision === "D"){
            console.log("You allow gravity to increase blood flow and improve circulation.")
            console.log("Praise the sun!")
        }else if(KFCDecision === "C"){
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
        }
        for(let i = 0; i < enemies.length; i++){
            console.log(`Your enemies are ${enemies[i]}`)
            if(enemies.length === 0){
                console.log("You have no enemies. Aren't you the popular one!")
            }
        }
    }

    function continueInput(){
        const contInput = prompt ('Press any button to continue')
    }

    function catEncounter(){
        const catDecision = prompt('The cat is getting closer. What do you do? Press [B] to Bark or [I] to ignore.')
        console.log(`${username} chose ${catDecision}`);
        if(catDecision === "B"){
            console.log("You summon the strength to unleash an impressive string of barks that will ring throughout the ages.")
            console.log("Success! You scared the cat away.")
            console.log("It appears that in his haste the cat dropped something. You sniff it for a moment and decide put it in your dog wallet.")
            playerItems.push("Cat toy")
        }else if(KFCDecision === "I"){
            console.log("You stand perfectly still and observe the cat gets closer and closer. You lock eyes and things feel like they're about to get intense.")
            console.log("Without warning the cat hisses and scratches your face with his claw. Ouch!")
            console.log("You are startled and run in the opposite direction. You should have known better.")
            enemies.push("Cat")
            playerHealth += -10
        }else{
            console.log("The drool begins to slide down your chin as you gaze into the abyss. As you reflect upon your shortcomings and potentially erroneous choices that led up to this moment-- a feeling of dread creeps over you. Maybe you should pick one of the available choices.")
            catEncounter();
        }
        }