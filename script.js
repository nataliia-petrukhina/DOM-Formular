const form = document.getElementById("user-form");
const messageContent = document.getElementById("message-content");

const nameInput = document.getElementById("name");
const countryInput = document.getElementById("country");
const yearInput = document.getElementById("year");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(nameInput.value, countryInput.value, yearInput.value);

    //Dieses JAHR   
    const currentJahr = new Date().getFullYear(); 
    //actuelles Jahr
    const alter = currentJahr - yearInput.value;


//Nachricht
messageContent.textContent=`Hallo ${nameInput.value} aus ${countryInput.value}! Du bist ${yearInput.value} Jahr Alt`;

form.reset();

});

