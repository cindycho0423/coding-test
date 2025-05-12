function calculateAndSortByValue(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].push(items[i][1] / items[i][0]);
  }

  return items.sort((a, b) => b[2] - a[2]);
}

function solution(items, weightLimit) {
  items = calculateAndSortByValue(items);
  let totalValue = 0;
  let remainWeight = weightLimit;

  for (item of items) {
    let [weight, value] = item;

    if (weight < remainWeight) {
      totalValue += value;
      remainWeight -= weight;
    } else {
      //남은 가치만큼 계산
      totalValue += (value / weight) * remainWeight;
      remainWeight = 0;
      break;
    }
  }

  return totalValue;
}

console.log(
  solution(
    [
      [7, 10],
      [10, 19],
      [6, 10],
    ],
    15
  )
);
