let dinners = [];
let randomDinner = "";


updateView();
function updateView(){
    document.getElementById('dinner').innerHTML = /*HTML*/`
    
    <h1> DINNER TIME! </h1>
    <h3> Help Wanted - Help Given </h3>

    <input type="text" id="inputDinner" onchange="addDinner(this.value)">
    <button onclick="showList()"> Vis Middagsliste </button>
    <div id="dinnerList"> ${showDinners()} </div> 
    <br>
    <div id="outputTip"> ${randomDinner} </div>
    <button onclick="dinnerTip()"> Middagsforslag </button>
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
    for(let i = 0; i < dinners.length; i++){
        dinnerHtml += /*HTML*/`
        <ul>
            <li> ${dinners[i]} </li>
        </ul>
        `
    }
    return dinnerHtml;
}

function addDinner(inputValue){
    dinners.push(inputValue)
    updateView();
}

function dinnerTip(){
    document.getElementById('outputTip');
    let randomIndex = Math.floor(Math.random() * dinners.length);
    randomDinner = dinners[randomIndex];
    updateView();
}

