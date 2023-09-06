

//DOT Notation 
document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText").value;
    console.log("Hello", myName);
};

// Array
const numbers = [3, 8, 2, 5, 10, 7];
// Loop
for (let i = 0; i < numbers.length; i++) {
//Conditional Statement
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + ' is even');
    } else {
        console.log(numbers[i] + ' is odd');
    }
}



//Event Listener
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert("Welcome!");
});