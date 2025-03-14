function solution(amount) {
  let answer = [];
  let currencyUnit = [1, 10, 50, 100].reverse();

  for (let i = 0; i < currencyUnit.length; i++) {
    while (currencyUnit[i] <= amount) {
      answer.push(currencyUnit[i]);
      amount -= currencyUnit[i];
    }
  }

  return answer;
}
