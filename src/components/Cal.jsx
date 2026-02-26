export default function Cal(num, kind) {

  let elec = 0; // 전기 최초 입력량
  let battery = 0; // 고정적으로 사용해야 하는 열에너지뱅크 수
  let firCal = 0; // 추가 배터리를 구하기 위해 1차적 계산
  let secCal = 0; // 2차적 계산

  let maxA = 0; // 분배기 갯수
  let maxB = 0; // 분배기 + 합류기 갯수
  let max = 0; // 산출값 이하의 정수중 가장 큰 수

  elec = (num - 200); // 기본 발전량 차감

  if (kind == 0) {
    battery = Math.floor(elec / 220);
    firCal = elec % 220;

    if (firCal == 0) {
      console.log("완전 균형 상태")
      return;
    }

    secCal = 4400 / firCal;

    let pow2 = 1;

    for (let a = 0; pow2 <= secCal; a++) {

      let pow3 = 1;

      for (let b = 0; pow2 * pow3 <= secCal; b++) {

        let value = pow2 * pow3;

        if (value > max) {
          max = value;
          maxA = a;
          maxB = b;
        }

        pow3 *= 3;  // 다음 3^b
      }

      pow2 *= 2;  // 다음 2^a
    }

    return { battery, max, maxA, maxB, firCal, secCal };

  }

  else if (kind == 1) {
    battery = Math.floor(elec / 420);
    firCal = elec % 420;

    if (firCal == 0) {
      console.log("완전 균형 상태")
      return;
    }

    secCal = 8800 / firCal;

    let pow2 = 1;

    for (let a = 0; pow2 <= secCal; a++) {

      let pow3 = 1;

      for (let b = 0; pow2 * pow3 <= secCal; b++) {

        let value = pow2 * pow3;

        if (value > max) {
          max = value;
          maxA = a;
          maxB = b;
        }

        pow3 *= 3;  // 다음 3^b
      }

      pow2 *= 2;  // 다음 2^a
    }

    return { battery, max, maxA, maxB, firCal, secCal };

  }

  else if (kind == 2) {
    battery = Math.floor(elec / 1100);
    firCal = elec % 1100;

    if (firCal == 0) {
      console.log("완전 균형 상태")
      return;
    }

    secCal = 22000 / firCal;

    let pow2 = 1;

    for (let a = 0; pow2 <= secCal; a++) {

      let pow3 = 1;

      for (let b = 0; pow2 * pow3 <= secCal; b++) {

        let value = pow2 * pow3;

        if (value > max) {
          max = value;
          maxA = a;
          maxB = b;
        }

        pow3 *= 3;  // 다음 3^b
      }

      pow2 *= 2;  // 다음 2^a
    }

    return { battery, max, maxA, maxB, firCal, secCal };

  } else if (kind == 3) {
    battery = Math.floor(elec / 1600);
    firCal = elec % 1600;

    if (firCal == 0) {
      console.log("완전 균형 상태")
      return;
    }

    secCal = 32000 / firCal;

    let pow2 = 1;

    for (let a = 0; pow2 <= secCal; a++) {

      let pow3 = 1;

      for (let b = 0; pow2 * pow3 <= secCal; b++) {

        let value = pow2 * pow3;

        if (value > max) {
          max = value;
          maxA = a;
          maxB = b;
        }

        pow3 *= 3;  // 다음 3^b
      }

      pow2 *= 2;  // 다음 2^a
    }

    return { battery, max, maxA, maxB, firCal, secCal };
    
  }
}