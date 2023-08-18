function FizzBuzz (number) {
  let counter = Number(number);
  let results = [];

  for(let i = 1; i <= counter; i++){
    if(i % 3 === 0 && i % 5 === 0){
      results.push("FizzBuzz")
    } else if (i % 5 === 0){
      results.push("Buzz")
    } else if (i % 3 === 0){
      results.push("Fizz")
    } else if(i < 10) {
      results.push(Number(`0${i}`))
    } else{
      results.push(i)
    }
  }

  return results;
}
