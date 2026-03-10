function ClosureOfFactorial() {
  function factorial(n) {
    if (n === 0 || n === 1) 
    {
        return 1;
    }
    return n * factorial(n - 1);
  }

  return function () 
  {
    for (let i = 0; i <= 10; i++) 
    {
      console.log(`Factorial of ${i} = ${factorial(i)}`);
    }
  };
}

const printFactorials = ClosureOfFactorial(); 
printFactorials();