const viewMsgButton = document.querySelector("#viewMsg");
const passcodeInput = document.querySelector("#passcode");

viewMsgButton.addEventListener("click", (e) => {
    const userPasscodeGuess = document.querySelector("#passcode").value;
    //find message
    findAndDisplayMessage(userPasscodeGuess);

});


function findAndDisplayMessage(proposedPasscode){
    //get a stage and reference our database
    const messagesRef = firebase.database().ref();
    messagesRef.on("value", (snapshot)=>{
        //static snapshot of the contents at a given path
        //basically an obj where you get value + other things from (what timestamp you're looking at, who wrote it, etc.)
       
        //snapshot.val() is a list of all the values in our db
        const data = snapshot.val();
        console.log(data)
        for(let key in data){
            if(proposedPasscode==data[key].passcode){
                display(data[key])
                document.querySelector('.container').innerHTML = data[key].message
                document.getElementById('login').classList.add("hide");
            }
        }
    })
}

const display = (messageObject) =>{
    console.log(messageObject);
}