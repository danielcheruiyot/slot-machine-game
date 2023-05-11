const prompt = require("prompt-sync")();




const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A : 2,
    B : 4,
    C : 6,
    D : 8
}

const SYMBOL_VALUES = {
    A:5,
    B:4,
    C:3,
    D:2
}


const deposit = () => {
    while(true){
        const depositAmount = prompt("Please enter a deposit amount (min. Ksh.10, max. Ksh.200,000): ");
        const numberDepositamount = parseFloat(depositAmount);

        if (isNaN(numberDepositamount) || numberDepositamount<10|| numberDepositamount > 200000 )  {
            console.log("You have entered an invalid deposit amount!!")
        } else {
            return numberDepositamount;
        }
    }
};

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Please enter the number of lines (1-3 lines): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines < 0  || numberOfLines > 3 )  {
            console.log("You have entered an invalid number of lines!!")
        } else {
            return numberOfLines;
        }
    }
}

const getBet = (balance, lines) => {
   while (true) {
    const bet = prompt("Ënter the amount to bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet<=0 || numberBet > (balance/lines) ) {
        console.log("You have entered an invalid bet amount")
    }
    else {
        return numberBet;
    }
   }   
}

const spin = () => {
    const symbols = [];

    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (Let i = 0, i < count, i++) {
            symbols.push(symbol)
        }

        console.log(symbol)
    }
};



let balance = deposit();
const numberOfLines = getNumberOfLines();
const betAmount = getBet(balance, numberOfLines);
