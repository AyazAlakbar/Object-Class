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
        
        Object.defineProperty(arr, 'length', {
            value: 0,
            enumerable: false,
            writable: true,
            configurable: false
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




// Bu kod, JavaScript dilinde bir array sınıfı tanımlamak için kullanılıyor. 
//Bu sınıfın özellikleri, bir dizi öğeyi depolayabilmesi ve bu öğelere bazı işlemler yapabilmesidir.

// Sınıfın constructor'ı, sınıf örneği oluşturulduğunda çalışır ve diziye argümanları ekler. 
//İlk olarak Object.create() kullanılarak yeni bir dizi oluşturulur ve bu dizi arr değişkenine atanır. 
//Ardından, Object.defineProperty() kullanılarak diziye bir length özelliği eklenir ve bu özellik sıfıra eşitlenir. 
//Daha sonra, arguments objesindeki her bir argüman, arr dizisine eklenir ve dizinin uzunluğu artırılır. Son olarak, arr dizisi döndürülür.

// Sınıfın Push() fonksiyonu, dizinin sonuna yeni bir öğe ekler ve dizinin uzunluğunu artırır. 
//Find() fonksiyonu, belirli bir koşulu sağlayan ilk öğeyi döndürür.
 //Bu koşul, fonksiyona parametre olarak verilen bir callback fonksiyonu aracılığıyla belirlenir.

// Kodun son kısmında, arr adlı bir array örneği oluşturulur ve Push() fonksiyonu kullanılarak dizinin sonuna 1 ve 2 öğeleri eklenir. 
//Son olarak, Find() fonksiyonu kullanılarak, 3'ten büyük ilk öğe bulunur ve bu öğe konsola yazdırılır.

// Özetle, bu kod bir array sınıfı oluşturur ve bu sınıfta bir diziye öğe eklemek, 
//öğeleri aramak gibi işlemler yapabilen bazı fonksiyonlar tanımlar.

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


const [a,b,...log]=newArr;
console.log(a,b,log);

function foo(a,b,c,d,e){
    console.log(a,b,c,d,e)
}
foo("Lorem","Ipsum","Doler",...newArr)

const Lorem = {
    name:"Lorem",
    age: 12,
    City: "Baku"
}

const Ipsum = {
    name1:"Ipsum",
    age1:18,
    City1:"Baku"
}

// console.log(Lorem);
// console.log(Ipsum);

const person = {...Lorem, ...Ipsum};
console.log(person);