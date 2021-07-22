const messagesRef = firebase.database.ref();

messageRef.push({
    message: "This was made with Javascript",
    passcode: "JavaScript"
});