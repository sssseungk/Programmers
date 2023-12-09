function solution(cipher, code) {
    let answer = [];
    let array = cipher.split("")

    for(let i=code-1; i<array.length; i+=code){
        answer.push(array[i]);
    }
    return answer.join("");
}