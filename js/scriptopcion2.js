document.getElementById('hablarr').addEventListener("click",()=>{
    decir1(document.getElementById("textok").value);


});


function decir1(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto + " tu si que Te has ganado en el cielo, un lugar junto al general Perón"));

}
