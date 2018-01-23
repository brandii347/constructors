var inquirer = require('inquirer');
var fs = require('fs');
var cardData = require('./clozeCards.json');

function clozeCard(fullText, answer){
    var start = fullText.indexOf(answer);
    if(start !== -1){
        return [start, start+answer.length];
    }
    throw new Error("Could not find answer in fullText");
}
function getPartial(fullText, clozePositions){
    var start = fullText.slice(0, clozePositions[0]),
    var end = fullText.slice(clozePositions[1], fullText.length);
    return start +"..."+ end;
}
clozeCard.prototype.displayCard = function displayCard(){
    console.log(this.partial.replace("...", this.answer));

function createNewCard(){
    inquirer.prompt([{
        type: "input",
        name: "fullText",
        message: "What is the Full text of the flashcard you want to make"
    },{
        type: "input",
        name: "fullText",
        message: "What is the answer to the flashcard you want to make"
    }]).then(function(inputs){
        var card = new clozeCard(inputs.fullText, inputs.answer);
        console.log(card);
    })
    cardData.push(card);
        var newcardData = JSON.stringify(cardData, null, '\t');
        fs.writeFile('./basicCards.json', newcardData, function(err){
            if(err)throw err;
            console.log();
        })
}
}