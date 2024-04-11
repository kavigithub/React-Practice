function countDown(i){
    console.log("Countdown: " + i);
    if(i <= 1){ //The base case is when the function stops calling itself. This prevents infinite loops.
        return
    } else{
        countDown(i -1); //recursive case , what to do next time..The recursive case is when the function calls itself. 
    }
}
countDown(5)

function factorial(x){
    if(x == 1){
        return 1
    } else {
        return x * factorial(x - 1);
    }
}
console.log(factorial(5), "factorial");

function Sum(arr, n){
    if(n <= 0){
        return 0
    } else {
        console.log(arr[n-1], 'me')
        return Sum(arr, n-1) + arr[n-1];
    }
}
console.log(Sum([2, 3, 4, 5], 2));
//Recursion with Objects and Arrays