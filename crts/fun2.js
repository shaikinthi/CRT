function summethod1(a,b){
    sum=a+b
    return sum
}
const summethod2=function(a,b){
    sum=a+b
    return sum
}
const summethod3=(a,b) =>{
    sum=a+b
    return sum
}
let sum1=summethod1(6,9)
console.log(`sum = ${sum1}`)
console.log(`sum = ${summethod2(9,0)}`)
console.log(`sum = ${summethod3(10,5)}`)