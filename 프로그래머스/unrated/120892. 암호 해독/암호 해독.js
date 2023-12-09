function solution(cipher, code) {
    let answer = [];
    let array = cipher.split("")

    for(let i=0; i<=array.length; i+=code){
        answer.push(array[i-1]);
    }
    return answer.join("");
}