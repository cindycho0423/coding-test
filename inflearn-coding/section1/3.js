// 연필 개수
// 연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때
// N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
//
// 입력 설명: 첫 번째 줄에 1000 이하의 자연수 N이 입력된다.
// 출력 설명: 첫 번째 줄에 필요한 다스 수를 출력합니다.
// 입력 예제: 25
// 출력 예제: 3

// -> 내가 쓴 답

function solution(n) {
  let answer;
  const pencilBox = 12;

  answer = Math.ceil(n / pencilBox);
  return answer;
}

console.log(solution(178));

// -> 해설
function solution2(n) {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution2(178));
