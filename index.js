// Code your solutions in this file

function writeCards(names,occasion) {
    let thankYous = []
    for (let i = 0; i < names.length; i++) {
        thankYous.push (`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
    }
    return thankYous;
}
writeCards(names,occasion);

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
        debugger;
    }
}
countDown(10);