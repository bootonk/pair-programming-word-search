const transpose = function(matrix) {
    const rowCount = matrix.length;
    const colCount = matrix[0].length;
    let outputArr = [];
  
    for (let i = 0; i < colCount; i++) {
      let innerArr = [];
      for (let j = 0; j < rowCount; j++) {
        innerArr.push(matrix[j][i]);
      }
      outputArr.push(innerArr);
    }
  
    return outputArr;
  };

const wordSearch = (letters, word) => {
    //horizontal check
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    } 
     //vertical check
    const turnLetters = transpose(letters);
    const verticalJoin = turnLetters.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    } 

    return false;
}

module.exports = wordSearch

