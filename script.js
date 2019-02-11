var  cadena = "Volve a la escuela! Ah, No, cierto que mauri las cierra";
var  cadena2 = "te mereces el cielo"

document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value);


});

document.getElementById('hablarr').addEventListener("click",()=>{
    decir(document.getElementById("textok").value);


});


function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

}
