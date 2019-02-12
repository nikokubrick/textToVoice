

document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value);



});




function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto + " tu si que Eres un Pedazo de gato vendepatria cipáyo"));

}
