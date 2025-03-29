// function solution(채점) {
//   let answer = 0;
//   let score = 0;

//   for (let i = 0; i < 채점.length; i++) {
//     if (채점[i] === 1) {
//       if (채점[i - 1] === 1 && 채점[i] === 1) {
//         score++;
//         answer += score;
//       } else if (채점[i - 1] === 0 && 채점[i] === 1) {
//         score = 1;
//         answer++;
//       } else if (채점[i - 1] === undefined && 채점[i] === 1) {
//         score = 1;
//         answer++;
//       }
//     }
//   }

//   return answer;
// }

function solution(rate) {
  let answer = 0;
  let score = 0;

  for (let a of rate) {
    if (a === 1) {
      score++;
      answer += score;
    } else {
      score = 0;
    }
  }
  return answer;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0])); // ✅ 예상: 10, 결과: 10
console.log(solution([1, 1, 1, 1, 1])); // ✅ 예상: 15, 결과: 15
console.log(solution([0, 0, 0, 0, 0])); // ✅ 예상: 0, 결과: 0
console.log(solution([1, 0, 1, 0, 1, 0, 1])); // ✅ 예상: 4, 결과: 4
console.log(solution([1, 1, 0, 1, 1, 1, 0, 1])); // ✅ 예상: 10, 결과: 10
console.log(solution([0, 1, 1, 1, 0, 1, 1])); // ✅ 예상: 9, 결과: 9
console.log(solution([1])); // ✅ 예상: 1, 결과: 1
console.log(solution([0])); // ✅ 예상: 0, 결과: 0
console.log(solution([1, 1, 0, 0, 1, 1, 1, 1, 1])); // ✅ 예상: 18, 결과: 18
