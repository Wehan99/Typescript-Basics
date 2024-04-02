function add(n1 : number, n2 : number){
    return n1+n2;
}

function printResult(num : number){
    console.log("Results = "+ num);
}



printResult(add(10,15));

let combineValue : (a:number, b:number) => number;

function withCallback(n1:number, n2:number, cbFunction : (num:number)=> void){
    const returnV = n1 +n2;
    cbFunction(returnV);
}

combineValue =add;
console.log(combineValue(8,8));


withCallback(10,12, (returnV)=>{
    console.log(returnV);
    
})

    
