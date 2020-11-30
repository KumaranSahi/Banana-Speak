let inputTextElement=document.getElementById('input');
let translateButton=document.getElementById('translate-button');
let outputElement=document.getElementById('output');

translateButton.onclick=()=>{
    fetch(`https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/minion.json?text=${inputTextElement.value}`)
    .then(response=>response.json())
    .then(response=>{
        outputElement.innerHTML=response.contents.translated
    }
    )
}