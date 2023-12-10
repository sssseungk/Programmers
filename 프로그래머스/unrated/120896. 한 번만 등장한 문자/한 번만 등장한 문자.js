function solution(s) {
    let array = [];
    
    for(let i=0; i<s.length; i++){
        // 문자열에 해당 문자가 하나만 존재하는지 확인해야함
        if(s.split(s[i]).length-1 === 1){
            if(!array.includes(s[i])){
                array.push(s[i]);
            } 
        }
    }
    
    // 사전순으로 정렬
    array.sort();
    return array.join("");
}