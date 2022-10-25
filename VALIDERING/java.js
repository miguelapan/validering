


const regForm = document.querySelector('#regForm');

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');


var error = document.querySelector('#errorMessage');

var bye = () =>{
    error.classList.remove('d-none');
}
var hello = () =>{
    error.classList.add('d-none');
}


const valideraText = (input) =>{
    if(input.value === ''){
        console.log('Inget namn inskrivet'); 
        bye();  
        return false;  
    }else if(input.value.length < 2){
        console.log('Måste vara minst två tecken')
        bye();
        return false;
    }else if(document.querySelector('#password').value != 
    document.querySelector('#repeatPassword').value){
        console.log('lösenord måste vara samma');
        bye();

        return false;
    }
    return true;
}
regForm.addEventListener('submit', e =>{
    e.preventDefault();

valideraText(firstName)
valideraText(lastName)







if(valideraText(firstName) && valideraText(lastName)){

    const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email:    email.value,
        password: password.value,}
    
    hello();    
    console.log('success')
    console.log(user)
}

   
});










// Förhindra sidan att laddas om när formuläret ska valideras.

// Validera alla fälten så att alla fält måste ha ett innehåll 
// och checkrutan måste klickas i.

// Om något av fälten inte är ifyllda eller checkrutan inte är iklickad 
// så ska du logga ett felmeddelande i consolen där du skriver 
// att någonting har gått fel.
// Om valideringen går igenom så ska du istället logga ut 
// ett success meddelande i consolen och skapa ett user objekt 
// som har följande fält: firstName, lastName, email, password. 
// Detta objekt ska också skrivas ut i consolen



// För väl godkänt ska du även göra följande:


// Alla fälten ska valideras så att korrekt information skriv in. 
// (email måste vara en emailadress, lösenorden måste matcha 
// varandra samt ha en längd på minst 6 och ett namn ska inte 
// få vara kortare än 2 bokstäver samt inte innehålla några siffror)

// Om det är något fel i valideringen så ska du visa texten i 
// validation-feedback diven längst ner i formuläret 
// genom att ta bort klassen d-none på p taggen.

// Du ska även consol logga ett meddelande med 
// vilket av fälten som inte är korrekt ifyllda.

// När man har fyllt i alla fälten korrekt och 
// trycker på "validate" så ska du dölja felmeddelandet 
// längst ner igen och även skriva ut ett success meddelande 
// i consolen och skapa ett user objekt som har följande fält: 
// firstName, lastName, email, password. 
// Detta objekt ska också skrivas ut i consolen