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
    

class array {

    constructor(){
        let arr = Object.create(array.prototype)
        //
        Object.defineProperty(arr,'length',{
            value:0,
            enumerable:false,
            writable:true
        })
        
        
        for (let i in arguments) {
            arr[i] = arguments[i]
            arr.length += 1
        }

        return arr
    }


    Push(element){
        this[this.length] = element
        this.length++
        return this.length
    }
    
    Find(cb){
        let result = new array()

        for (let i in this) {

            if (this.hasOwnProperty(i)) {

                if (cb(this[i])) {
                    return this[i]
                }
            }
        }
    }
}



let arr = new array(1,2,3,4,5)
arr.Push(1);
arr.Push(2);


console.log(arr.Find(x=>x>3));

