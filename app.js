const inputText = document.querySelector("#inputText");
var outputText = document.querySelector("#outputText");
const btn = document.querySelector("#btn");

var serverURL = "https://api.funtranslations.com/translate/chef.json"

function errorHandler(params) {
    console.log("Something is wrong");
}



function translateText(params) {
    var text = inputText.value;
    var url = serverURL +"?" +"text="+text;

    fetch(url)
    .then(response => response.json())
    .then(json => {
        var output = json.contents.translated;
        outputText.innerText = output;
    })
    .catch(errorHandler)
}
btn.addEventListener('click',translateText);


