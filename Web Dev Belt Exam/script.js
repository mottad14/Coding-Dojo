console.log("Hello, my name is Danny and I'm here.")
function donated(element){
    element.remove()
}

function petSelection(element){
    console.log("You selected this " + element.value)
    alert("You are looking for a " + element.value);
}

function petButton1(){
    var countNum = document.querySelector("#petted1");
    countNum.innerText= (parseInt(countNum.innerText)+1)
}

function petButton2(){
    var countNum = document.querySelector("#petted2");
    countNum.innerText= (parseInt(countNum.innerText)+1)
}

function petButton3(){
    var countNum = document.querySelector("#petted3");
    countNum.innerText= (parseInt(countNum.innerText)+1)
}

// This was a failed easter egg attempt to send
// you to this webpage after selecting from the Drop Down List.

// function rawr(){
//     location.href = 'http://www.thebestdinosaur.com/';
// }