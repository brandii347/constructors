var inquirer = require('inquirer');
var fs = require('fs');
var cardData = require('./basicCards.json');
    console.log(cardData);

function BasicCard (frontSide, backSide){
    this.front = frontSide;
    this.back = backSide;
}
inquirer.prompt([{
    type: "input",
    name: "frontSide",
    message: "What is the question you want to ask?"
},{
    type: "input",
    name: "backSide",
    message:"What is the answer you want"
}]).then(function(inputs){{
    var card = new BasicCard(inputs.frontSide, input.backSide);
    cardData.push(card);

    var newcardData = JSON.stringify(cardData, null, '\t');

    fs.writeFile('./basicCards.json', newcardData, function(err){
        if(err)throw err;
        console.log("DONE");
    })
}
createNewCard();
})
