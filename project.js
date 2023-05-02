const prompt = require("prompt-sync")();

const deposit = () => {
    while(true){
        const depositAmount = prompt("Please enter a deposit amount: ");
        const numberDepositamount = parseFloat(depositAmount);

        if (isNaN(numberDepositamount) || numberDepositamount<0 )  {
            console.log("You have entered an invalid deposit amount!!")
        } else {
            return numberDepositamount;
        }
    }
};

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Please enter the number of lines: ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines < 0  || numberOfLines > 3 )  {
            console.log("You have entered an invalid number of lines!!")
        } else {
            return numberOfLines;
        }
    }
}

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();
