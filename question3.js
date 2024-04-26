//3. ⁠Write a JavaScript function that takes an array of numbers and returns a new array with multiple of two

//Question : [1,2,3,4]
//Answer: [2,4,6,8]



var arr = [1,2,3,4];
var ans=[];

var count =0;
for(let i=0;i<arr.length;i++){
        ans[count] = arr[i]*2;
        count++;
}
console.log(ans);