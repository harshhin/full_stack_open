const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter an array (comma-separated values): ", (input) => {
  const inputArray = input.split(",").map(Number);

  rl.question("Enter a multiplier: ", (multiplierInput) => {
    const multiplier = parseInt(multiplierInput);

    function transform(arr, multiplier) {
      return arr.map((i) => i * multiplier);
    }

    const outputArray = transform(inputArray, multiplier);
    console.log(outputArray);

    rl.close();
  });
});

// here in above code take two input from user, both are array and function
// and return the output of the function on the arr

//make the above code shorter using new variable
//const a = [1, 2, 3, 4, 5];
//const b = a.map((i) => i * 2);
//console.log(b);
