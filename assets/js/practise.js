class array{
    constructor(){
        Object.defineProperty(arr, 'lenght',{
            value:0,
            enumerable:false,
            writable:true,
        })

        for(let i in arguments){
            arr[i]=arguments[i]
            arr.lenght+=1
        }
        return arr
    }

    
}