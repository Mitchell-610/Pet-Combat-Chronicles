
const randomBtn = document.querySelector(`#randomizeBtn`);
const battleBtn = document.querySelector(`#battleBtn`);
const pastBtn = document.querySelector(`#pastBtn`);
const nameValue = document.querySelector(`#searchName`);
const breedValue = document.querySelector(`#searchBreed`);
let dogsArray = [];
let cpuDogFact = [];
let yourDogFact = [];

function fetchImage(dogName){
    console.log(dogName);
}


function fetchDog(){
fetch('https://dogapi.dog/api/v2/breeds')
    .then(response => response.json())
    .then(data => {
        data.data.forEach(breed => {
            const name = breed.attributes.name;
            const dogHypo = breed.attributes.hypoallergenic;
            //Here we are pulling attributes for max and min weight
            const weightmax = breed.attributes.male_weight.max;
            const weightmin = breed.attributes.male_weight.min;
            const dogWeight = weightmax - weightmin;

            const lifespanmax = breed.attributes.life.max;
            const lifespanmin = breed.attributes.life.min;
            const dogLife = lifespanmax / lifespanmin;

            const fact = breed.attributes.description;

            let dog = {
                name: name,
                dogHypo: dogHypo,
                dogLife: dogLife,
                dogWeight: dogWeight,
                fact: fact
            };

            dogsArray.push(dog);

          //  console.log(`Your dog is a: ${name}, He has a weight of: ${dogWeight}, A Lifespan of: ${dogLife}, and ${dogHypo} a Hypoallergy.`);
           // console.log(` `);
        });
    });
}
function rollDice() {
    // Generate a random number between 1 and 6
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    // Display the result in the console
    console.log("You rolled a " + diceRoll);
    return diceRoll;

}

//Call the function to roll the dice
// rollDice();

let myDog;



//Creating cards for left and right side of screen, user and cpu.
randomBtn.addEventListener(`click`, function (event) {
    event.preventDefault();
    // console.log(dogsArray);

    let rd = dogsArray[(Math.floor(Math.random() * dogsArray.length))];
    console.log(rd);
    let rdn = rd.name;
    console.log(rdn);
    let rdw = rd.dogWeight;
    console.log(rdw);
    let rdh = rd.dogHypo;
    console.log(rdh);
    let rdl = rd.dogLife;
    console.log(rdl);

    cpuDogFact.push(rd.fact);
    console.log(cpuDogFact);

    let ld = dogsArray[(Math.floor(Math.random() * dogsArray.length))];
    console.log(ld);
    let ldn = ld.name;
    console.log(ldn);
    let ldw = ld.dogWeight;
    console.log(ldw);
    let ldh = ld.dogHypo;
    console.log(ldh);
    let ldl = ld.dogLife;
    console.log(ldl);

    fetchImage(ldn)

myDog = {

    ldn:ld.name,
    ldw:ld.dogWeight,
    ldh:ld.dogHypo,
    ldl:ld.dogLife,

}

cpuDog = {

    rdn:rd.name,
    rdw:rd.dogWeight,
    rdh:rd.dogHypo,
    rdl:rd.dogLife,


}


    yourDogFact.push(ld.fact);
    console.log(yourDogFact);
//Appending it to screen in code below.
    let rightDog = document.getElementById(`rightDog`);
    console.log(rightDog);

    rightDog.children[0].textContent = rdn;
//Tie in photo here.


    let leftDog = document.getElementById(`leftDog`);
    console.log(leftDog);

    leftDog.children[0].textContent = ldn;
//Tie in photo here.


});
let rightDogUniversalscore;
let leftDogUniversalscore;

let ldFinalScore;
//total power tally for left dog / player dog
function totallifeLD(){
const diceRoll = rollDice()

    console.log("THIS IS MY DICE ROLL", diceRoll)

    if (myDog.ldh == true){
            console.log("ITS TRUE")
       ldFinalScore = diceRoll + myDog.ldw + myDog.ldl + 1;
   } else {
    console.log("ITS FalSE")
     ldFinalScore = diceRoll + myDog.ldw + myDog.ldl;
   }
    console.log("My dog final score is:", ldFinalScore)}

    let rdFinalScore;
    function totallifeRD(){
        const diceRoll = rollDice()
        
            console.log("THIS IS MY COMPUTERS DICE ROLL", diceRoll)
        
            if (cpuDog.rdh == true){
                    console.log("ITS TRUE")
               rdFinalScore = diceRoll + cpuDog.rdw + cpuDog.rdl + 1;
               leftDogUniversalscore = rdFinalScore;
            } else {
            console.log("ITS FalSE")
             rdFinalScore = diceRoll + cpuDog.rdw + cpuDog.rdl;
             rightDogUniversalscore = rdFinalScore;
            }
            console.log("CPU dog final score is:", rdFinalScore)
           

        //             console.log(`these are our competing final scores, My dog:, ${ldFinalScore} CPU Dog: ${rightDogUniversalscore}`)

        }

        //For popup at end of battle.
function popUpCard() {

};


//To close popup at end of battle.
function closeCard(event) {
    event.preventDefault();

    if (close === true) {
        return;
    };

};

     
   battleBtn.addEventListener("click", finalBattle);
    
function finalBattle(){

    rightDogUniversalscore = rdFinalScore;
    leftDogUniversalscore = rdFinalScore;
             console.log(`these are our competing final scores, My dog:, ${ldFinalScore} CPU Dog: ${rightDogUniversalscore}`)

totallifeLD()

totallifeRD()
}




fetchDog()

//Call the function to roll the dice
//rollDice();