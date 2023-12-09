function solution(array, n) {
    let diff = 0;
    let newArray = [];
    
    for(let i=0; i<array.length; i++){
        diff = Math.abs(n-array[i]);    
        newArray.push({value:array[i], diff: diff});
    }
    newArray.sort((a, b) => {
    if (a.diff === b.diff) {
      return a.value - b.value; 
    }
    return a.diff - b.diff;
  });
    return newArray[0].value;
}