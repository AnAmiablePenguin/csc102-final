/*Fucntion to generate a random number*/
function rollDice(){
    // Assigns variable randomNumber to a randomly generated number between 1-6
    var randomNumber = Math.floor(Math.random()*6)+1
    // Gets the image element bang to be used to generate the different outcomes
    var bangImage = document.getElementById("bang");
    bangImage.src = "bang" + randomNumber + ".jpg"
}

function validInput(){
    let zipCode = document.getElementById("zipCode").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let validName = firstName + " " + lastName;
    if (validName.length<=20 && zipCode.length== 5){
        alert("Registration successful!");
    }
    else{
        alert ("First and last name must not exceed 20 characters, and the zip code must be a exactly 5 digits. Please make the corresponding changes.")
    }
}


