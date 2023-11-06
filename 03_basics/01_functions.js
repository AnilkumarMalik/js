function greet(){
    console.log("hi");
}

//greet()


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers(12,2);



function addTwoNumbers(number1, number2){
    // let result=number1 + number2;
    // return result;

    return number1 +number2;
}

const result =addTwoNumbers(13,23);
//console.log(result);


function loginUserMessage(userName ='Anil'){
    if(!userName){
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`;
}

// console.log(loginUserMessage('Raja'));
// console.log(loginUserMessage("sam"));


function calculteCartPrice(...num){
    return num
}

//console.log(calculteCartPrice(12,100,200,400));


//An Object passing inside function

let user={
    name:'Anil',
    email:"anilkumar@gmail.com"

}

function handleObject(anyobj){
    console.log(`Username is ${anyobj.name} and email is ${anyobj.email}`);
}

//handleObject(user)

// handleObject({
//     name: 'Anil Kumar',
//     email: 'anilkumar91@gmail.com'
// })


let myArray=[2,3,45,1,35,654,22,6]

function returnSecondValue(arr){
    return arr[1]
}
console.log(returnSecondValue(myArray));