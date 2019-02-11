

document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value);
    decir(document.getElementById("primer").value);


});

document.getElementById('hablarr').addEventListener("click",()=>{
    decir(document.getElementById("textok").value);


});


function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

}
