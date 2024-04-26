
//2. ⁠Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

//Question : [1,2,3,4]
//Answer: [2,4]


var arr = [1,2,3,4];
var ans=[];

var count =0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        ans[count] = arr[i];
        count++;
    }
}
console.log(ans);