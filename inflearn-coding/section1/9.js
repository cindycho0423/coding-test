// A를 #으로
// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램을 작성하세요.
//
// 입력 설명: 첫 번째 줄에 문자열이 입력된다.
// 출력 설명: 첫 번째 줄에 바뀐 단어를 출력한다.
// 입력 예제: BANANA
// 출력 예제: B#N#N#

// 해설 1
function solution(s) {
  let answer = '';
  for (let x of s) {
    if (x == 'A') answer += '#';
    else answer += x;
  }
  return answer;
}

// 해설 2
function solution(s) {
  let answer = s;
  answer = answer.replace(/A/g, '#');
  return answer;
}

// 내가 쓴 답 1
function solution(s) {
  let answer = '';
  s.split('').forEach(x => (x === 'A' ? (answer += '#') : (answer += x)));

  return answer;
}

// 내가 쓴 답 2
function solution(s) {
  return s.replaceAll('A', '#');
}

let str = 'BANANA';
console.log(solution(str));

// -> 해설
