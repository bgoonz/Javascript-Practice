//write a program to log all numbers from 1 to 100
//except for numbers divisable by three in which case log 'fizz'
//for numbers divisable by 5(and not 3) log buzz

function fizzBuzz() {
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
