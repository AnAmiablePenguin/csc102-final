const memeImage = document.getElementById("memeImage");

let position = 0;

const button1 = document.getElementById("startImage");

const button2 = document.getElementById("stopImage");

//Starts moving the image 1 px from the left 
function animateImage(){
    position += 1;
    memeImage.style.left = position + 'px'; 
    requestAnimationFrame(animateImage); 
}

//Counteracts the animateImage by reducing horizontal movement back to zero
function stopImage(){
    position -= 1;
    memeImage.style.left = position + 'px';
    requestAnimationFrame(stopImage);
}

//Checks if button1 is disabled, and then enables button2; else keeps button1 enabled and button2 disabled
function disableButton1(){
    if(button1.disabled == true){
        button2.disabled = false;
    }
    else{
        button1.disabled = true;
        button2.disabled = false;
    }
}
//Checks if button2 is disabled, and then enables button1; else keeps button2 enabled and button1 disabled
function disableButton2(){
    if(button2.disabled == true){
        button1.disabled = false;
    }
    else{
        button2.disabled = true;
        button1.disabled = false;
    }
}