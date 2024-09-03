function fib(num) {
  let fibNumbers = [0, 1];

  if (num < 2) {
    return fibNumbers.slice(0, num);
  }

  while (num > 2) {
    const newNum = fibNumbers.at(-1) + fibNumbers.at(-2);
    fibNumbers.push(newNum);
    num--;
  }

  return fibNumbers;
}

function fibRecurse(num, fibNumbers = [0, 1]) {
  if (fibNumbers.length >= num) {
    return fibNumbers.slice(0, num);
  }

  const newNumber = fibNumbers.at(-1) + fibNumbers.at(-2);
  fibNumbers.push(newNumber);
  return fibRecurse(num, fibNumbers);
}
