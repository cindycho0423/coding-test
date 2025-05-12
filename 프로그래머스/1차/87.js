function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let deliveryCap = 0;
  let pickupCap = 0;

  // 가장 먼 집부터 처리 (뒤에서부터 접근)
  for (let i = n - 1; i >= 0; i--) {
    // 현재 집에서 배달/수거해야 할 물품 추가
    deliveryCap += deliveries[i];
    pickupCap += pickups[i];

    // 트럭 용량을 초과하는 경우 여러 번 왕복 필요
    while (deliveryCap > 0 || pickupCap > 0) {
      // 한 번의 왕복에서 최대 cap만큼 처리 가능
      deliveryCap -= cap;
      pickupCap -= cap;

      // 이번 집까지의 왕복 거리 추가 (왕복이므로 *2)
      answer += (i + 1) * 2;
    }
  }

  return answer;
}
