//alert("salam")


function addNumMonth(arr) {
    return arr.map((month,index)=>(index+1)+ "-"+month);
}


let month=["yanvar","fevral","mart","aprel"]
let numberedMonth=addNumMonth(month);




console.log(numberedMonth);


