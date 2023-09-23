// Code your solutions in this file

function writeCards(names, action){
    let replies = []
    for (let i = 0; i < names.length; i++){
        let reply = `Thank you, ${names[i]}, for the wonderful ${action} gift!`;
        replies.push(reply);
    }
    return replies
}

function countDown(n){
    while(n >= 0){
        console.log(n);
        n--;
    }
}