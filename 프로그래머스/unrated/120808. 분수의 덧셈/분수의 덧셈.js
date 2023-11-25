function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let topnumer = (numer1*denom2) + (numer2*denom1);
    let botdenom = denom1 * denom2;
    const getGcd = (a, b) => (a % b == 0 ? b : getGcd(b, a % b));
    let gcd = getGcd(topnumer, botdenom);
    answer.push(topnumer / gcd);
    answer.push(botdenom / gcd);
    return answer;
}