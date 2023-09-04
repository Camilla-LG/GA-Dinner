let dinnerContainer = [];
let dinnerSuggestion = "";
let searchBar = "";
let viewDinner = "";

let dinnerHelp = document.getElementById("dinner");


updateView();
function updateView(){
    dinnerHelp.innerHTML= /*HTML*/`
    
    <h1> DINNER TIME! </h1>
    <h3> Help Wanted - Help Given </h3>

    <div class="savedDinners">
        <input autofocus type="text" id="enterDinner" placeholder="Enter Suggestion...">
        <button id="inputClick" onclick="addDinner()"> Add this Dish </button>
    </div>

    <div class="suggestions">
        <h4> Need a Dinner Suggestion? </h4>
        <div id="output"> ${viewDinner} </div>
        <button id="helpMe" onclick="dinnerTip()"> Help! </button>
    </div>
    `;
}

function addDinner(){
    let enterDinnerValue = document.getElementById('enterDinner').value;
    dinnerContainer.push(enterDinnerValue);
    document.getElementById('enterDinner').value="";
}

function dinnerTip(){
    document.getElementById('output');
    let randomIndex = Math.floor(Math.random() * dinnerContainer.length);
    viewDinner = dinnerContainer[randomIndex];
    let helpButton = document.getElementById('helpMe');
    helpButton = "Try Again";
    updateView();
}