//alert("salam")

//=====================================================================================

//Task 2

function addNumMonth(arr) {
    return arr.map((month, index) => (index + 1) + "-" + month);
}


let month = ["yanvar", "fevral", "mart", "aprel"]
let numberedMonth = addNumMonth(month);

console.log({ ...numberedMonth });

//=====================================================================================

//Task 3

function countWord(string) {

    let words = string.split(" ");
    return string = words.map((word) => word.length);

}


let string = "Code Academy - Web Development Group P515";
let result = countWord(string);
console.log(result);

//=====================================================================================

//Task 4


class array {

    constructor() {
        let arr = Object.create(array.prototype)
        //
        Object.defineProperty(arr, 'length', {
            value: 0,
            enumerable: false,
            writable: true
        })


        for (let i in arguments) {
            arr[i] = arguments[i]
            arr.length += 1
        }

        return arr
    }


    Push(element) {
        this[this.length] = element
        this.length++
        return this.length
    }

    Find(cb) {
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



let arr = new array(1, 2, 3, 4, 5)
arr.Push(1);
arr.Push(2);


console.log(arr.Find(x => x > 3));

//=================================================================================

const Arr = [1, 2, 3, 4, 5];
const adlar = ["Lorem","Ipsum","Doler"]


//spread
//spread

const newArr = [...Arr, ...adlar]
console.log(newArr);


const Arr1="AYAZ"
const chars=[...Arr1]
console.log(chars);



 
/////////////////////////////////////////////////////

//rest
//rest
//rest

const [a,b,...log]=newArr;
console.log(a,b,log);

function foo(a,b,c,d,e){
    console.log(a,b,c,d,e)
}
foo("Lorem","Ipsum","Doler",...newArr)

const Lorem = {
    name:"Lorem",
    age: 32,
    City: "Baku"
}

const Ipsum = {
    name1:"Ipsum",
    age1:28,
    City1:"Baku"
}

// console.log(Lorem);
// console.log(Ipsum);

const person = {...Lorem, ...Ipsum};
console.log(person);