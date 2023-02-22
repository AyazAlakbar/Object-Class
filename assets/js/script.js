//alert("salam")


function addNumMonth(arr) {
    return arr.map((month,index)=>(index+1)+ "-"+month);
}


let month=["yanvar","fevral","mart","aprel"]
let numberedMonth=addNumMonth(month);

console.log(numberedMonth);







function countWord(string) {
    
    let words = string.split(" ");
    return string = words.map((word) => word.length);
    
  }


  let string = "Code Academy Web Development Group P515";
  let result = countWord(string);
  console.log(result);
    