console.log("page loaded...");

function sendRequest1(){
    console.log("You have clicked here");
    var contactCard = document.querySelector("#contactCard1");
    var requestNumber = document.querySelector("#connectionRequest");
    requestNumber.innerText = (parseInt(requestNumber.innerText)-1);
    if(parseInt(requestNumber.innerText) == 0){
        var connectRequest = document.querySelector("#connectCard")
        connectRequest.remove();
    }
    contactCard.remove();
}

function denyRequest1(){
    console.log("You have clicked here");
    var contactCard = document.querySelector("#contactCard1");
    var requestNumber = document.querySelector("#connectionRequest");
    requestNumber.innerText = (parseInt(requestNumber.innerText)-1);
    if(parseInt(requestNumber.innerText) == 0){
        var connectRequest = document.querySelector("#connectCard")
        connectRequest.remove();
    }
    contactCard.remove();
}

function sendRequest2(){
    console.log("You have clicked here");
    var contactCard = document.querySelector("#contactCard2");
    var requestNumber = document.querySelector("#connectionRequest");
    requestNumber.innerText = (parseInt(requestNumber.innerText)-1);
    if(parseInt(requestNumber.innerText) == 0){
        var connectRequest = document.querySelector("#connectCard")
        connectRequest.remove();
    }
    contactCard.remove();
}

function denyRequest2(){
    console.log("You have clicked here");
    var contactCard = document.querySelector("#contactCard2");
    var requestNumber = document.querySelector("#connectionRequest");
    requestNumber.innerText = (parseInt(requestNumber.innerText)-1);
    if(parseInt(requestNumber.innerText) == 0){
        var connectRequest = document.querySelector("#connectCard")
        connectRequest.remove();
    }
    contactCard.remove();
}