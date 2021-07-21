const getMessages = () => {
    //firebase obj --> grab hold of database --> grab a reference to that DB
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot)=>{
        const data = snapshot.val();
        console.log(data);
        for(let key in data){
            const message = data[key];
            console.log(message);
            if(myPass == message.passcode){
                renderMessage(message);
            }
        }
    })
}



getMessages();