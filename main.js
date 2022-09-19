var num=parseInt(prompt("Enter a number"))
var sum=0
var rem;
while(num!=0){
    rem=num%10;
    sum=sum+rem;
    num=Math.floor(num/10);
    
}
console.log(sum);