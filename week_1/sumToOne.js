function sumToOne(num){
    var digit=0;
    var sum=0;
    while(num > 0){
        digit = num % 10;
        sum +=  digit;
        num = num/10
        num = Math.floor(sum);
    }
    console.log(sum)
}

conosle.log("99S");
