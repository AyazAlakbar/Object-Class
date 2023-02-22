//alert("salam")

//=====================================================================================

//Task 2

function addNumMonth(arr) {
    return arr.map((month,index)=>(index+1)+ "-"+month);
}


let month=["yanvar","fevral","mart","aprel"]
let numberedMonth=addNumMonth(month);

console.log(numberedMonth);

//=====================================================================================

//Task 3

function countWord(string) {
    
    let words = string.split(" ");
    return string = words.map((word) => word.length);
    
  }


  let string = "Code Academy Web Development Group P515";
  let result = countWord(string);
  console.log(result);

//=====================================================================================

//Task 4
    