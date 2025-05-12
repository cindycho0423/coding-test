function solution(N, stations, W) {
  let count = 0;
  // 기지국 - 전파도달거리보다 크고
  // 기지국 + 전파도달거리보다 작은 경우
  // 1로 채우고 아닌 경우 0을 return
  let checkedApartment = Array.from({ length: N }, (_, i) => {
    for (let station of stations) {
      if (i + 1 >= station - W && i + 1 <= station + W) {
        return 1;
      }
    }
    return 0;
  });

  let location = 0;
  while (location <= N) {
    if (checkedApartment[location] === 0) {
      count++;
      location += W * 2 + 1;
    } else {
      location++;
    }
  }

  return count;
}

// 시간 초과 뜸ㅠㅠ

function solution1(N, stations, W) {
  let answer = 0;
  let location = 1; // 현재 탐색하는 아파트의 위치
  let idx = 0; // 설치된 기지국의 인덱스

  while (location <= N) {
    // 기지국이 설치된 위치에 도달한 경우
    // 아직 지나가지 않은 기지국이 남았고,
    // 기지국 전파 전달 범위 내에 위치한 경우
    if (idx < stations.length && location >= stations[idx] - W) {
      location = stations[idx] + W + 1;
      idx += 1;
    } else {
      location += 2 * W + 1; //기지국을 설치하고 해당 범위를 넘어감
      answer += 1;
    }
  }
  return answer;
}

console.log(solution1(11, [4, 11], 1));
console.log(solution1(16, [9], 2));
