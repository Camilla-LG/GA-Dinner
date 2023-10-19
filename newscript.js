const dinnerArray = [
    {
        dinnerObject: "pasta bolognese",
        groceries: ["pasta", "sauce"],
    },
    {
        dinnerObject: "burger & fries",
        groceries: ["burger", "fries"], 
    },
    {
        dinnerObject: "pizza",
        groceries: ["dough", "toppings"],
    }];
let dinnerObject = {};
let randomDinner = "";
let groceryList = [];


updateView();
function updateView(){
    document.getElementById('dinner').innerHTML = /*HTML*/`
    
    <h1> DINNER TIME! </h1>
    <h2> Help Wanted - Help Given </h2>

    <div class="dinnerContainer">
        <div class="dinnerArea">
            <input type="text" id="inputDinner" placeholder="Insert dinner here..." onchange="addDinner(this.value)">
            <br>
            <button onclick="showList()"> Vis Middagsliste </button>
        </div>
        <div class="mealplan">
            <div id="dinnerList"> 
                <div> Liste over middager </div>
                ${showDinners()}
            </div> 
            <br>
            <div id="OutputGroceryList" onclick="showGroceryList()"> 
                <div> Handleliste </div>
                ${groceryList.length > 0 ? showGroceries() : ''} 
            </div>
            <br>
            <div id="outputTip"> ${randomDinner} </div>
            <button onclick="dinnerTip()"> Middagsforslag </button>
        </div>
    </div>
    `
}

function showList(){
    let list = document.getElementById('dinnerList');
    if(list.style.display === "block"){
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
}

function showGroceryList(){
    let list = document.getElementById('OutputGroceryList');
    if(list.style.display === "block"){
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
}
   
//en liste med alle middagene, men ikke ingredienser
function showDinners(){
    let dinnerHtml = ``;

    for(let i = 0; i < dinnerArray.length; i++){
        dinnerHtml += /*HTML*/`
            <li class="dinnerAlternative" onclick="updateGroceryList(${i});showGroceryList()"> ${dinnerArray[i].dinnerObject} </li>
        `
    }
    return dinnerHtml;
}

function addDinner(dinnerObject){
    dinnerArray.push({dinnerObject})
    updateView();
}

function dinnerTip(){
    document.getElementById('outputTip');
    let randomIndex = Math.floor(Math.random() * dinnerArray.length);
    randomDinner = dinnerArray[randomIndex].dinnerObject;
    updateView();
}

//vise ingrediensene til den valgte retten
function updateGroceryList(dishIndex){
    groceryList = [];
    dinnerArray[dishIndex].groceries.forEach(ingredient => {
        groceryList.push(/*HTML*/`
        <li> ${ingredient} </li>`);
    });
    updateView();
}

function showGroceries(){
    let html = "";
    groceryList.forEach(item => {
        html += /*HTML*/ `
            ${item}
        `
    })
    return html;
}