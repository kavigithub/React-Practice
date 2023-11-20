/* console.log('test');

function callMe(test){
    console.log(test);
    return test;
}

callMe('call me'); */

const p1 = fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
   /*  if(response.status === 404){
        throw new Error('p1 request failed');
    } */

    return response.json();
})
const p2 = fetch('https://jsonplaceholder.typicode.com/todos/2');
const p3 = fetch('https://jsonplaceholder.typicode.com/todos/3');

//console.log(p1);
Promise.all([p1, p2, p3]).then((response) => {
    console.log(response)
}).catch((error) => {
    console.error(error);
})
