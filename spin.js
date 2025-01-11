 //1.  Deposit some money
 //2. Dermine number of lines to bet on 
 //3. Collect a bet amount
 //4.Spin the slot machine
 //5.Check if the user won 
 //6.Give the user their winnings
 //7.Play again 

const prompt = require("prompt-sync")();

const Rows = 3;
const cols = 3;

const SYMBOLS_COUNT ={
    'R': 2,
    'B': 3,
    'G': 5,
    'Y': 10,
}

const SYMBOLS_VALUES = {
    'R': 3,
    'B': 4,
    'G': 6,
    'Y': 4,
}


const Deposit = () => {
    while (true) { 
        const DepositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount); 
        
            if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
                console.log("invalid Deposit Amount,try again later.");
            } else {
                return numberDepositAmount;
            }   
     }
    }; 



    const getnumberoflines= () => {
        while (true) { 
            const lines = prompt("Enter the number od lines to bet on (1-3): ");
            const numberoflines = parseFloat(depositAmount); 
            
                if (isNaN(numberoflines) || numberoflines<= 0) {
                    console.log("invalid number of lines,try again later.");
                } else {
                    return numberoflines;
                }   
         }
        }; 


        const getbet= (balance) => {
            while (true) { 
                const bet = prompt("Enter the bet per line: ");
                const numberbet = parseFloat(bet); 
                
                    if (isNaN(numberbet) || numberbet<= 0 || numberbet > balance / lines) {
                        console.log("invalid bet amount,try again later.");
                    } else {
                        return numberbet;
                    }   
         } 
        }

   const Spin = ()  => { 

    const Symbols = [];
    for (const [ Symbol, count] of Object.entries(SYMBOLS_COUNT)) {
      for (let i = 0; i < count; i++) {
        Symbols.push(Symbol); 
      }
 
 }

 const reels =  [];
for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...Symbols];
    for (let j = 0; j < Rows; j++) {
        const randomIndex = Math.floor(Math.random() *reelSymbls.length);
        const selectedsymbol  = reelSymbols[randomIndex];
        reel[i].push(selectedsymbols);
        reelsymbols.splice(randomIndex, 1);
    }

return reels;
     };
   }

   const transpose = () => {
    const rows = [];

    for (let i = 0; i < rows; i++) {
        rows.push([]);
        for (let j = 0; j < cols; j++) {
            rows[i].push(reels[j][i]);
        }
 
        return rows;
   };

   const printRows = (rows) => {
   for ( const row of rows )
    let rowString = ""
for (const [i,symbol] of rows.entries()){
    rowString += symbol
    if ( i i==rows.length - i){
        rowString += " "
        }
        }
    console.log(rowString)
   }
};

const getwinnings = (rows,bet,lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allsame = true;

        for (const symbol in symbol) {
            if (symbols[symbol]!== symbols[0]) {
                allsame = false;
                break;
            }   
        }

        if (allsame) {
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }

    }

    return winnings;
};
 

 let  balance = deposit()
 const numberoflines = getnumberoflines();
 const bet = getbet(balance, numberoflines)
 const reels = Spin();
 const rows = transpose(reels);
printRows(rows);
const winnings = getwinnings(rows,bet,numberoflineslines)
console.log("You won, $" + winnings.toString());


