function fizzBuzz (number: number): (string | number)[]{
  let results: (string  | number) [] = [];
  for(let i = 1; i <= number; i++){
    if(i % 5 === 0 && i % 3 === 0){
      results.push("FizzBuzz")
    } else if (i % 5 === 0){
      results.push("Buzz")
    } else if (i % 3  === 0){
      results.push("Fizz")
    } else{
      (i < 10) ? results.push(Number(`0${i}`)) : results.push(i)
    }
  }
  return results
}

console.table(fizzBuzz(16))