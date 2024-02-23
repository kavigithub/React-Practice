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





