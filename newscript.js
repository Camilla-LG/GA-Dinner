const dinnerArray = [{dinnerObject: "pasta bolognese"}, {dinnerObject: "burger & fries"}, {dinnerObject: "pizza"}];
let dinnerObject = {};
let randomDinner = "";


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
            <div id="dinnerList"> ${showDinners()} </div> 
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
   

function showDinners(){
    let dinnerHtml = ``;
    for(let i = 0; i < dinnerArray.length; i++){
        dinnerHtml += /*HTML*/`
            <li class="dinnerAlternative" onclick="showGroceryList()"> ${dinnerArray[i].dinnerObject} </li>
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

function showGroceryList(){

}