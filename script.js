let dinnerContainer = "";
let enterDinner = "";
let dinnerSuggestion = "";
let searchBar = "";
let dinnerOutput = "";

let dinnerHelp = document.getElementById("dinner");

updateView();
function updateView(){
    dinnerHelp.innerHTML+= /*HTML*/`
    
    <h1> DINNER TIME! </h1>
    <h3> Help Wanted - Help Given </h3>

    <input type="text" id="enterDinner">

    <h5> Need a Dinner Suggestion? </h5>
    <div id="dinnerOutput"></div>
    <button id="helpMe"> Help! </button>

    ;`
}