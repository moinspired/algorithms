function ra(arr){
    temp=[];
    for(i=0; i < arr.length; i++){
        temp[i]=arr[arr.length-1-i];
    }
    arr=temp;
    console.log(arr)
}



function sum(num)
{
    digit=0;sum=0;
    while(num > 0)
{
    digit=num%10;
    sum += digit;
   console.log(sum);
}
}

sum(123);
