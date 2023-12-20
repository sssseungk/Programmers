function solution(spell, dic) {
    let answer = 0;

    for (let i=0; i<dic.length; i++) {
        let isPossible = true;
        for (let j=0; j<spell.length; j++) {
            // 한 문자라도 포함하지 않으면
            if (!dic[i].includes(spell[j])) {
                isPossible = false;
                answer = 2;
                break;
            }
        }
        if (isPossible) {
            answer = 1;
            break;
        }
    }
    return answer;
}
