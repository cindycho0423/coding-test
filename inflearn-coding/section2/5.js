// function solution(score) {
//   let answer = [];
//   let array = [];

//   for (let i = 0; i < score.length; i++) {
//     array.push([score[i], i + 1]);
//   }

//   array.sort((a, b) => b[0] - a[0]).map(a => answer.push(a[1]));

//   return answer;
// }

function solution(score) {
  let arr = Array.from({ length: score.length }, () => 1);

  for (let i = 0; i < score.length; i++) {
    for (let j = 0; j < score.length; j++) {
      if (score[i] < score[j]) {
        arr[i]++;
      }
    }
  }
  return arr;
}

//
console.log(solution([87, 89, 92, 100, 76]));
