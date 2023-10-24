// Pika-pika suerte!
const buttons = document.querySelector("#colors");
const pika = document.querySelector("#pika");

buttons.addEventListener("click", function(event){
    pika.style.backgroundColor = event.target.id;
})