let btnTranslate=document.querySelector('#btn-translate');

let txtInput=document.querySelector('.txt-input');
console.log(txtInput);

let outputDiv=document.querySelector('#output');
console.log(outputDiv);

let serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslatedUrl(txt){
    return serverUrl+"?"+"text="+txt;
}
function errorHandler(error){
    console.log("Error Occured"+error);
    alert("The error is"+error);
}

function clickEventHandler(){
    console.log('clicked');
    console.log("Input: ",txtInput.value);

    fetch(getTranslatedUrl(txtInput.value))
    .then(response=>response.json())
    .then(json=>{
        var transText=json.contents.translated;
        outputDiv.innerText=transText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener('click',clickEventHandler);
console.log(btnTranslate);