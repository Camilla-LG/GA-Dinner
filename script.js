let dinnerContainer = [];
let dinnerSuggestion = "";
let searchBar = "";
let viewDinner = "";
let groceryList = [];
let viewGroceryList = "";
let viewAllDinners ="";

let dinnerHelp = document.getElementById("dinner");


updateView();
function updateView(){
    dinnerHelp.innerHTML= /*HTML*/`
    
    <h1> DINNER TIME! </h1>
    <h3> Help Wanted - Help Given </h3>

    <div class="savedDinners">
        <input autofocus type="text" id="enterDinner" placeholder="Enter Suggestion...">
        <button id="inputClick" onclick="addDinner()"> Add this Dish </button>
        <div id="outputDinnerList"> ${dinnerContainer} </div>
        <button id="clickDinnerList" onclick="showDinnerList()"> Show All Dinners </button>
    </div> 
    <br>
    <div class="groceries">
        <input autofocus type="text" id="enterGrocery" placeholder="Enter Groceries...">
        <button id="addGroceryClick" onclick="addGrocery()"> Add Grocery Item </button>
        <div id="outputGroceryList"> ${groceryList} </div>
        <button id="clickGroceryList" onclick="showGroceryList()"> Show Grocery List </button>   
    </div>

    <div class="suggestions">
        <h4> Need a Dinner Suggestion? </h4>
        <div id="output"> ${viewDinner} </div>
        <button id="helpMe" onclick="dinnerTip()"> Help! </button>
        <button id="helpAllWeek" onclick="weeklyPlan()"> Give Me a 7 day Dinnerplan </button>
    </div>
    `;
}

function addDinner(){
    let enterDinnerValue = document.getElementById('enterDinner').value;
    dinnerContainer.push(enterDinnerValue);
    document.getElementById('enterDinner').value="";;
}

function dinnerTip(){
    document.getElementById('output');
    let randomIndex = Math.floor(Math.random() * dinnerContainer.length);
    viewDinner = dinnerContainer[randomIndex];
    updateView();
}

function showDinnerList(){
    for (let index = 0; index < dinnerContainer.length; index++){
        viewAllDinners = dinnerContainer[index];
    }
    updateView();
}

function addGrocery(){
    let enterGroceryValue = document.getElementById('enterGrocery').value;
    groceryList.push(enterGroceryValue);
    document.getElementById('enterGrocery').value ="";
}

function showGroceryList(){
    for (let index = 0; index < groceryList.length; index++){
        viewGroceryList = groceryList[index];
    }
    updateView();
}
