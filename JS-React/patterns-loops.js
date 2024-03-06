let refLink = 'https://www.youtube.com/watch?v=lsOOs5J8ycw';
function partern1(){
    for(let row = 1; row <= 5; row++){
        let pattern = '';
        for(let column = 1; column <= row; column++){
            pattern += '* '
        }
        console.log(pattern)
    }
}
partern1()

//this is done by me 
function  drawPattern2(){
    for(let row = 5; row > 0; row--) {
        let str = '';
       for(let column = 1; column < row; column++){
        /* console.log(column) */
        str += '* '
       }
        console.log(str)
    }
}
drawPattern2();

//this is done b y kunal
function patternNo3(){
    let n = 5
    for(let row = 1; row <= n; row++){
        let star = "";
        for(let col = 1; col <= n - row + 1 ; col++){
            console.log( row, col, n - row + 1);
            star += '* '
        }
        console.log(star);
    }
}
patternNo3();

console.log('______________________');

function patternNo4(){
    let n = 5
   for(let row = 1; row <= n; row++){
    let str = '';
    for(let column = 1; column <= n; column++){
        str += '* '
    }
    console.log(str);
   } 
}
patternNo4();

console.log('______________________')

function pattern5(){
    let n = 5;
    for(let row = 1; row <= n; row++){
        let str = '';
        for(let column = 1; column <= row; column++){
            str += column
        }
        console.log(str);
    }
}
pattern5();

console.log('______________________')

function pattern6(){
    let n = 4; // Setting the value of 'n' to 4
    for(let row = 0; row <= n * 2; row++){ // Looping through rows from 0 to 8 (2 times 'n')
        let str = ''; // Creating an empty string variable 'str' to store the pattern for each row
        let totalColumnInRow = row > n ? (n * 2 - row) : row; // Deciding the total number of columns for each row
        console.log(n, n * 2, row, n * 2 - row, totalColumnInRow)

        for(let col = 0; col <= totalColumnInRow; col++) { // Looping through columns based on the total number calculated
           str += '* '; // Adding '*' to the 'str' for each column
        }
        console.log(str); // Printing the row number and the pattern for that row
    }    
}
pattern6(); // Calling the function

console.log('__________________________')

function pattern7(){
    let n = 4;
    for(let row = 0; row <= n * 2; row++){
        let str = '';
        let totalColumnInRow = row > n ? (n * 2 - row) : row;

        let numberOfSpaces = n - totalColumnInRow;
        for(let space = 0; space <= numberOfSpaces; space++){
            str += ' ';
        }

        for(let col = 0; col < totalColumnInRow; col++){
            str += "* ";
        }
        console.log(str);
    }
}

pattern7();

console.log('__________________________');

function pattern8(){
    let num = 4;
    for(let row = 1; row < 2 * num - 1; row++){
        let str = '';
        for(let column =  1; column <  2 * num - 1; column++){
            let atEveryIndex = 123;
            console.log(column, row);
            str += atEveryIndex + ' '
        }
        console.log(str);
    }
}
pattern8();








