function solution(strlist) {
    var answer = [];
    for(let i=0; i<strlist.length; i++){
        // "We" "are" "the" "world!"
        answer.push(strlist[i].length);
    }
    return answer;
}